import UserFollowListItem from '../UserFollowListItem/UserFollowListItem';
import { useModal } from '../../context/ModalContext';
import { modals } from '../../utils/constants';
import useClickOutside from '../../hooks/useClickOutside';
import { useEffect, useState } from 'react';
import { apiClient } from '@/lib/api_client';
import { useParams } from 'react-router-dom';

export const LikedList = ({ id, userId }) => {
  const { isModalOpen, closeModal } = useModal();
  // const { postId } = useParams();
  const [likedList, setLikedList] = useState([]);
  // const [followingList, setFollowingList] = useState([]);
  const LikedListRef = useClickOutside(
    isModalOpen(modals.LIKED_LIST + id),
    () => {
      closeModal(modals.LIKED_LIST + id);
    }
  );

  useEffect(() => {
    const fetchLikeList = async () => {
      try {
        const response = await apiClient.get(`/users/feeds/${id}/likes`, {
          params: { userId, feedId: id },
        });
        setLikedList(response.data);

        console.log('Liked List', response.data);
      } catch (error) {
        console.error('Error fetching like list:', error);
      }
    };
    fetchLikeList();
  }, [userId, id]);

  return (
    <div
      ref={LikedListRef}
      className="absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 w-fit"
    >
      <div className="flex max-w-md items-center rounded-t-3xl border-b-2 border-text-primary bg-bg-secondary py-2 pl-8 text-base font-semibold">
        Liked By
      </div>

      <div className="flex h-[500px] max-w-md flex-col gap-3 rounded-b-3xl bg-bg-secondary px-8 py-5">
        {likedList.map((like) => (
          <div key={like.userId}>
            <UserFollowListItem
              user={like}
              isFollowing={like.isFollowing === 1 ? true : false}
              isFollower={like.isFollower === 1 ? true : false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
