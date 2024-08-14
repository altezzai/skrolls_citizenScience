import React, { useState } from 'react';
import { cn } from '../../utils/utils';

import { LikeIcon } from '../../assets/component/LikeIcon';

export const Heart = ({ className, textclr }) => {
  const [likeCount, setLikeCount] = useState(200);
  const [liked, setLiked] = useState(false);

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
    <div className="flex select-none items-center gap-1">
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
      {likeCount}
    </div>
  );
};
