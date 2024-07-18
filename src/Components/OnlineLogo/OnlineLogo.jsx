import React from "react";
import "./OnlineLogo.css";

export const OnlineLogo = ({ icon, flag = false, size = "16px" }) => {
  return (
    <div className="onlinelogo">
      <img src={icon} style={{ height: size, width: size }} />
      {flag ? <div className="flag"></div> : undefined}
    </div>
  );
};
