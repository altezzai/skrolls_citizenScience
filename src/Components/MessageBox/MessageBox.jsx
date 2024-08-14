import React, { useState, useEffect, useRef } from "react";

import photo from '../../assets/profile.png';
import more from '../../assets/vertical_dots.svg';
import attach from '../../assets/attach.svg';
import send from '../../assets/send.svg';
import smily from '../../assets/smily.svg';
import upload from '../../assets/upload.svg';

import { ProfilePhoto } from "../Profilephoto/ProfilePhoto";
import EmojiPicker from "emoji-picker-react";
import MessageBubble from "./MessageBubble";
import sampleMessage from "../../data/image_send";
import { groupMessagesByDate } from "../../utils/groupMessagesByDate";
import useClickOutside from "../../hooks/useClickOutside";

const MessageBox = () => {
  const [open, setOpen] = useState(false);
  const [openAttach, setOpenAttach] = useState(false);
  const [inputStr, setInputStr] = useState('');
  const [messages, setMessages] = useState(sampleMessage);
  const messageBoxRef = useRef(null);

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
    console.log(emojiObject);
    setInputStr((prevInput) => prevInput + emojiObject.emoji);
  };

  const handleSendMessage = (type = "text", content = inputStr) => {
    if (content.trim() !== "") {
      const newMessage = {
        id: messages.length + 1,
        type: type,
        content: content,
        sentByMe: true,
        timestamp: new Date().toISOString(),
        sender: 'Me',
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputStr(""); // Clear the input after sending
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const fileType = file.type.startsWith("image/")
          ? "image"
          : file.type.startsWith("video/")
          ? "video"
          : "file";
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

  useEffect(() => {
    if (messageBoxRef.current) {
      messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const groupedMessages = groupMessagesByDate(messages);

  return (
    <div className="h-full flex flex-col ">
      <div className="flex justify-between items-center h-16 px-5 py-2 select-none bg-bg-secondary ">
        <div className="flex items-center gap-3 text-lg font-medium">
          <ProfilePhoto img={photo} size={"3rem"} />
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
        className="h-full overflow-y-scroll px-4 py-2 flex flex-col gap-2"
        ref={messageBoxRef}
        style={{ scrollbarWidth: "none" }}
      >
        {Object.keys(groupedMessages).map((date) => (
          <div key={date}>
            <div className="text-text-secondary text-center text-xs  my-2">
              {date}
            </div>
            {groupedMessages[date].map((message) => (
              <MessageBubble
                key={message.id}
                message={message.content}
                type={message.type}
                isSentByMe={message.sentByMe}
                timestamp={message.timestamp}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="relative rounded-2xl h-16 flex items-center justify-self-end w-full gap-3 px-5 bg-bg-secondary border-4 border-bg-primary py-1">
        <div
          className="relative rounded-full p-2 transition-all ease-in-out delay-0 cursor-pointer hover:bg-secondary"
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
          className="cursor-pointer rounded-full p-2 transition-all ease-in-out delay-0 outline-2  hover:bg-secondary"
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
              className="absolute bottom-full left-5 p-2 h-24 rounded-t-3xl bg-bg-secondary"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <label
                htmlFor="uploadfile"
                className="bg-bg-primary border-2 border-border-primary flex flex-row h-full w-full items-center rounded-t-3xl p-6  gap-2 border-dashed cursor-pointer text-text-hard"
              >
                <img src={upload} className="w-8" alt="upload button" />
                <span className="text-sm">upload an attachment</span>
              </label>
              <input
                type="file"
                id="uploadfile"
                multiple
                className=" hidden"
                onChange={handleFileChange}
              />
            </div>
          )}
        </div>

        <textarea
          className="select-none w-full resize-none outline-none p-3 h-12 text-base placeholder:text-base text-text-secondary"
          placeholder="Your Message!"
          value={inputStr}
          onChange={(e) => setInputStr(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{ scrollbarWidth: "none" }}
          rows={3}
        />
        <div
          className="cursor-pointer transition-all ease-in-out delay-0 px-5 py-2 rounded-lg hover:bg-secondary"
          onClick={() => handleSendMessage("text", inputStr)}
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
