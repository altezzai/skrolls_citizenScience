import React from 'react';
import { ProfilePhoto } from '../Profilephoto/ProfilePhoto';

import user_icon from '../../assets/default_user.svg';
import { EditButton } from '../ui/EditButton';

export const EditProfile = () => {
  return (
    <div className="flex items-center justify-between rounded-xl bg-bg-secondary px-5 py-5 max-md:px-2 max-md:py-2 mt-2">
      <div className="flex items-center gap-3">
        <ProfilePhoto
          img={
            // feed.profilePhoto
            // ? `http://localhost:3000/uploads/${encodeURIComponent(feed.profilePhoto)}`
            user_icon
          }
          className={
            'h-24 w-24 rounded-full bg-bg-primary max-md:h-20 max-md:w-20'
          }
        />
        <div className="flex flex-col gap-2">
          <div className="text-base font-semibold text-text-primary">
            Muhammed Rafsal N
          </div>
          <div className="text-sm font-medium text-text-secondary">
            @username
          </div>
          <div className="text-sm font-medium text-text-secondary">Kerala</div>
        </div>
      </div>

      <EditButton />
    </div>
  );
};
