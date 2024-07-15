import React from "react";
import "./Followers.css";
import photo from "../../assets/profile.png";

export const Followers = () => {
  return (
    <div className="followersBox">
      <span>Followers</span>
      <div className="followerlist">
        <div className="userdetls">
          <img src={photo} className="userpic"></img>
          <div className="userName">
            <h4>Manuprasad</h4>
            <h4 className="uname">@manu</h4>
          </div>
          <div className="followbtn">
            <h4>Follow</h4>
          </div>
        </div>
      </div>
      <div className="followerlist">
        <div className="userdetls">
          <img src={photo} className="userpic"></img>
          <div className="userName">
            <h4>Manuprasad</h4>
            <h4 className="uname">@manu</h4>
          </div>
          <div className="followbtn">
            <h4>Follow</h4>
          </div>
        </div>
      </div>
      <div className="followerlist">
        <div className="userdetls">
          <img src={photo} className="userpic"></img>
          <div className="userName">
            <h4>Manuprasad</h4>
            <h4 className="uname">@manu</h4>
          </div>
          <div className="followbtn">
            <h4>Follow</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
