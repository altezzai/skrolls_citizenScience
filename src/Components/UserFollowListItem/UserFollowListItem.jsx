import { useState } from 'react';
import './UserFollowListItem.css';
import photo from '../../assets/profile.png';
import FollowButton from '../FollowButton/FollowButton';
import UnfollowPopup from '../UnfollowPopup/UnfollowPopup';
import { ProfilePhoto } from '../Profilephoto/ProfilePhoto';
import { apiClient } from '@/lib/api_client'; // Assuming you have an apiClient to handle requests

const UserFollowListItem = ({
  userId = 1,
  targetUserId = { targetUserId },
  user,
  confirmUnfollow = false,
  btnClassName,
  isFollowing,
  isFollower,
}) => {
  const [following, setFollowing] = useState(isFollowing);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = async () => {
    if (following) {
      if (confirmUnfollow) {
        setIsModalOpen(true); // Open the confirmation modal
      } else {
        await unfollowUser();
        setFollowing(false); // Unfollow directly
      }
    } else {
      await followUser(); // Follow user
      setFollowing(true);
    }
  };

  const followUser = async () => {
    try {
      const response = await apiClient.post('users/follow', {
        followerId: userId, // logged in user
        followingId: targetUserId, // the user being followed
      });
      console.log('Followed successfully:', response.data);
    } catch (error) {
      console.error('Error following user:', error);
    }
  };

  const unfollowUser = async () => {
    try {
      const response = await apiClient.post('users/follow', {
        followerId: userId, // logged in user
        followingId: targetUserId, // the user being unfollowed
      });
      console.log('Unfollowed successfully:', response.data);
    } catch (error) {
      console.error('Error unfollowing user:', error);
    }
  };

  const handleUnfollow = async () => {
    await unfollowUser();
    setFollowing(false); // Update state after unfollow
    setIsModalOpen(false);
  };

  return (
    <div className="flex items-center justify-between gap-16 max-xl:gap-10">
      <div className="flex items-center gap-2">
        <ProfilePhoto img={photo} className={'h-9 w-9'} />
        <div className="flex flex-col">
          <div className="text-base font-medium max-xl:text-sm">
            {user.first_name}
          </div>
          <div className="text-sm text-text-secondary max-xl:text-xs">
            @{user.username}
          </div>
        </div>
      </div>
      {userId != user.userId && (
        <div className="max-lg:hidden">
          <FollowButton
            following={following}
            follower={isFollower}
            onClick={handleClick}
            className={btnClassName}
          />

          {isModalOpen && (
            <UnfollowPopup
              username={user.username}
              setFollowing={setFollowing}
              onUnfollow={handleUnfollow}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default UserFollowListItem;
