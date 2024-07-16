import React from "react";
import "./Photogroup.css";
import profile from "../../assets/profile.png";

export const Photogroup = () => {
  return (
    <div className="photogroup">
      <img src={profile} className="rearimg" />
      <img src={profile} className="middleimg" />
      <img src={profile}  className="frontimg" />
      
    </div>
  );
};
