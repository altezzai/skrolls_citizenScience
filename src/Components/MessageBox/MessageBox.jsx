import React, { useState, useEffect, useRef } from 'react';
import './MessageBox.css';

import photo from '../../assets/profile.png';
import more from '../../assets/vertical_dots.svg';
import attach from '../../assets/attach.svg';
import send from '../../assets/send.svg';
import smily from '../../assets/smily.svg';
import upload from '../../assets/upload.svg';

import { ProfilePhoto } from '../Profilephoto/ProfilePhoto';
import EmojiPicker from 'emoji-picker-react';
import MessageBubble from '../MessageBubble/MessageBubble';
import sampleMessage from '../../data/message.json';
import { groupMessagesByDate } from '../../utils/groupMessagesByDate';
import useClickOutside from '../../hooks/useClickOutside';

const MessageBox = () => {
  const [open, setOpen] = useState(false);
  const [openAttach, setOpenAttach] = useState(false);
  const [inputStr, setInputStr] = useState('');
  const [messages, setMessages] = useState(sampleMessage);
  // const emojiPickerRef = useRef(null);
  const messageBoxRef = useRef(null);
  const emojiPickerRef = useClickOutside(open, () => {
    setOpen(false);
  });
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
    console.log(emojiObject);
    setInputStr((prevInput) => prevInput + emojiObject.emoji);
  };

  const handleSendMessage = () => {
    if (inputStr.trim() !== '') {
      const newMessage = {
        id: messages.length + 1,
        text: inputStr,
        sentByMe: true,
        timestamp: new Date().toISOString(),
        sender: 'Me',
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputStr(''); // Clear the input after sending
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    if (messageBoxRef.current) {
      messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const groupedMessages = groupMessagesByDate(messages);

  return (
    <div className="messagebox relative flex h-full flex-col">
      <div className="messagebox-head flex h-16 select-none items-center justify-between px-5 py-2">
        <div className="messagebox-user flex items-center gap-3 text-lg font-medium">
          <ProfilePhoto img={photo} size={'3rem'} />
          Manuprasad
        </div>
        <img
          className="w-7 cursor-pointer"
          src={more}
          alt="More options"
          draggable="false"
        />
      </div>

      <div
        className="messagebox-msg-area flex h-full flex-col gap-2 overflow-y-scroll px-4 py-2"
        ref={messageBoxRef}
      >
        {Object.keys(groupedMessages).map((date) => (
          <div key={date}>
            <div className="date-header my-2 text-center text-xs text-gray-600">
              {date}
            </div>
            {groupedMessages[date].map((message) => (
              <MessageBubble
                key={message.id}
                message={message.text}
                isSentByMe={message.sentByMe}
                timestamp={message.timestamp}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="message-input-box absolute bottom-0 flex h-16 w-full items-center gap-3 justify-self-end rounded-2xl px-5">
        <div
          className="attachment-container relative cursor-pointer rounded-full p-2 transition-all delay-0 ease-in-out"
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
          className="attachment-container cursor-pointer rounded-full p-2 outline-2 transition-all delay-0 ease-in-out"
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
              className="attachment-box absolute bottom-full left-0 h-24 rounded-t-3xl p-2"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <label
                htmlFor="uploadfile"
                className="attachment-inner flex h-full w-full cursor-pointer flex-row items-center gap-2 rounded-t-3xl border-dashed border-black p-6"
              >
                <img src={upload} className="w-8" alt="upload button" />
                <span className="text-sm">upload an attachment</span>
              </label>
              <input type="file" id="uploadfile" multiple className="hidden" />
            </div>
          )}
        </div>

        <textarea
          className="message-type h-12 w-full select-none resize-none p-3 text-base outline-none"
          placeholder="Your Message!"
          value={inputStr}
          onChange={(e) => setInputStr(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={3}
        />
        <div
          className="attachment-container cursor-pointer rounded-lg px-6 py-3 transition-all delay-0 ease-in-out"
          onClick={handleSendMessage}
        >
          <img
            src={send}
            className="w-8 select-none"
            draggable="false"
            alt="Send"
          />
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
