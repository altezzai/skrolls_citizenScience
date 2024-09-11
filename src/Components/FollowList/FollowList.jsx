import { lazy, useState } from 'react';
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
  const renderUserList = (count) => (
    <div className="flex h-[500px] flex-col gap-4 overflow-y-scroll px-7 py-4 pr-0">
      {[...Array(count)].map((_, index) => (
        <UserFollowListItem
          key={index}
          user={{ name: 'Manuprasad', username: 'manu' }}
          confirmUnfollow={true}
        />
      ))}
    </div>
  );
  const tabs = [
    {
      id: 'followers',
      label: 'Followers',
      content: renderUserList(3),
    },
    {
      id: 'following',
      label: 'Following',
      content: renderUserList(5),
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
