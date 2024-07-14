import React from "react";
import "./NavPanel.css";
import { useState } from "react";

export const NavPanel = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="asideNav">
      <div className="navPanel">
        <a
          className={`navPiece bottomBorder ${
            activeIndex === 0 ? "active" : ""
          }`}
          onClick={() => handleClick(0)}
        >
          <h1>Home</h1>
        </a>
        <a
          className={`navPiece bottomBorder ${
            activeIndex === 1 ? "active" : ""
          }`}
          onClick={() => handleClick(1)}
        >
          <h1>Messages</h1>
        </a>
        <a
          className={`navPiece bottomBorder ${
            activeIndex === 2 ? "active" : ""
          }`}
          onClick={() => handleClick(2)}
        >
          <h1>Groups</h1>
        </a>
        <a
          className={`navPiece bottomBorder ${
            activeIndex === 3 ? "active" : ""
          }`}
          onClick={() => handleClick(3)}
        >
          <h1>Communities</h1>
        </a>
        <a
          className={`navPiece ${activeIndex === 4 ? "active" : ""}`}
          onClick={() => handleClick(4)}
        >
          <h1>Notifications</h1>
        </a>
      </div>
      <div className="navPanel bottom">
        <a
          className={`navPiece bottomBorder ${
            activeIndex === 5 ? "active" : ""
          }`}
          onClick={() => handleClick(5)}
        >
          <h1>Profile</h1>
        </a>
        <a
          className={`navPiece ${activeIndex === 6 ? "active" : ""}`}
          onClick={() => handleClick(6)}
        >
          <h1>Settings</h1>
        </a>
      </div>
    </div>
  );
};
