import React from "react";
import "./Followers.css";
import photo from "../../assets/profile.png";
import FollowButton from "../FollowButton/FollowButton";
import { useLocation } from "react-router-dom";

export const Followers = ({
  title,
  unfollowbtnflag = false,
  followbtnflag = false,
  countflag = false,
}) => {
  const location = useLocation();
  const inMessagePage = location.pathname.includes("/messages");

  return (
    <div className={`${inMessagePage? "hide-followersBox": "followersBox"}`}>
      <div className="titlespace">
        <span>{title}</span>
        {countflag ? <div className="countcircle">12</div> : undefined}
      </div>
      <div className="followerlist">
        <div className="userdetls">
          <img src={photo} className="userpic" />
          <div className="userName">
            <h4>Manuprasad</h4>
            <h4 className="uname">@manu</h4>
          </div>
          {followbtnflag ? (
            <FollowButton
              follow={false}
              height="30px"
              width="90px"
              fontSize="16px"
            />
          ) : undefined}
          {unfollowbtnflag ? (
            <FollowButton
              follow={true}
              height="30px"
              width="90px"
              fontSize="16px"
            />
          ) : undefined}
        </div>
      </div>
      <div className="followerlist">
        <div className="userdetls">
          <img src={photo} className="userpic"></img>
          <div className="userName">
            <h4>Manuprasad</h4>
            <h4 className="uname">@manu</h4>
          </div>
          {followbtnflag ? (
            <FollowButton
              follow={false}
              height="30px"
              width="90px"
              fontSize="16px"
            />
          ) : undefined}
          {unfollowbtnflag ? (
            <FollowButton
              follow={true}
              height="30px"
              width="90px"
              fontSize="16px"
            />
          ) : undefined}
        </div>
      </div>
      <div className="followerlist">
        <div className="userdetls">
          <img src={photo} className="userpic"></img>
          <div className="userName">
            <h4>Manuprasad</h4>
            <h4 className="uname">@manu</h4>
          </div>
          {followbtnflag ? (
            <FollowButton
              follow={false}
              height="30px"
              width="90px"
              fontSize="16px"
            />
          ) : undefined}
          {unfollowbtnflag ? (
            <FollowButton
              follow={true}
              height="30px"
              width="90px"
              fontSize="16px"
            />
          ) : undefined}
        </div>
      </div>
      <div className="followerlist">
        <div className="userdetls">
          <img src={photo} className="userpic"></img>
          <div className="userName">
            <h4>Manuprasad</h4>
            <h4 className="uname">@manu</h4>
          </div>
          {followbtnflag ? (
            <FollowButton
              follow={false}
              height="30px"
              width="90px"
              fontSize="16px"
            />
          ) : undefined}
          {unfollowbtnflag ? (
            <FollowButton
              follow={true}
              height="30px"
              width="90px"
              fontSize="16px"
            />
          ) : undefined}
        </div>
      </div>
      <div className="viewmore">
        <a href="">View more</a>
      </div>
    </div>
  );
};
