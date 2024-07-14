import React from "react";
import Profile from "../Components/Profile/Profile";
import ProfileNavContainer from "../Components/ProfileNavContainer/ProfileNavContainer";
import "./ProfileContainer.css";
import ProfileDetails from "../Components/ProfileDetails/ProfileDetails";

const ProfileContainer = () => {
  return (
    <div className="Profile-container">
      <div className="profile-box">
        <Profile />
      </div>
      <div className="ProfileNavContainer-box">
        <ProfileNavContainer />
      </div>
      <div className="profile-details-box">
        <ProfileDetails />
      </div>
    </div>
  );
};

export default ProfileContainer;
