import React from 'react';
import Profile from '../Components/Profile/Profile';
import ProfileNavContainer from '../Components/ProfileNavContainer/ProfileNavContainer';

const ProfileContainer = () => {
  return (
    <div className="Profile-container">
      <Profile />

      <ProfileNavContainer />
    </div>
  );
};

export default ProfileContainer;
