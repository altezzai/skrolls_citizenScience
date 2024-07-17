import React from "react";
import "./UnfollowPopup.css";
import photo from "../../assets/profile.png";

const UnfollowPopup = ({ closePopup, setFollow }) => {
  const handleUnfollowClick = () => {
    setFollow(false);
    closePopup();
  };
  return (
    <div className="unfollow-popup" onClick={closePopup}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="unfollow-detail">
          <div className="post-profile" style={{ width: "100px" }}>
            <img src={photo} alt="" style={{ width: "100px" }} />
          </div>
          <div className="unfollow-question">Unfollow @ishaque?</div>
        </div>
        <div className="decision-buttons">
          <div className="unfollow-btn" onClick={handleUnfollowClick}>
            Unfollow
          </div>
          <div className="cancel-btn" onClick={closePopup}>
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnfollowPopup;
