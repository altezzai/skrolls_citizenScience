import React from 'react';
import { ProfilePhoto } from '../Profilephoto/ProfilePhoto';
import user_icon from '../../assets/default_user.svg';
import more from '../../assets/vertical_dots.svg';

export const PersonalHeader = ({ selectedUser }) => {
  return (
    <div className="flex h-16 select-none items-center justify-between bg-bg-secondary px-5 py-2">
      <div className="flex items-center gap-3 text-lg font-medium">
        <ProfilePhoto
          img={
            selectedUser.icon
              ? `http://localhost:3000/uploads/${encodeURIComponent(selectedUser.icon)}`
              : user_icon
          }
          className={'h-10 w-10'}
        />
        {selectedUser.name}
      </div>
      <img
        className="w-7 cursor-pointer"
        src={more}
        alt="More options"
        draggable="false"
      />
    </div>
  );
};
