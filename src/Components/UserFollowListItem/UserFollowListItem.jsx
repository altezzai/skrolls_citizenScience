import React, { useState } from "react";
import "./UserFollowListItem.css";
import photo from "../../assets/profile.png";
import FollowButton from "../FollowButton/FollowButton";
import UnfollowPopup from "../UnfollowPopup/UnfollowPopup";

const UserFollowListItem = () => {
  const [follow, setFollow] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleUnfollow = () => {
    setFollow(true);
  };
  return (
    <div className="userfollow">
      <div className="post-profile" style={{ width: "50px" }}>
        <img src={photo} alt="" style={{ width: "50px" }} />
      </div>
      <div className="userfollow-detail">
        <div className="user-details">
          <div className="user-name">Manuprasad</div>
          <div className="userid">@manu</div>
        </div>
        <div className="followbtn-container" onClick={handleUnfollow}>
          <FollowButton
            follow={follow}
            setFollow={setFollow}
            openPopup={openPopup}
          />
          {showPopup && <UnfollowPopup closePopup={closePopup} setFollow={setFollow}/>}
        </div>
      </div>
    </div>
  );
};

export default UserFollowListItem;
