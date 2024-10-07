import { useEffect, useRef, useState } from 'react';
import { ProfilePhoto } from '../Profilephoto/ProfilePhoto';
import photo from '../../assets/profile.png';
import more from '../../assets/vertical_dots.svg';
import reply_icon from '../../assets/reply.svg';
import send from '../../assets/send_white.svg';
import { Heart } from '../ui/Heart';
import { timeAgo } from '@/utils/timeAgo';
import { Replies } from './Replies';
import { apiClient } from '@/lib/api_client';
import user_icon from '../../assets/default_user.svg';

export const Comments = ({ comments }) => {
  const [reply, setReply] = useState(false);
  const [replyMessage, setReplyMessage] = useState([]);
  const inputRef = useRef(null);

  const handleReply = () => {
    setReply(!reply);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  };

  //Adding reply to comment
  const submit = (e) => {
    e.preventDefault();

    const replyData = new FormData();
    replyData.append('comment', replyMessage);
    // commentData.append('mentionIds', JSON.stringify([]));
    replyData.append('parentId', comments.id);

    try {
      const response = apiClient.post(
        `users/feeds/${comments.feedId}/comments`,
        replyData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setReplyMessage('');
    } catch (error) {
      console.error('failed to add reply:', error);
    }
  };

  const handleInvalid = (e) => {
    e.target.setCustomValidity('Please enter a reply before submitting.');
  };

  const handleInput = (e) => {
    e.target.setCustomValidity(''); // Reset custom message on input
  };

  return (
    <>
      <div
        className={`flex gap-2 rounded-xl bg-bg-secondary px-5 py-3 transition-all duration-500 ease-in-out ${
          reply ? 'mb-0 rounded-b-none' : 'mb-1'
        }`}
      >
        <ProfilePhoto
          img={
            comments.profilePhoto
              ? `http://localhost:3000/uploads/${encodeURIComponent(comments.profilePhoto)}`
              : user_icon
          }
          className={'h-8 w-8'}
        />

        <div className="flex w-full flex-col">
          <div className="flex justify-between">
            <div className="flex items-center justify-center gap-6">
              <div className="text-lg font-medium">{comments.username}</div>
              <div className="select-none text-base font-normal text-text-muted">
                {timeAgo(comments.createdAt)}
              </div>
            </div>
            <img
              src={more}
              className="w-5 select-none"
              alt="more"
              draggable="false"
            />
          </div>

          <div className="py-2 text-base font-normal">{comments.comment}</div>

          <div className="flex select-none items-center justify-between text-sm text-text-secondary">
            <div className="flex items-center gap-8">
              <Heart
                className={'h-5 w-5'}
                textclr={'text-text-secondary'}
                likes={comments.likeCount}
                commentId={comments.id}
                userId={1}
              />
              <img
                src={reply_icon}
                className="w-5 cursor-pointer"
                alt="reply"
                draggable="false"
                onClick={() => {
                  handleReply();
                }}
              />
            </div>
            <div
              className="cursor-pointer"
              onClick={() => {
                handleReply();
              }}
            >
              {comments.replyCount == 0
                ? null
                : comments.replyCount + ' Replies'}
            </div>
          </div>
        </div>

        {/* {reply && <Replies commentId={comments.id} />} */}
      </div>

      {reply && (
        <div className="mb-2 flex w-full flex-col rounded-b-xl bg-textarea pl-10 transition-all delay-100 duration-200 ease-in-out">
          <Replies commentId={comments.id} />
          <form
            onSubmit={submit}
            onClick={(e) => e.stopPropagation()}
            className="my-2 flex w-full items-center gap-5"
          >
            <ProfilePhoto
              img={
                comments.profilePhoto
                  ? `http://localhost:3000/uploads/${encodeURIComponent(comments.profilePhoto)}`
                  : user_icon
              }
              className={'h-6 w-6'}
            />
            <div className="flex w-full rounded-lg bg-bg-secondary p-2">
              <input
                type="text"
                className="placeholder: w-full pl-3 outline-none"
                placeholder="Enter your reply"
                ref={inputRef}
                value={replyMessage}
                onChange={(e) => setReplyMessage(e.target.value)}
                required
                onInvalid={handleInvalid}
                onInput={handleInput}
              />
              <button
                type="submit"
                className="flex cursor-pointer select-none items-center rounded-md bg-primary px-4 py-1 transition-all duration-100 hover:bg-red-500"
              >
                <img
                  src={send}
                  className="w-6"
                  alt="send button"
                  draggable="false"
                />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
