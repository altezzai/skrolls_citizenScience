import React, { useRef } from "react";
import icon from "../../assets/icon.png";
import search from "../../assets/search.svg";
import skrolls from "../../assets/skrolls.png";
import { Link, useLocation } from "react-router-dom";
import { ProfilePhoto } from "../Profilephoto/ProfilePhoto";
import photo from "../../assets/profile.png";
import more from "../../assets/vertical_dots.svg";
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
      <Link to="/">
        <div className={`${inMessagePage ? "hide-icon" : "icon"}`}>
          <img src={icon} alt="icon" />
        </div>
        <div className={`${inMessagePage ? "msg-icon" : "hide-icon"}`}>
          <img src={skrolls} alt="icon" />
        </div>
      </Link>
      <div className={`search-box ${inMessagePage ? "msg-search-box" : ""}`}>
        <img
          src={search}
          alt="search"
          onClick={handleSearchClick}
          style={{ cursor: "pointer" }}
        />
        <input type="text" placeholder="Search" ref={inputRef} />
      </div>

      {inMessagePage ? (
        <div className="messagebox-head flex justify-between items-center h-16 px-5 py-2 select-none">
          <div className="messagebox-user flex items-center gap-3 text-lg font-medium">
            <ProfilePhoto img={photo} size={"3rem"} />
            Manuprasad
          </div>
          <img
            className="w-7 cursor-pointer"
            src={more}
            alt="More options"
            draggable="false"
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
