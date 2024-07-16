import React from "react";
import "./Contributors.css";
import { ProfilePhoto } from "../Profilephoto/ProfilePhoto";
import profile from "../../assets/profile.png";
import { Photogroup } from "../Photogroup/Photogroup";

export const Contributors = () => {
  return (
    <div className="contributor">
      <ProfilePhoto img={profile} size={"24px"} />
      <a className="uname">A. Majeed</a>
      <div className="smalldot"></div>
      <ProfilePhoto img={profile} size={"24px"} />
      <a className="uname">S. Siyar</a>
      <div className="smalldot"></div>
      <ProfilePhoto img={profile} size={"24px"} />
      <a className="uname">S. Sami</a>
      <div className="smalldot"></div>
      <Photogroup />
      <span className="uname">+ 3 Others</span>
    </div>
  );
};
