import React, { useState, useEffect } from "react";
import "./FollowList.css";
import UserFollowListItem from "../UserFollowListItem/UserFollowListItem";
import { Tabs, Tab } from "@nextui-org/tabs";

const FollowList = ({ show, setShowFollow, defaultTab }) => {
  const [selected, setSelected] = useState(defaultTab);
  useEffect(() => {
    setSelected(defaultTab);
  }, [defaultTab]);

  const handleCloseClick = () => {
    setShowFollow(false);
  };

  return (
    <div
      className={`follow-list ${show ? "view" : ""}`}
      onClick={handleCloseClick}
    >
      <div
        className="follow-list-content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {/* <div className="follow-list-header"> */}
        <Tabs
          aria-label="Options"
          selectedKey={selected}
          onSelectionChange={setSelected}
          variant="underlined"
          className="sticky top-0 bg-white w-full justify-center flex items-center border-b-2 border-bg-primary pt-4"
        >
          <Tab key="followers" title="Followers" className="test head px-4">
            <UserFollowListItem />
            <UserFollowListItem />
            <UserFollowListItem />
            <UserFollowListItem />
            <UserFollowListItem />
            <UserFollowListItem />
            <UserFollowListItem />
            <UserFollowListItem />
            <UserFollowListItem />
          </Tab>
          <Tab key="following" title="Following" className="test head px-4">
            <UserFollowListItem />
            <UserFollowListItem />
            <UserFollowListItem />
            <UserFollowListItem />
            <UserFollowListItem />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default FollowList;
