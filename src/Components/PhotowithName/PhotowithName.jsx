import React from 'react';
import './PhotowithName.css';
import { ProfilePhoto } from '../Profilephoto/ProfilePhoto';

export const PhotowithName = ({ profile, name }) => {
  return (
    <div className="photoname">
      <ProfilePhoto img={profile} size={'24px'} />
      <a className="uname">{name}</a>
    </div>
  );
};
