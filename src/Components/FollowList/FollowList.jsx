import { lazy, useState, useEffect } from 'react';
import TabButtons from '../Tabs/TabButtons';
import TabContent from '../Tabs/TabContent';
import { modals } from '../../utils/constants.js';
import useClickOutside from '../../hooks/useClickOutside.js';
import { useModal } from '../../context/ModalContext.jsx';

const UserFollowListItem = lazy(
  () => import('../UserFollowListItem/UserFollowListItem')
);

const FollowList = ({ defaultActiveTab, followers, following }) => {
  const { isModalOpen, closeModal } = useModal();

  const followListRef = useClickOutside(isModalOpen(modals.FOLLOW_LIST), () => {
    closeModal(modals.FOLLOW_LIST);
  });


  console.log('Followers', followers);
  console.log('Following', following);

  // Render user list based on the array of users
  const renderUserList = (users, isFollowing) => (
    <div className="flex h-[500px] flex-col gap-4 overflow-y-scroll px-7 py-4 pr-0">
      {users.map((user, index) => (
        <UserFollowListItem
          key={index}
          user={user}
          isFollowing={isFollowing}
          confirmUnfollow={true}
        />
      ))}
    </div>
  );

  // Define the tabs for followers and following lists
  const tabs = [
    {
      id: 'followers',
      label: 'Followers',
      content: renderUserList(followers, false),
    },
    {
      id: 'following',
      label: 'Following',
      content: renderUserList(following, true),
    },
  ];

  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  if (!isModalOpen(modals.FOLLOW_LIST)) return null;

  return (
    <div
      className="absolute z-50 overflow-hidden rounded-2xl bg-white"
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
