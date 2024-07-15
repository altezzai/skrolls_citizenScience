import React from "react";
import Profile from "../Components/Profile/Profile";
import ProfileNavContainer from "../Components/ProfileNavContainer/ProfileNavContainer";
import ProfileDetails from "../Components/ProfileDetails/ProfileDetails";

const ProfileContainer = () => {
  return (
    <div className="Profile-container">
      <Profile />

      <ProfileNavContainer />

      <ProfileDetails />
    </div>
  );
};

export default ProfileContainer;
