import { useEffect, useState } from 'react';
import { cn } from '../../utils/utils';
import { LikeIcon } from '../../assets/component/LikeIcon';
import { useModal } from '../../context/ModalContext';
import { modals } from '../../utils/constants';
import { LikedList } from '../Post/LikedList';
import { apiClient } from '@/lib/api_client';
import { useParams } from 'react-router-dom';

export const Heart = ({
  className,
  textclr,
  feedId,
  userId,
  commentIds,
  likes,
  disableClick = false,
}) => {
  const [likeCount, setLikeCount] = useState(likes);
  const [liked, setLiked] = useState(false);
  const { openModal, isModalOpen } = useModal();
  const MODAL_NAME = modals.LIKED_LIST + feedId;
  const { postId } = useParams();

  // Fetch like status when component mounts
  useEffect(() => {
    const fetchLikeStatus = async () => {
      try {
        const response = await apiClient.get(`/users/feeds/${feedId}/likes`, {
          params: { userId, feedId },
        });
        // Check if the user has liked the post
        const likedByUser = response.data.some(
          (like) => like.userId === userId
        );
        setLiked(likedByUser);
      } catch (error) {
        console.error('Error fetching like status:', error);
      }
    };

    fetchLikeStatus();
  }, [userId, postId]);

  // Handle like/unlike click
  const handleLikeClick = async () => {
    try {
      const response = await apiClient.post('/users/feeds/likes', {
        userId,
        feedIds: [feedId],
        commentIds: [],
      });

      setLiked(!liked); // Toggle the liked state
      setLikeCount((prev) => (liked ? prev - 1 : prev + 1));

      console.log(response.data.message);
    } catch (error) {
      console.error('Error updating like status:', error);
    }
  };

  return (
    <div className="flex cursor-pointer select-none items-center gap-1">
      <div onClick={!disableClick ? handleLikeClick : undefined}>
        <LikeIcon
          className={cn(
            'cursor-pointer rounded-full hover:text-red-500',
            className,
            {
              'fill-red-500 text-red-500': liked,
              textclr: !liked,
            }
          )}
        />
      </div>
      <div
        onClick={() => {
          if (!disableClick) {
            openModal(MODAL_NAME);
          }
        }}
      >
        {likeCount}
      </div>
      {isModalOpen(MODAL_NAME) && <LikedList id={feedId} />}
    </div>
  );
};
