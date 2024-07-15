import React from "react";
import "./OnlineLogo.css";

export const OnlineLogo = ({ icon, flag = false }) => {
  return (
    <div className="onlinelogo">
      <img src={icon} className="iconLogo" />
      {flag ? <div className="flag"></div> : undefined}
    </div>
  );
};
