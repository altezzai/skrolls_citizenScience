import { ProfilePhoto } from '../Profilephoto/ProfilePhoto';

import photo from '../../assets/profile.png';
import send from '../../assets/send_white.svg';
import PostButton from '../PostButton/PostButton';
import { apiClient } from '@/lib/api_client';
import { useState } from 'react';

export const AddMyComment = ({ feedId, onCommentAdded }) => {
  const [comment, setComment] = useState('');

  const submit = async (e) => {
    e.preventDefault();

    const commentData = new FormData();
    commentData.append('comment', comment);
    commentData.append('userId', 1);
    // commentData.append('mentionIds', JSON.stringify([]));
    // commentData.append('parentId', null);

    try {
      const response = await apiClient.post(
        `users/feeds/${feedId}/comments`,
        commentData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      setComment('');
      if (onCommentAdded) {
        onCommentAdded(res.data);
      }
    } catch (error) {
      console.error('failed to add comment:', error);
    }
  };

  const handleInvalid = (e) => {
    e.target.setCustomValidity('Please enter a comment before submitting.');
  };

  const handleInput = (e) => {
    e.target.setCustomValidity(''); // Reset custom message on input
  };

  return (
    <form
      onSubmit={submit}
      onClick={(e) => e.stopPropagation()}
      className="mb-2 flex h-14 w-full items-center justify-between rounded-xl bg-bg-secondary px-4 py-4"
    >
      <div className="flex w-full gap-3">
        <ProfilePhoto img={photo} size={'2rem'} />
        <input
          type="text"
          placeholder="Enter your Comment"
          className="w-full outline-none"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          onInvalid={handleInvalid}
          onInput={handleInput}
        />
      </div>
      <button
        type="submit"
        className="flex cursor-pointer select-none items-center rounded-md bg-primary px-5 py-2 transition-all duration-100 hover:bg-red-500 active:bg-red-800"
      >
        <img src={send} className="w-6" alt="send button" draggable="false" />
      </button>
      {/* <PostButton image={send}/> */}
    </form>
  );
};
