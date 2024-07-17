import React from "react";
import "./RoyaltyScore.css";
import info from "../../assets/info.svg";

export const RoyaltyScore = () => {
  return (
      <div className="royaltyPanel">
        <ul className="list">
          <li className="listIcon ">
            <h1>Royalty Score</h1>
            <img src={info} className="infologo" />
          </li>
          <li className="score leftBorder">
            <span>384</span>
            <h5>Score</h5>
          </li>
          <li className="citation">
            <h4>Citations</h4>
            <div className="line"></div>
            <h4 className="second">22</h4>
          </li>
          <li className="citation">
            <h4>Peer Reviews</h4>
            <div className="line"></div>
            <h4 className="second">07</h4>
          </li>
          <li className="citation">
            <h4>Citizen Score</h4>
            <div className="line"></div>
            <h4 className="second">07</h4>
          </li>
          <li className="citation">
            <h4>Download</h4>
            <div className="line"></div>
            <h4 className="second">13</h4>
          </li>
        </ul>
      </div>
  );
};
