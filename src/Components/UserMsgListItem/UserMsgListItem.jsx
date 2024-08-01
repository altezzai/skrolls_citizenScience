import React, { useState } from "react";
import "./UserMsgListItem.css";
import photo from "../../assets/profile.png";
import { ProfilePhoto } from "../Profilephoto/ProfilePhoto";

const UserMsgListItem = ({ user, isActive, onClick }) => {
  return (
    <div
      className={`usermsglist-item flex justify-between items-center select-none p-2 ${
        isActive ? "clickedmsg" : ""
      }`}
      onClick={onClick}
    >
      <div className="user-msg-details flex gap-3 items-center">
        <ProfilePhoto img={photo} size={"55px"} />
        <div className="user-msg-name flex flex-col">
          <div className="user-name">{user.name}</div>
          <div className="user-final-msg overflow-hidden flex-nowrap h-5">
            {user.lastMessage}
          </div>
        </div>
      </div>

      <div className="user-msg-status flex flex-col gap-2 min-w-12">
        <div className="last-msg-time text-xs">{user.time}</div>
        <div className="unseen-msg-count rounded-full text-xs flex items-center justify-center leading-none px-1 h-4 min-w-4">
          {user.count}
        </div>
      </div>
    </div>
  );
};

export default UserMsgListItem;
