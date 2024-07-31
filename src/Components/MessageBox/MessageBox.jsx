import React from "react";
import "./MessageBox.css";
import photo from "../../assets/profile.png";
import more from "../../assets/vertical_dots.svg";
import attach from "../../assets/attach.svg";
import send from "../../assets/send.svg";
import { ProfilePhoto } from "../Profilephoto/ProfilePhoto";

const MessageBox = () => {
  return (
    <div className="messagebox h-full flex flex-col">
      <div className="messagebox-head flex justify-between items-center h-16 px-5 py-2 select-none">
        <div className="messagebox-user flex items-center gap-3 text-lg font-medium">
          <ProfilePhoto img={photo} size={"3rem"} />
          Manuprasad
        </div>
        <img
          className="w-7 cursor-pointer"
          src={more}
          alt=""
          draggable="false"
        />
      </div>

      <div className="messagebox-msg-area h-full">hello</div>

      <div className="message-input-box min-h-20 max-h-40 flex items-center justify-between w-full gap-3 px-5">
        <div className="flex items-center gap-3">
          <img
            src={attach}
            className="w-6 cursor-pointer select-none"
            draggable="false"
            alt=""
          />
          <textarea
            className="message-type select-none"
            type="text"
            placeholder="Your Message!"
          />
        </div>

        <img
          src={send}
          className="w-6 select-none cursor-pointer"
          draggable="false"
          alt=""
        />
      </div>
    </div>
  );
};

export default MessageBox;
