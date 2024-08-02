import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import icon from "../../assets/icon.png";
import search from "../../assets/search.svg";

import "./Header.css";

const Header = () => {
  const inputRef = useRef(null);
  const location = useLocation();
  const inMessagePage = location.pathname.includes("/messages");

  const handleSearchClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={`header ${inMessagePage ? "msg-header" : ""}`}>
      <Link to="/" className="flex">
        <img className="w-24 h-12" src={icon} alt="icon" />
      </Link>

      <div className="search-box">
        <img
          src={search}
          alt="search"
          onClick={handleSearchClick}
          style={{ cursor: "pointer" }}
        />
        <input type="text" placeholder="Search" ref={inputRef} />
      </div>
    </div>
  );
};

export default Header;
