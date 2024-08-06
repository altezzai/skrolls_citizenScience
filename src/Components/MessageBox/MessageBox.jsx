import React, { useState, useEffect, useRef } from "react";
import "./MessageBox.css";

import photo from "../../assets/profile.png";
import more from "../../assets/vertical_dots.svg";
import attach from "../../assets/attach.svg";
import send from "../../assets/send.svg";
import smily from "../../assets/smily.svg";
import { ProfilePhoto } from "../Profilephoto/ProfilePhoto";
import EmojiPicker from "emoji-picker-react";
import MessageBubble from "../MessageBubble/MessageBubble";
import sampleMessage from "../../data/message.json";
import { groupMessagesByDate } from "../../utils/groupMessagesByDate";

const MessageBox = () => {
  const [open, setOpen] = useState(false);
  const [inputStr, setInputStr] = useState("");
  const [messages, setMessages] = useState(sampleMessage);
  const emojiPickerRef = useRef(null);
  const messageBoxRef = useRef(null);

  const handleEmojiPicker = () => {
    setOpen(!open);
  };

  const onEmojiClick = (emojiObject) => {
    console.log(emojiObject);
    setInputStr((prevInput) => prevInput + emojiObject.emoji);
  };

  const handleSendMessage = () => {
    if (inputStr.trim() !== "") {
      const newMessage = {
        id: messages.length + 1,
        text: inputStr,
        sentByMe: true,
        timestamp: new Date().toISOString(),
        sender: "Me",
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputStr(""); // Clear the input after sending
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (messageBoxRef.current) {
      messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const groupedMessages = groupMessagesByDate(messages);

  return (
    <div className="messagebox h-full flex flex-col relative">
      <div className="messagebox-head flex justify-between items-center h-16 px-5 py-2 select-none">
        <div className="messagebox-user flex items-center gap-3 text-lg font-medium">
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
        className="messagebox-msg-area h-full overflow-y-scroll px-4 py-2 flex flex-col gap-2"
        ref={messageBoxRef}
      >
        {Object.keys(groupedMessages).map((date) => (
          <div key={date}>
            <div className="date-header text-center text-xs text-gray-600 my-2">
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

      <div className="message-input-box rounded-2xl h-16 flex items-center justify-self-end w-full gap-3 px-5 absolute bottom-0">
        <div
          className="attachment-container relative rounded-full p-2 transition-all ease-in-out delay-0"
          ref={emojiPickerRef}
        >
          <img
            className="w-6 cursor-pointer select-none"
            src={smily}
            alt="Emoji"
            onClick={handleEmojiPicker}
            draggable="false"
          />
          {open && (
            <div className="absolute bottom-full left-0 mb-2">
              <EmojiPicker onEmojiClick={onEmojiClick} />
            </div>
          )}
        </div>

        <div className="attachment-container rounded-full p-2 transition-all ease-in-out delay-0">
          <img
            src={attach}
            className="w-6 cursor-pointer select-none"
            draggable="false"
            alt="Attach"
          />
        </div>

        <textarea
          className="message-type select-none w-full resize-none outline-none p-3 h-12 text-base"
          placeholder="Your Message!"
          value={inputStr}
          onChange={(e) => setInputStr(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={3}
        />
        <div
          className="cursor-pointer transition-all ease-in-out delay-0 attachment-container px-6 py-3"
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
