import React, { useState } from "react";
import "./ProfileNavContainer.css";
import ProfileDetails from "../ProfileDetails/ProfileDetails";

import { Tabs, Tab } from "@nextui-org/tabs";
import Home from "../../Pages/Home";
import Profile from "../Profile/Profile";

const ProfileNavContainer = () => {
  const [selected, setSelected] = useState("profile");

  return (
    <div className="profile-nav-container">
      <div className="flex w-full flex-col">
        <Tabs
          aria-label="Options"
          selectedKey={selected}
          onSelectionChange={setSelected}
          variant="underlined"
          className="underborder sticky top-0 bg-bggrey"
        >
          <Tab key="profile" title="Profile" className="test">
            <ProfileDetails />
          </Tab>
          <Tab key="post" title="Post" className="test">
            <div>POST SECTION</div>
          </Tab>
          <Tab key="Research" title="Research Activities" className="test">
            <div>RESEARCH SECTION</div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfileNavContainer;
