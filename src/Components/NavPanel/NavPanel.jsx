import React from "react";
import "./NavPanel.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";
import { OnlineLogo } from "../OnlineLogo/OnlineLogo";

import home from "../../assets/home.svg";
import messages from "../../assets/messages.svg";
import notification from "../../assets/notification.svg";
import groups from "../../assets/groups.svg";
import community from "../../assets/community.svg";
import settings from "../../assets/settings.svg";
import profile from "../../assets/profile.png";

export const NavPanel = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const location = useLocation();

  useEffect(() => {
    switch(location.pathname){
      case "/": setActiveIndex(0);break;
      case "/messages": setActiveIndex(1);break;
      case "/groups": setActiveIndex(2);break;
      case "/communities": setActiveIndex(3);break;
      case "/notifications": setActiveIndex(4);break;
      case "/profile": setActiveIndex(5);break;
      case "/settings": setActiveIndex(6);break;
    }
    if (location.pathname == "/") setActiveIndex(0);
  },[]);
  // else if ((location.pathname = "/profile")) setActiveIndex(5);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="asideNav">
      <div className="navPanel">
        <Link
          to="/"
          className={`navPiece bottomBorder ${
            activeIndex === 0 ? "active" : ""
          }`}
          onClick={() => handleClick(0)}
        >
          <OnlineLogo icon={home} flag={true} />
          <h1>Home</h1>
        </Link>
        <a
          className={`navPiece bottomBorder ${
            activeIndex === 1 ? "active" : ""
          }`}
          onClick={() => handleClick(1)}
        >
          <OnlineLogo icon={messages} flag={true} />

          <h1>Messages</h1>
        </a>
        <a
          className={`navPiece bottomBorder ${
            activeIndex === 2 ? "active" : ""
          }`}
          onClick={() => handleClick(2)}
        >
          <OnlineLogo icon={groups} />

          <h1>Groups</h1>
        </a>
        <a
          className={`navPiece bottomBorder ${
            activeIndex === 3 ? "active" : ""
          }`}
          onClick={() => handleClick(3)}
        >
          <OnlineLogo icon={community} />

          <h1>Communities</h1>
        </a>
        <a
          className={`navPiece ${activeIndex === 4 ? "active" : ""}`}
          onClick={() => handleClick(4)}
        >
          <OnlineLogo icon={notification} flag={true} />

          <h1>Notifications</h1>
        </a>
      </div>
      <div className="navPanel bottom">
        <Link
          to="/profile"
          className={`navPiece bottomBorder ${
            activeIndex === 5 ? "active" : ""
          }`}
          onClick={() => handleClick(5)}
        >
          <img src={profile} className="profileLogo" />

          <h1>Profile</h1>
        </Link>
        <a
          className={`navPiece ${activeIndex === 6 ? "active" : ""}`}
          onClick={() => handleClick(6)}
        >
          <OnlineLogo icon={settings} />

          <h1>Settings</h1>
        </a>
      </div>
    </div>
  );
};
