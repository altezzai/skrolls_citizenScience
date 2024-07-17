import React from "react";
import "./FollowButton.css";

const FollowButton = ({ follow, setFollow, openPopup }) => {
  const backgroundColor = follow ? "white" : "black";
  const color = follow ? "black" : "white";

  const handleFollowClick = () => {
    if (follow) {
      openPopup();
    } else {
      setFollow(true);
    }
  };

  return (
    <div
      className="follow-btn"
      style={{ backgroundColor, color }}
      onClick={handleFollowClick}
    >
      {follow ? "Following" : "Follow"}
    </div>
  );
};

export default FollowButton;
