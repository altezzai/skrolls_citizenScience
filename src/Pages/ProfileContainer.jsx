import React from "react";
import Profile from "../Components/Profile/Profile";
import ProfileNavContainer1 from "../Components/ProfileNavContainer/ProfileNavContainer1";
import ProfileDetails from "../Components/ProfileDetails/ProfileDetails";

const ProfileContainer = () => {
  return (
    <div className="Profile-container">
      <Profile />

      <ProfileNavContainer1 />
    </div>
  );
};

export default ProfileContainer;
