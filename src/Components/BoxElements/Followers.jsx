import { Link } from 'react-router-dom';
import UserFollowListItem from '../UserFollowListItem/UserFollowListItem';
import { useEffect, useState } from 'react';
import { apiClient } from '@/lib/api_client';

export const Followers = ({
  title,
  unfollowbtnflag = false,
  followbtnflag = false,
  countflag = false,
  userId = 1,
}) => {
  const [followers, setFollowers] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const response = await apiClient.get('users/followers', {
          params: { userId: userId, currentUserId: userId },
        });

        setFollowers(response.data.followers);
      } catch (error) {
        console.error('Error fetching followers List:', error);
      }
    };
    fetchFollowers();
  }, [userId]);

  const followersToDisplay = showAll ? followers : followers.slice(0, 5);

  return (
    <div className="my-2 w-full rounded-3xl border-[1px] border-solid border-border-muted bg-bg-secondary px-5 py-5 max-xl:px-2">
      <div className="flex items-center justify-between">
        <span className="pb-2 text-lg font-semibold">{title}</span>
        {countflag ? (
          <div className="bg-bg-text-muted flex h-5 w-5 items-center justify-center rounded-full border-2 border-solid border-bg-secondary text-xs text-bg-secondary">
            {followers.length}
          </div>
        ) : undefined}
      </div>

      <div className="flex flex-col gap-2">
        {followers.map((follower) => (
          <UserFollowListItem
            key={follower.followerId}
            targetUserId={follower.followerId}
            user={follower}
            isFollowing={follower.isFollowing === 1 ? true : false}
            btnClassName={'w-24 max-xl:w-20 max-xl:text-xs'}
          />
        ))}
      </div>

      {followers.length > 5 && (
        <div className="cursor-pointer items-center pt-5 text-center">
          <button
            className="border-b-[1px] border-solid border-text-primary text-sm text-text-primary max-xl:text-xs"
            onClick={() => setShowAll(!showAll)} // Toggle showAll on click
          >
            {showAll ? 'View less' : 'View more'}
          </button>
        </div>
      )}
    </div>
  );
};
