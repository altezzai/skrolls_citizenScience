import { lazy, Suspense, useState } from 'react';

import ReadMore from '../ReadMore/ReadMore';
import facebook_icon from '../../assets/facebook.svg';
import twitter_icon from '../../assets/x.svg';
import link_icon from '../../assets/link.svg';
import github_icon from '../../assets/github.svg';
import linkedin_icon from '../../assets/linkedin.svg';
import user_icon from '../../assets/default_user.svg';
// import SkillBtn from '../SkillBtn/SkillBtn';

const FollowList = lazy(() => import('../FollowList/FollowList'));

import { useModal } from '../../context/ModalContext';
import { modals } from '../../utils/constants';
import { ShareProfile } from './ShareProfile';
import { ProfilePhoto } from '../Profilephoto/ProfilePhoto';
import { Separator } from '@/Components/ui/separator';
import { Link } from 'react-router-dom';

const Profile = ({ userDetails, userId }) => {
  const { openModal, isModalOpen } = useModal();
  const [selected, setSelected] = useState('followers');
  const [myProfile, setMyProfile] = useState(true);

  const handleShowFollow = (selected) => {
    setSelected(selected);
    openModal(modals.FOLLOW_LIST);
  };

  return (
    <div className="mb-5 mt-6 flex w-full flex-col items-center justify-center gap-3 bg-bg-primary">
      <div className="relative">
        <ProfilePhoto
          img={
            userDetails.profilePhoto
              ? `http://localhost:3000/uploads/${encodeURIComponent(userDetails.profilePhoto)}`
              : user_icon
          }
          className={'h-28 w-28 max-md:h-20 max-md:w-20'}
        />

        <div className="absolute right-[10%] top-[77%] z-10 h-5 w-5 rounded-full border-[3px] border-bg-secondary bg-primary max-xl:h-4 max-xl:w-4"></div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="text-2xl font-semibold text-text-primary max-xl:text-xl">
          {userDetails.first_name}
        </div>
        <div className="text-xl text-text-secondary max-xl:text-lg">
          {'@' + userDetails.username}
        </div>
      </div>

      <div className="flex items-center justify-center gap-5 text-2xl font-semibold text-text-primary max-xl:text-lg">
        <div
          className="cursor-pointer"
          onClick={() => handleShowFollow('followers')}
        >
          {userDetails.followersCount + ' ' + 'followers'}
        </div>

        <Separator orientation="vertical" className="h-5 bg-border-primary" />

        <div
          className="cursor-pointer"
          onClick={() => handleShowFollow('following')}
        >
          {userDetails.followingCount + ' ' + 'following'}
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        {isModalOpen(modals.FOLLOW_LIST) && (
          <FollowList defaultActiveTab={selected} userId={userId}></FollowList>
        )}
      </Suspense>

      {userDetails.biography && (
        <div className="flex w-3/4 items-center justify-center text-center text-base text-text-hard max-xl:w-11/12">
          <ReadMore sliceLength={135}>{userDetails.biography}</ReadMore>
        </div>
      )}

      {/* <div className="flex items-center gap-3">
        <SkillBtn> Machine Learning</SkillBtn>
        <SkillBtn> Artificial Intelligence</SkillBtn>
        <SkillBtn> Designing</SkillBtn>
        <div className="text-sm text-text-secondary cursor-pointer font-semibold">+3 more</div>
      </div> */}

      <div className="flex items-center justify-center gap-5 py-3 max-xl:py-2">
        <div className="flex select-none gap-5 max-xl:gap-3">
          {userDetails.linkedin && (
            <Link
              to={userDetails.linkedin}
              target="_blank"
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-[1px] border-solid border-border-muted"
            >
              <img
                src={linkedin_icon}
                className="w-4 max-md:w-3"
                alt="instagram logo"
                draggable="false"
              />
            </Link>
          )}

          {userDetails.twitter && (
            <Link
              to={userDetails.twitter}
              target="_blank"
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-[1px] border-solid border-border-muted"
            >
              <img
                src={twitter_icon}
                alt="x logo"
                className="w-5 max-xl:w-4"
                draggable="false"
              />
            </Link>
          )}

          {userDetails.facebook && (
            <Link
              to={userDetails.facebook}
              target="_blank"
              className="flex cursor-pointer items-center justify-center rounded-full border-[1px] border-solid border-border-muted"
            >
              <img
                src={facebook_icon}
                className="w-9 max-xl:w-8"
                alt="facebook logo"
                draggable="false"
              />
            </Link>
          )}

          {userDetails.github && (
            <Link
              to={userDetails.github}
              target="_blank"
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-[1px] border-solid border-border-muted max-xl:w-8"
            >
              <img
                src={github_icon}
                alt="more"
                draggable="false"
                className="w-5 max-xl:w-4"
              />
            </Link>
          )}
        </div>

        {userDetails.website &&
          (userDetails.linkedin ||
            userDetails.twitter ||
            userDetails.facebook ||
            userDetails.github) && (
            <Separator
              orientation="vertical"
              className="h-5 bg-border-primary"
            />
          )}

        {userDetails.website && (
          <Link
            to={userDetails.website}
            target="_blank"
            className="flex cursor-pointer gap-3 rounded-full border-[1px] border-solid border-border-muted bg-text-primary px-5 py-2"
          >
            <img
              src={link_icon}
              alt="link icon"
              draggable="false"
              className="w-6 select-none invert"
            />
            <div className="text-sm font-semibold text-bg-secondary">
              {userDetails.website}
            </div>
          </Link>
        )}
      </div>

      <div className="flex gap-5">
        <button className="w-36 cursor-pointer select-none rounded-full border-2 border-solid bg-text-primary py-2 text-sm font-semibold text-bg-secondary hover:bg-slate-950">
          {myProfile ? 'Edit Profile' : 'Follow'}
        </button>

        {myProfile ? (
          <button
            onClick={() => {
              openModal(modals.SHARE_MODAL);
            }}
            className="w-36 cursor-pointer select-none rounded-full border-2 border-solid border-black py-2 text-sm font-semibold text-text-primary hover:bg-gray-200"
          >
            Share Profile
          </button>
        ) : (
          <button className="w-36 cursor-pointer select-none rounded-full border-2 border-solid border-black py-2 text-sm font-semibold text-text-primary">
            Message
          </button>
        )}
      </div>
      {isModalOpen(modals.SHARE_MODAL) && <ShareProfile />}
    </div>
  );
};

export default Profile;
