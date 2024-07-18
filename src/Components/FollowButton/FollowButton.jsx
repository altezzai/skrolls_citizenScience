import React from "react";
import "./FollowButton.css";

const FollowButton = ({
  follow,
  setFollow,
  openPopup,
  height = "40px",
  width = "100%",
  fontSize = "18px",
}) => {
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
      style={{ backgroundColor, color, height, width, fontSize }}
      onClick={handleFollowClick}
    >
      {follow ? "Following" : "Follow"}
    </div>
  );
};

export default FollowButton;
