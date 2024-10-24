import { useState, useEffect, useRef, useCallback } from 'react';

import attach from '@/assets/attach.svg';
import send from '@/assets/send.svg';
import smily from '@/assets/smily.svg';
import upload from '@/assets/upload.svg';
import cross_icon from '@/assets/cross.svg';

import socket from '@/context/socket';
import EmojiPicker from 'emoji-picker-react';
import MessageBubble from './MessageBubble';
import { groupMessagesByDate } from '../../utils/groupMessagesByDate';
import useClickOutside from '../../hooks/useClickOutside';
import { PersonalHeader } from './PersonalHeader';
import { GroupHeader } from './GroupHeader';
import { CommunityHeader } from './CommunityHeader';

const MessageBox = ({ selectedUser }) => {
  const [replyBox, setReplyBox] = useState(false);
  const [replyId, setReplyId] = useState(null);
  const [open, setOpen] = useState(false);
  const [openAttach, setOpenAttach] = useState(false);
  const [inputStr, setInputStr] = useState('');
  const [messages, setMessages] = useState([]);
  const messageBoxRef = useRef(null);

  const userId = 1;

  useEffect(() => {
    // Fetch initial messages
    const fetchMessages = () => {
      socket.emit('getMessages', {
        chatId: selectedUser.chatId,
        page: 1,
        limit: 20,
      });
    };

    // Clear messages when user changes
    setMessages([]);

    // Initial fetch
    fetchMessages();

    // Handle incoming messages
    socket.on('messages', (data) => {
      setMessages((prevMessages) => {
        // Prevent adding the same messages again
        const newMessageIds = data.messages.map((msg) => msg.id);
        const existingMessageIds = prevMessages.map((msg) => msg.id);

        const newMessages = data.messages.filter(
          (msg) => !existingMessageIds.includes(msg.id)
        );

        return [...newMessages.reverse(), ...prevMessages];
      });
    });

    // Handle message deletions (for individual and everyone)
    const refetchMessages = () => {
      fetchMessages();
    };

    socket.on('newMessage', refetchMessages);
    // socket.on('messages', refetchMessages);
    socket.on('message deleted', refetchMessages);
    socket.on('message deleted for everyone', refetchMessages);

    // Handle errors
    socket.on('error', (error) => {
      console.error(error);
    });

    // Cleanup all listeners on unmount
    return () => {
      socket.off('messages');
      socket.off('message deleted', refetchMessages);
      socket.off('message deleted for everyone', refetchMessages);
      socket.off('error');
    };
  }, [selectedUser.chatId]);

  useEffect(() => {
    socket.on('newMessage', (message) => {
      setMessages((prevMessages) => {
        // Prevent adding the same message multiple times
        if (!prevMessages.some((msg) => msg.id === message.id)) {
          return [...prevMessages, message];
        }
        return prevMessages;
      });
    });

    return () => {
      socket.off('newMessage');
    };
  }, []);

  const handleCloseReply = () => {
    setReplyBox(false);
    setReplyId(null);
  };

  const handleSendMessage = () => {
    if (inputStr.trim() !== '') {
      // Emit the message to the backend via socket
      socket.emit('sendMessage', {
        chatId: selectedUser.chatId,
        content: inputStr,
        mediaUrl: null,
        replyToId: replyId,
        sentAt: new Date(),
      });
      setInputStr('');
      if (replyBox) {
        setReplyBox(false);
        setReplyId(null);
      }
    }
  };

  // Hook to close emoji picker when clicking outside
  const emojiPickerRef = useClickOutside(open, () => {
    setOpen(false);
  });

  // Hook to close attachment options when clicking outside
  const attachmentRef = useClickOutside(openAttach, () => {
    setOpenAttach(false);
  });

  const handleEmojiPicker = () => {
    setOpen(!open);
  };

  const handleAttachment = () => {
    setOpenAttach(!openAttach);
  };

  const onEmojiClick = (emojiObject) => {
    setInputStr((prevInput) => prevInput + emojiObject.emoji);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const fileType = file.type.startsWith('image/')
          ? 'image'
          : file.type.startsWith('video/')
            ? 'video'
            : 'file';
        handleSendMessage(fileType, {
          name: file.name,
          data: reader.result,
          type: file.type,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  const scrollToBottom = useCallback(() => {
    if (messageBoxRef.current) {
      messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
    }
  }, []);

  // Scroll to bottom when new messages are added
  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Scroll to bottom on initial render
  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToBottom();
    }, 100);

    // Optional: Use MutationObserver to detect when content has finished loading
    const observer = new MutationObserver(() => {
      scrollToBottom();
    });

    if (messageBoxRef.current) {
      observer.observe(messageBoxRef.current, {
        childList: true,
        subtree: true,
      });
    }

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [scrollToBottom]);

  const groupedMessages = groupMessagesByDate(messages);

  return (
    <div className="flex h-full flex-col">
      {selectedUser?.type === 'group' ? (
        <GroupHeader selectedUser={selectedUser} />
      ) : selectedUser?.type === 'community' ? (
        <CommunityHeader selectedUser={selectedUser} />
      ) : (
        <PersonalHeader selectedUser={selectedUser} />
      )}

      <div
        className="flex h-full flex-col gap-2 overflow-y-scroll px-4 py-2"
        ref={messageBoxRef}
        style={{ scrollbarWidth: 'none' }}
      >
        {Object.keys(groupedMessages).map((date) => (
          <div key={date} className="flex flex-col items-center">
            <div className="my-2 w-fit select-none rounded-lg bg-bg-system p-2 text-center text-xs text-text-secondary">
              {date}
            </div>
            {groupedMessages[date].map((message) => (
              <MessageBubble
                key={message.id}
                message={message}
                isSentByMe={message.senderId === userId}
                OnReply={setReplyBox}
                OnReplyId={setReplyId}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Message input box*/}
      <div
        className={`relative flex flex-col w-full rounded-2xl border-4 border-bg-primary bg-bg-secondary px-5 py-1 "
        }`}
      >
        {/*Reply to message - message display  */}
        {replyBox && (
          <div className="flex w-full items-center rounded-t-2xl bg-bg-secondary pt-2 transition-all duration-300 ease-in-out">
            <div className="flex w-full justify-between rounded-md border-l-[4px] border-primary bg-bg-primary px-5 py-3 text-text-primary">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold">
                  {messages.find((message) => message.id === replyId)?.username}
                  :
                </p>
                <p className="text-sm">
                  {messages.find((message) => message.id === replyId)?.content}
                </p>
              </div>
              <div
                className="h-fit w-fit cursor-pointer rounded-full bg-bg-secondary p-1"
                onClick={handleCloseReply}
              >
                <img
                  src={cross_icon}
                  alt="close icon"
                  draggable="false"
                  className="w-5"
                />
              </div>
            </div>
          </div>
        )}
<div className='flex w-full items-center gap-3 justify-self-end'>
        <div
          className="relative cursor-pointer rounded-full p-2 transition-all delay-0 ease-in-out hover:bg-secondary"
          ref={emojiPickerRef}
          onClick={handleEmojiPicker}
        >
          <img
            className="w-6 select-none"
            src={smily}
            alt="Emoji"
            draggable="false"
          />
          {open && (
            <div
              className="absolute bottom-full left-0 mb-2"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <EmojiPicker onEmojiClick={onEmojiClick} />
            </div>
          )}
        </div>

        <div
          className="cursor-pointer rounded-full p-2 outline-2 transition-all delay-0 ease-in-out hover:bg-secondary"
          onClick={handleAttachment}
          ref={attachmentRef}
        >
          <img
            src={attach}
            className="w-6 select-none"
            draggable="false"
            alt="Attach"
          />

          {openAttach && (
            <div
              className="absolute bottom-full left-5 h-24 rounded-t-3xl bg-bg-secondary p-2"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <label
                htmlFor="uploadfile"
                className="flex h-full w-full cursor-pointer flex-row items-center gap-2 rounded-t-3xl border-2 border-dashed border-border-primary bg-bg-primary p-6 text-text-hard"
              >
                <img src={upload} className="w-8" alt="upload button" />
                <span className="text-sm">upload an attachment</span>
              </label>
              <input
                type="file"
                id="uploadfile"
                multiple
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          )}
        </div>

        <textarea
          className="h-12 w-full select-none resize-none p-3 text-base outline-none placeholder:text-base placeholder:text-text-secondary"
          placeholder="Your Message!"
          value={inputStr}
          onChange={(e) => setInputStr(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{ scrollbarWidth: 'none' }}
          rows={3}
        />
        {inputStr.trim(' ').length > 0 && (
          <div
            className="cursor-pointer rounded-lg px-5 py-2 transition-all delay-0 ease-in-out hover:bg-secondary"
            onClick={handleSendMessage}
          >
            <img
              src={send}
              className="w-8 select-none"
              draggable="false"
              alt="Send"
            />
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
