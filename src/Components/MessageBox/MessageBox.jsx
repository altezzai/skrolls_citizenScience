import React, { useState, useEffect, useRef } from "react";
import "./MessageBox.css";
import photo from "../../assets/profile.png";
import more from "../../assets/vertical_dots.svg";
import attach from "../../assets/attach.svg";
import send from "../../assets/send.svg";
import smily from "../../assets/smily.svg";
import { ProfilePhoto } from "../Profilephoto/ProfilePhoto";
import EmojiPicker from "emoji-picker-react";

const MessageBox = () => {
  const [open, setOpen] = useState(false);
  const [inputStr, setInputStr] = useState("");
  const emojiPickerRef = useRef(null);

  const handleEmojiPicker = () => {
    setOpen(!open);
  };

  const onEmojiClick = (emojiObject) => {
    console.log(emojiObject);
    setInputStr((prevInput) => prevInput + emojiObject.emoji);
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

  return (
    <div className="messagebox h-full flex flex-col relative">
      {/* <div className="messagebox-head flex justify-between items-center h-16 px-5 py-2 select-none">
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
      </div> */}

      <div className="messagebox-msg-area">hello</div>

      <div className="message-input-box min-h-20 max-h-40 flex items-center justify-start w-full gap-3 px-5 absolute bottom-0">
        <div className="emoji-picker-container relative" ref={emojiPickerRef}>
          <img
            className="w-6 cursor-pointer select-none"
            src={smily}
            alt="Emoji"
            onClick={handleEmojiPicker}
          />
          {open && (
            <div className="absolute bottom-full left-0 mb-2">
              <EmojiPicker onEmojiClick={onEmojiClick} />
            </div>
          )}
        </div>

        <img
          src={attach}
          className="w-6 cursor-pointer select-none"
          draggable="false"
          alt="Attach"
        />
        <textarea
          className="message-type select-none"
          placeholder="Your Message!"
          value={inputStr}
          onChange={(e) => setInputStr(e.target.value)}
        />
        <img
          src={send}
          className="w-6 select-none cursor-pointer"
          draggable="false"
          alt="Send"
        />
      </div>
    </div>
  );
};

export default MessageBox;
