import React, { useState } from "react";
import clsx from "clsx";

import { LikeIcon } from "../../assets/component/LikeIcon";

export const Heart = ({className, textclr}) => {
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
    <div className="flex items-center gap-1 select-none">
      <div onClick={handleLikeClick}>
        <LikeIcon
          className={clsx(
            "hover:text-red-500 rounded-full cursor-pointer",
            className,
            {
              "fill-red-500 text-red-500": liked,
              textclr: !liked,
            }
          )}
        />
      </div>
      {likeCount}
    </div>
  );
};
