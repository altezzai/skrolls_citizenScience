import React, { lazy, useState } from "react";
import TabButtons from "../Tabs/TabButtons";
import TabContent from "../Tabs/TabContent";
import { modals } from "../../data/constants.js";
import useClickOutside from "../../hooks/useClickOutside.js";
import { useModal } from "../../context/ModalContext.jsx";

const UserFollowListItem = lazy(() =>
  import("../UserFollowListItem/UserFollowListItem")
);

const FollowList = ({ defaultActiveTab }) => {
  const { isModalOpen, closeModal } = useModal();

  const followListRef = useClickOutside(isModalOpen(modals.FOLLOW_LIST), () => {
    closeModal(modals.FOLLOW_LIST);
  });
  const renderUserList = (count) => (
    <div className="overflow-y-scroll h-[500px] py-4 px-7 pr-0 flex flex-col gap-4">
      {[...Array(count)].map((_, index) => (
        <UserFollowListItem
          key={index}
          user={{ name: "Manuprasad", username: "manu" }}
          confirmUnfollow={true}
        />
      ))}
    </div>
  );
  const tabs = [
    {
      id: "followers",
      label: "Followers",
      content: renderUserList(3),
    },
    {
      id: "following",
      label: "Following",
      content: renderUserList(5),
    },
  ];

  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  if (!isModalOpen(modals.FOLLOW_LIST)) return null;

  return (
    <div
      className="z-50 absolute bg-white  rounded-2xl overflow-hidden"
      ref={followListRef}
    >
      <TabButtons
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TabContent tabs={tabs} activeTab={activeTab} />
    </div>
  );
};

export default FollowList;
