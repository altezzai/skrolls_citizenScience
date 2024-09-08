import UserFollowListItem from '../UserFollowListItem/UserFollowListItem';
import { useModal } from '../../context/ModalContext';
import { modals } from '../../utils/constants';
import useClickOutside from '../../hooks/useClickOutside';
import { useEffect, useState } from 'react';
import { apiClient } from '@/lib/api_client';
import { useParams } from 'react-router-dom';

export const LikedList = ({ id }) => {
  const { isModalOpen, closeModal } = useModal();
  // const { postId } = useParams();
  const [likedList, setLikedList] = useState([]);
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
          params: { userId: 1, feedId: id, commentId: null },
        });
        setLikedList(response.data);

        console.log('Response', response.data);
      } catch (error) {
        console.error('Error fetching like list:', error);
      }
    };
  });

  return (
    <div
      ref={LikedListRef}
      className="absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2"
    >
      <div className="flex max-w-md items-center rounded-t-3xl border-b-2 border-text-primary bg-bg-secondary py-2 pl-8 text-base font-semibold">
        Liked By
      </div>
      <div className="flex h-[500px] max-w-md flex-col gap-3 rounded-b-3xl bg-bg-secondary px-8 py-5">
        <UserFollowListItem user={{ name: 'Manuprasad', username: 'manu' }} />
        <UserFollowListItem user={{ name: 'Lively', username: 'lv' }} />
        <UserFollowListItem user={{ name: 'Jishnu', username: 'jish' }} />
        <UserFollowListItem user={{ name: 'Manu', username: 'manooo' }} />
        <UserFollowListItem user={{ name: 'William', username: 'will' }} />
      </div>
    </div>
  );
};
