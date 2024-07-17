import React from "react";
import "./FollowList.css";
import { Followers } from "../Followers/Followers";
import UserFollowListItem from "../UserFollowListItem/UserFollowListItem";

const FollowList = ({ show, setShowFollow }) => {
  const handleCloseClick = () => {
    setShowFollow(false);
  };

  return (
    <div
      className={`follow-list ${show ? "view" : ""}`}
      onClick={handleCloseClick}
    >
      <div
        className="follow-list-content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="follow-list-header">
          <div>followers</div>
          <div>following</div>
        </div>
        <div className="follow-list-details">
            <UserFollowListItem/>
            <UserFollowListItem/>
            <UserFollowListItem/>
            <UserFollowListItem/>
            <UserFollowListItem/>
            <UserFollowListItem/>
            <UserFollowListItem/>
            <UserFollowListItem/>
            <UserFollowListItem/>
        </div>
      </div>
    </div>
  );
};

export default FollowList;
