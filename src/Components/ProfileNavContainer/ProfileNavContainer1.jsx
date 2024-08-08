import React, { lazy, useState } from "react";
import TabContent from "../Tabs/TabContent";
import TabButtons from "../Tabs/TabButtons";

const ProfileDetails = lazy(() => import("../ProfileDetails/ProfileDetails"));
const ResearchActivities = lazy(() =>
  import("../ResearchActivities/ResearchActivities")
);

const ProfileNavContainer1 = () => {
  const tabs = [
    {
      id: "profile",
      label: "Profile",
      content: (
        <div className="mt-4">
          <ProfileDetails />
        </div>
      ),
    },
    {
      id: "post",
      label: "Post",
      content: <div className="mt-4">POST SECTION</div>,
    },
    {
      id: "research",
      label: "Research Activities",
      content: (
        <div className="mt-4">
          <ResearchActivities />
        </div>
      ),
    },
  ];

  const [activeTab, setActiveTab] = useState("profile" || tabs[0].id);

  return (
    <div className="tab-container">
      <TabButtons
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        className="w-min"
      />
      <TabContent tabs={tabs} activeTab={activeTab} />
    </div>
  );
};

export default ProfileNavContainer1;
