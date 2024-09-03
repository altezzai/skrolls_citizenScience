import { useState } from 'react';
import './UserFollowListItem.css';
import photo from '../../assets/profile.png';
import FollowButton from '../FollowButton/FollowButton';
import UnfollowPopup from '../UnfollowPopup/UnfollowPopup';
import { ProfilePhoto } from '../Profilephoto/ProfilePhoto';

const UserFollowListItem = ({
  user,
  confirmUnfollow = false,
  btnClassName,
}) => {
  const [following, setFollowing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    if (following) {
      if (confirmUnfollow) setIsModalOpen(true);
      else setFollowing(false);
    } else {
      setFollowing(true);
    }
  };

  const handleUnfollow = () => {
    setFollowing(false);
    setIsModalOpen(false);
  };

  return (
    <div className="flex items-center justify-between gap-16 max-xl:gap-10">
      <div className="flex gap-2 items-center">
        <ProfilePhoto img={photo} size={'2rem'} />
        <div className="flex flex-col">
          <div className="text-base font-medium max-xl:text-sm">{user.name}</div>
          <div className="text-sm max-xl:text-xs text-text-secondary">@{user.username}</div>
        </div>
      </div>
      <div className="max-lg:hidden">
        <FollowButton
          follow={following}
          onClick={handleClick}
          className={btnClassName}
        />
        {isModalOpen && (
          <UnfollowPopup
            setFollowing={setFollowing}
            onUnfollow={handleUnfollow}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        )}
      </div>
    </div>
  );
};

export default UserFollowListItem;
