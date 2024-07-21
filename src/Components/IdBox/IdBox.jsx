import React from "react";
import "./IdBox.css";
import internet from "../../assets/internet.svg";
import { useLocation } from "react-router-dom";

export const IdBox = () => {
  const location = useLocation();
  const inMessagePage = location.pathname.includes("/messages");

  return (
    <div className={`${inMessagePage? "hide-idBox": "idBox"}`}>
      <div className="other">
        <span>Other id's</span>
      </div>
      <div className="idlinks">
        <img src={internet} className="inlogo" />

        <h5>www.mywebsite.com</h5>
      </div>
      <div className="idlinks">
        <img src={internet} className="inlogo" />

        <h5>www.mywebsite.com</h5>
      </div>
      <div className="idlinks">
        <img src={internet} className="inlogo" />

        <h5>www.mywebsite.com</h5>
      </div>
      <div className="idlinks">
        <img src={internet} className="inlogo" />

        <h5>www.mywebsite.com</h5>
      </div>
    </div>
  );
};
