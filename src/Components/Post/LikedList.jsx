import UserFollowListItem from '../UserFollowListItem/UserFollowListItem';
import { useModal } from '../../context/ModalContext';
import { modals } from '../../utils/constants';
import useClickOutside from '../../hooks/useClickOutside';
import { useEffect, useState } from 'react';
import { apiClient } from '@/lib/api_client';

export const LikedList = ({ feedId }) => {
  const { isModalOpen, closeModal } = useModal();
  const [likedList, setLikedList] = useState([]);
  const LikedListRef = useClickOutside(
    isModalOpen(modals.LIKED_LIST + feedId),
    () => {
      closeModal(modals.LIKED_LIST + feedId);
    }
  );

  useEffect(() => {
    const fetchLikeList = async () => {
      try {
        const response = await apiClient.get(`/users/feeds/${feedId}/likes`, {
          params: { feedId: feedId },
        });
        setLikedList(response.data?.likes);
      } catch (error) {
        console.error('Error fetching like list:', error);
      }
    };
    fetchLikeList();
  }, [feedId]);

  return (
    <div
      ref={LikedListRef}
      className="absolute left-1/2 top-1/2 z-50 min-w-80 -translate-x-1/2 -translate-y-1/2"
    >
      <div className="flex max-w-md items-center rounded-t-3xl border-b-2 border-text-primary bg-bg-secondary py-2 pl-8 text-base font-semibold">
        Liked By
      </div>

      <div className="flex h-[500px] max-w-md flex-col gap-3 rounded-b-3xl bg-bg-secondary px-8 py-5">
        {likedList.map((like) => (
          <div key={like.userId}>
            <UserFollowListItem
              user={like}
              targetUserId={like.userId}
              isFollowing={like.isFollowing === 1 ? true : false}
              isFollower={like.isFollower === 1 ? true : false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
