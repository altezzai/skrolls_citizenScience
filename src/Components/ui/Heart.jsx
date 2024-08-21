import { useState } from 'react';
import { cn } from '../../utils/utils';

import { LikeIcon } from '../../assets/component/LikeIcon';
import { useModal } from '../../context/ModalContext';
import { modals } from '../../utils/constants';
import { LikedList } from '../Post/LikedList';

export const Heart = ({ className, textclr, id, disableClick = false }) => {
  const [likeCount, setLikeCount] = useState(200);
  const [liked, setLiked] = useState(false);
  const { openModal, isModalOpen } = useModal();
  const MODAL_NAME = modals.LIKED_LIST + id;
  const handleLikeClick = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
      setLiked(false);
    } else {
      setLikeCount(likeCount + 1);
      setLiked(true);
    }
  };

  return (
    <div className="flex cursor-pointer select-none items-center gap-1">
      <div onClick={handleLikeClick}>
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
      {isModalOpen(MODAL_NAME) && <LikedList id={id} />}
    </div>
  );
};
