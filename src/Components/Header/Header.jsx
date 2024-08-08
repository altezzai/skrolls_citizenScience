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
    <div
      className={`flex justify-between items-center w-full select-none px-20 max-md:px-6 bg-bg-secondary h-20  ${
        inMessagePage && " hidden"
      }`}
    >
      <Link to="/" className="flex">
        <img className="w-24 h-12" src={icon} alt="icon" draggable="false" />
      </Link>

      <div className="flex py-2 px-4 bg-textarea mx-4 my-4 rounded-3xl gap-3">
        <img
          src={search}
          alt="search"
          className="w-7 cursor-pointer"
          onClick={handleSearchClick}
          style={{ cursor: "pointer" }}
          draggable="false"
        />
        <input
          type="text"
          placeholder="Search"
          ref={inputRef}
          className="outline-none  bg-textarea placeholder:text-sm"
        />
      </div>
    </div>
  );
};

export default Header;
