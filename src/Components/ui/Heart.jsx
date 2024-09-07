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
  commentId,
  likes,
  disableClick = false,
}) => {
  const [likeCount, setLikeCount] = useState(likes);
  const [liked, setLiked] = useState(false);
  const [feedIds, setFeedIds] = useState([]);
  const [commentIds, setCommentIds] = useState([]);
  const { openModal, isModalOpen } = useModal();
  const MODAL_NAME = modals.LIKED_LIST + feedId;
  const { postId } = useParams();

  // Handle like/unlike click
  const handleLikeClick = () => {
    if (feedId && !feedIds.includes(feedId)) {
      setFeedIds((prev) => [...prev, feedId]);
    }

    if (commentId && !commentIds.includes(commentId)) {
      setCommentIds((prev) => [...prev, commentId]);
    }

    setLiked(!liked); // Toggle the liked state
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  // Fetch like status when component mounts
  useEffect(() => {
    const fetchLikeStatus = async () => {
      try {
        const response = await apiClient.get(`/users/feeds/${feedId}/likes`, {
          params: { userId, feedId, commentId },
        });
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

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (feedIds.length > 0 || commentIds.length > 0) {
        try {
          console.log('Sending data:', { userId, feedIds, commentIds }); // Debugging log

          const response = await apiClient.post('/users/feeds/likes', {
            userId,
            feedIds,
            commentIds,
          });

          // Clear the batched ids after submission
          setFeedIds([]);
          setCommentIds([]);
        } catch (error) {
          console.error(
            'Error posting batched like status:',
            error.response?.data || error.message
          ); // Log more detailed error
        }
      }
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timer
  }, [feedIds, commentIds, userId]);

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
