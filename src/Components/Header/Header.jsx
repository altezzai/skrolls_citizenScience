import React, { useRef } from "react";
import icon from "../../assets/icon.png";
import search from "../../assets/search.svg";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const inputRef = useRef(null);

  const handleSearchClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <div className="icon">
          <img src={icon} alt="icon" />
        </div>
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
