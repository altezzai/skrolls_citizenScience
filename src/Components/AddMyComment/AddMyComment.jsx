import React from 'react';
import { ProfilePhoto } from '../Profilephoto/ProfilePhoto';

import photo from '../../assets/profile.png';
import send from '../../assets/send_white.svg';

export const AddMyComment = () => {
  return (
    <div className="mb-2 flex h-14 w-full items-center gap-3 rounded-xl bg-bg-secondary px-4 py-4">
      <ProfilePhoto img={photo} size={'2rem'} />
      <input
        type="text"
        placeholder="Enter your Comment"
        className="w-full outline-none"
      />
      <div className="flex select-none items-center rounded-md bg-primary px-5 py-2">
        <img src={send} className="w-6" alt="send button" draggable="false" />
      </div>
    </div>
  );
};
