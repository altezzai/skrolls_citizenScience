import React from "react";
import "./UnfollowPopup.css";

const UnfollowPopup = ({closePopup}) => {
  return (
    <div className="unfollow-popup" onClick={closePopup}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={closePopup}>
          &times;
        </span>
        <h2>Popup Content</h2>
        <p>This is a pop-up component.</p>
      </div>
    </div>
  );
};

export default UnfollowPopup;
