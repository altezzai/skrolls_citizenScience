import React from 'react';
import add_icon from '../../assets/plus.svg';
import remove_icon from '../../assets/cross.svg';
import user_icon from '../../assets/default_user.svg';

export const GroupMemberAdd = ({
  add,
  UserId,
  username,
  profilePic,
  OnMemberSelect,
  onRemove,
}) => {
  const handleAddClick = () => {
    OnMemberSelect((prevSelectedMembers) => [...prevSelectedMembers, UserId]);
  };

  const handleRemoveClick = () => {
    onRemove(UserId);
  };

  return (
    <div className="flex w-[99%] items-center justify-between rounded-md border-2 border-bg-secondary bg-bg-secondary pr-2">
      <div className="flex items-center gap-2">
        <img
          src={
            profilePic
              ? `http://localhost:3000/uploads/${encodeURIComponent(profilePic)}`
              : user_icon
          }
          crossOrigin="anonymous"
          alt="profile"
          className="w-8 select-none rounded-sm"
          draggable="false"
        />
        <div className="text-sm font-normal text-text-hard">{username}</div>
      </div>
      <div
        className="cursor-pointer"
        onClick={add ? handleAddClick : handleRemoveClick}
      >
        <img
          src={add ? add_icon : remove_icon}
          className="w-5 select-none"
          alt="action icon"
        />
      </div>
    </div>
  );
};
