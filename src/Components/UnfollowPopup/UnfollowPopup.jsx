import './UnfollowPopup.css';
import photo from '../../assets/profile.png';
import useClickOutside from '../../hooks/useClickOutside';

const UnfollowPopup = ({ onUnfollow, isModalOpen, setIsModalOpen }) => {
  const closePopup = () => {
    setIsModalOpen(false);
  };

  const unfollowPopupRef = useClickOutside(isModalOpen, closePopup);

  if (!isModalOpen) return null;

  return (
    <div className="absolute left-0 top-0 grid h-full w-full place-items-center bg-black/30">
      <div className="rounded-2xl bg-bg-secondary p-7" ref={unfollowPopupRef}>
        <div className="mb-9 flex flex-col items-center gap-8">
          <img src={photo} alt="" className="h-20 w-20 rounded-full" />
          <div className="text-lg">
            Unfollow <span>@ishaque</span>?
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="mb-1 w-full cursor-pointer border-b-2 pb-1 text-center font-semibold text-primary hover:text-red-300"
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
