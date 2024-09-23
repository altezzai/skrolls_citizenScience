import { lazy, useState, useEffect } from 'react';
import TabButtons from '../Tabs/TabButtons';
import TabContent from '../Tabs/TabContent';
import { modals } from '../../utils/constants.js';
import useClickOutside from '../../hooks/useClickOutside.js';
import { useModal } from '../../context/ModalContext.jsx';
import { apiClient } from '@/lib/api_client';

const UserFollowListItem = lazy(
  () => import('../UserFollowListItem/UserFollowListItem')
);

const FollowList = ({ defaultActiveTab, userId }) => {
  const { isModalOpen, closeModal } = useModal();
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);

  const followListRef = useClickOutside(isModalOpen(modals.FOLLOW_LIST), () => {
    closeModal(modals.FOLLOW_LIST);
  });

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const response = await apiClient.get('users/followers', {
          params: {
            userId: userId,
            currentUserId: userId,
          },
        });
        setFollowers(response.data);
      } catch (error) {
        console.error('Error fetching followers list:', error);
      }
    };
    fetchFollowers();
  }, [userId]);

  useEffect(() => {
    const fetchFollowing = async () => {
      try {
        const response = await apiClient.get('users/followings', {
          params: {
            userId: userId,
            currentUserId: userId,
          },
        });
        setFollowing(response.data);
      } catch (error) {
        console.error('Error fetching following List:', error);
      }
    };
    fetchFollowing();
  }, [userId]);

  // Render user list based on the array of users
  const renderUserList = (users, isFollowerList) => (
    <div className="flex h-[500px] flex-col gap-4 overflow-y-scroll px-7 py-4 pr-0">
      {users.map((user, index) => (
        <UserFollowListItem
          key={index}
          targetUserId={isFollowerList ? user.followerId : user.followingId}
          user={user}
          confirmUnfollow={true}
          isFollowing={user.isFollowing === 1 ? true : false}
        />
      ))}
    </div>
  );

  // Define the tabs for followers and following lists
  const tabs = [
    {
      id: 'followers',
      label: 'Followers',
      content: renderUserList(followers, true),
    },
    {
      id: 'following',
      label: 'Following',
      content: renderUserList(following, false),
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
