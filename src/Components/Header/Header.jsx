import React, { useRef } from "react";
import icon from "../../assets/icon.png";
import search from "../../assets/search.svg";
import skrolls from "../../assets/skrolls.png";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";


const Header = () => {
  const inputRef = useRef(null);
  const location = useLocation();
  const inMessage = location.pathname.includes("/messages")

  const handleSearchClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={`header ${ inMessage ? "msg-header": ""}`}>
      <Link to="/">
        <div className={`${ inMessage ? "hide-icon": "icon"}`}>
          <img src={icon} alt="icon" />
        </div>
        <div className={`${ inMessage ? "msg-icon": "hide-icon"}`}>
          <img src={skrolls} alt="icon" />
        </div>
      </Link>
      <div className={`search-box ${ inMessage ? "msg-search-box": ""}`}>
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
