import React, { useState } from "react";
import "./UserFollowListItem.css";
import photo from "../../assets/profile.png";
import FollowButton from "../FollowButton/FollowButton";
import UnfollowPopup from "../UnfollowPopup/UnfollowPopup";

const UserFollowListItem = ({ user, confirmUnfollow = false }) => {
  const [following, setFollowing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    if (following) {
      if (confirmUnfollow) setIsModalOpen(true);
      else setFollowing(false);
    } else {
      setFollowing(true);
    }
  };

  const handleUnfollow = () => {
    setFollowing(false);
    setIsModalOpen(false);
  };

  return (
    <div className="flex gap-16 items-center justify-between">
      <div className="flex gap-2">
        <img src={photo} alt="" className=" w-10 h-10 rounded-full" />
        <div className="">
          <div className="text-md font-medium">{user.name}</div>
          <div className="text-sm text-text-secondary">@{user.username}</div>
        </div>
      </div>
      <div className="">
        <FollowButton follow={following} onClick={handleClick} />
        {isModalOpen && (
          <UnfollowPopup
            setFollowing={setFollowing}
            onUnfollow={handleUnfollow}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        )}
      </div>
    </div>
  );
};

export default UserFollowListItem;
