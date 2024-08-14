import React from 'react';
import './Notification.css';
// import profilePic from "../../assets/profile.png";
// import postpic from "../../assets/post-img.png";
import { ProfilePhoto } from '../Profilephoto/ProfilePhoto';

export const Notification = ({
  profilePic,
  username,
  text,
  time,
  postpic = '',
}) => {
  return (
    <div className="notification">
      <div className="notifdetls">
        <ProfilePhoto img={profilePic} size={'40px'} />
        <span className="userName">{username}</span>
        <span className="notiftext">{text}</span>
        <div className="dot"></div>
        <span className="duration">{time}</span>
      </div>
      {postpic === '' ? undefined : <img src={postpic} className="notifimg" />}
    </div>
  );
};
