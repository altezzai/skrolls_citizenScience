import React, { useEffect, useState } from 'react';
import { ProfilePhoto } from '../Profilephoto/ProfilePhoto';
import { Heart } from '../ui/Heart';
import { timeAgo } from '@/utils/timeAgo';
import { useParams } from 'react-router-dom';
import { apiClient } from '@/lib/api_client';

import user_icon from '../../assets/default_user.svg';
import more from '../../assets/vertical_dots.svg';
import reply_icon from '../../assets/reply.svg';

export const Replies = ({ commentId }) => {
  // Default to empty array
  const { postId } = useParams();
  const [replyData, setReplyData] = useState([]);

  useEffect(() => {
    const fetchReplies = async () => {
      try {
        const res = await apiClient.get(
          `users/feeds/${postId}/comments/${commentId}`
        );
        setReplyData(res.data?.replies);
      } catch (error) {
        console.error('Failed to fetch replies:', error);
      }
    };
    fetchReplies();
  }, []);

  return (
    <>
      {replyData.map((reply) => (
        <div
          className="flex w-full gap-2 border-l-2 bg-textarea px-5 py-2"
          key={reply.id}
        >
          <ProfilePhoto
            img={
              reply.profilePhoto
                ? `http://localhost:3000/uploads/${encodeURIComponent(reply.profilePhoto)}`
                : user_icon
            }
            className={'h-6 w-6'}
          />

          <div className="flex w-full flex-col">
            <div className="flex justify-between">
              <div className="flex items-center justify-center gap-6">
                <div className="text-base font-medium">{reply.username}</div>
                <div className="select-none text-sm font-normal text-text-muted">
                  {timeAgo(reply.createdAt)}
                </div>
              </div>
              <img
                src={more}
                className="w-5 select-none"
                alt="more"
                draggable="false"
              />
            </div>

            <div className="py-2 text-sm font-normal">{reply.comment}</div>

            <div className="flex select-none items-center justify-between text-sm text-text-secondary">
              <div className="flex items-center gap-8">
                <Heart
                  className={'h-4 w-4'}
                  textclr={'text-text-secondary'}
                  userId={1}
                  likes={reply.likeCount}
                  commentId={reply.id}
                />
                <img
                  src={reply_icon}
                  className="w-4"
                  alt="reply"
                  draggable="false"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
