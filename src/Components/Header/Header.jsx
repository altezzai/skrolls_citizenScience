import React from "react";
import icon from "../../assets/icon.png";
import search from '../../assets/search.png'
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="icon">
        <img src={icon} alt="" />
      </div>
      <div className="search-box">
        <img src={search} alt="" />
        <input type="text" placeholder="Search" name="" id="" />
      </div>
    </div>
  );
};

export default Header;
