import React from "react";
import { ProfilePhoto } from "../Profilephoto/ProfilePhoto";

import photo from "../../assets/profile.png";
import send from "../../assets/send_white.svg";

export const AddMyComment = () => {
  return (
    <div className=" flex w-full mb-2 h-14 items-center px-4 py-4 rounded-xl gap-3 bg-bg-secondary">
      <ProfilePhoto img={photo} size={"2rem"} />
      <input
        type="text"
        placeholder="Enter your Comment"
        className=" w-full outline-none "
      />
      <div className=" flex items-center py-2 px-5 rounded-md bg-primary select-none">
        <img src={send} className="w-6" alt="send button" draggable="false" />
      </div>
    </div>
  );
};
