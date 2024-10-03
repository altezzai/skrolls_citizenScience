import { useEffect, useState } from 'react';
import { cn } from '../../utils/utils';
import { LikeIcon } from '../../assets/component/LikeIcon';
import { useModal } from '../../context/ModalContext';
import { modals } from '../../utils/constants';
import { LikedList } from '../Post/LikedList';
import { apiClient } from '@/lib/api_client';

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
        let response;
        if (feedId) {
          response = await apiClient.get(`/users/feeds/${feedId}/likes`);
          const likedByUser = response.data?.likes?.some(
            (like) => like.userId === userId
          );
          setLiked(likedByUser);
        } else if (commentId) {
          response = await apiClient.get(
            `/users/feeds/comments/${commentId}/likes`
          );
          const likedByUser = response.data?.likes?.some(
            (like) => like.userId === userId
          );
          setLiked(likedByUser);
        }
      } catch (error) {
        console.error('Error fetching like status:', error);
      }
    };

    fetchLikeStatus();
  }, [userId, feedId, commentId]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (feedIds.length > 0 || commentIds.length > 0) {
        try {
          console.log('Sending data:', { userId, feedIds, commentIds }); // Debugging log

          const response = await apiClient.post('/users/feeds/likes', {
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
          if (!disableClick && feedId) {
            openModal(MODAL_NAME); // Only open modal for feed likes
          }
        }}
      >
        {likeCount > 0 && <p>{likeCount}</p>}
      </div>
      {feedId && isModalOpen(MODAL_NAME) && <LikedList feedId={feedId} />}
    </div>
  );
};
