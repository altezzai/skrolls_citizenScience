import React from "react";
import "./FollowButton.css";
import clsx from "clsx";

const FollowButton = ({ follow, onClick, className }) => {
  return (
    <div
      className={clsx(
        " px-4 py-1 rounded-full w-28 text-center  cursor-pointer border-[1px] border-black select-none",
        { "bg-black text-white hover:bg-gray-600": !follow },
        { "bg-white text-black hover:bg-gray-200": follow },
        className
      )}
      onClick={onClick}
    >
      {follow ? "Following" : "Follow"}
    </div>
  );
};

export default FollowButton;
