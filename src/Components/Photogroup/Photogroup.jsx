import React from "react";
import "./Photogroup.css";
import profile from "../../assets/profile.png";

export const Photogroup = ({ image1, image2, image3, flag = true }) => {
  return (
    <div className="photogroup">
      <img src={profile} className="rearimg" />
      <img src={profile} className="middleimg" />
      {flag ? <img src={profile} className="frontimg" /> : undefined}
    </div>
  );
};
