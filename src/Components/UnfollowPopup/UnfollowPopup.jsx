import React from "react";
import "./UnfollowPopup.css";
import photo from "../../assets/profile.png";
import useClickOutside from "../../hooks/useClickOutside";

const UnfollowPopup = ({ onUnfollow, isModalOpen, setIsModalOpen }) => {
  if (!isModalOpen) return null;

  const closePopup = () => {
    setIsModalOpen(false);
  };

  const unfollowPopupRef = useClickOutside(isModalOpen, closePopup);

  return (
    <div className="absolute bg-black/30 top-0 left-0 w-full h-full grid place-items-center ">
      <div className=" bg-bg-secondary p-7 rounded-2xl " ref={unfollowPopupRef}>
        <div className="flex flex-col items-center gap-8 mb-9">
          <img src={photo} alt="" className="w-20 h-20 rounded-full " />
          <div className="text-lg">
            Unfollow <span>@ishaque</span>?
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="cursor-pointer hover:text-red-300 text-primary font-semibold border-b-2 w-full text-center pb-1 mb-1 "
            onClick={onUnfollow}
          >
            Unfollow
          </div>
          <div
            className="cursor-pointer hover:text-gray-500"
            onClick={closePopup}
          >
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnfollowPopup;
