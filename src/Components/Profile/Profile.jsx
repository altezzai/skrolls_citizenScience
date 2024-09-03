import { lazy, Suspense, useState } from 'react';

import photo from '../../assets/profile.png';
import ReadMore from '../ReadMore/ReadMore';
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/x.svg';
import more from '../../assets/more.svg';
import link from '../../assets/link.svg';
import SkillBtn from '../SkillBtn/SkillBtn';

const FollowList = lazy(() => import('../FollowList/FollowList'));

import { useModal } from '../../context/ModalContext';
import { modals } from '../../utils/constants';
import { ShareProfile } from './ShareProfile';
import { ProfilePhoto } from '../Profilephoto/ProfilePhoto';
import { Separator } from '@/Components/ui/separator';
import { Link } from 'react-router-dom';

const Profile = () => {
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
        <ProfilePhoto img={photo} size={'8rem'} />
        <div className="absolute right-[10%] top-[77%] z-10 h-5 w-5 rounded-full border-[3px] border-bg-secondary bg-primary max-xl:h-4 max-xl:w-4"></div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="text-2xl font-semibold text-text-primary max-xl:text-xl">
          Ishaque Risan
        </div>
        <div className="text-xl text-text-secondary max-xl:text-lg">
          @ishaque.risan
        </div>
      </div>

      <div className="flex items-center justify-center gap-5 text-2xl font-semibold text-text-primary max-xl:text-lg">
        <div
          className="cursor-pointer"
          onClick={() => handleShowFollow('following')}
        >
          200 following
        </div>

        <Separator orientation="vertical" className="h-5 bg-border-primary" />

        <div
          className="cursor-pointer"
          onClick={() => handleShowFollow('followers')}
        >
          20k followers
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        {isModalOpen(modals.FOLLOW_LIST) && (
          <FollowList defaultActiveTab={selected}></FollowList>
        )}
      </Suspense>

      <div className="w-3/4 text-justify text-base text-text-hard max-xl:w-11/12">
        <ReadMore sliceLength={135}>
          Dive inot the digital realm with me! As a computer science student.
          I&apos;m on a quest to conquer bugs, craft elegant code, and shape the
          future of the web designing
        </ReadMore>
      </div>

      {/* <div className="flex items-center gap-3">
        <SkillBtn> Machine Learning</SkillBtn>
        <SkillBtn> Artificial Intelligence</SkillBtn>
        <SkillBtn> Designing</SkillBtn>
        <div className="text-sm text-text-secondary cursor-pointer font-semibold">+3 more</div>
      </div> */}

      <div className="flex items-center justify-center gap-5 py-3 max-xl:py-2">
        <div className="flex select-none gap-5 max-xl:gap-3">
          <div className="flex cursor-pointer items-center justify-center rounded-full border-[1px] border-solid border-border-muted">
            <img
              src={instagram}
              className="w-9 max-xl:w-8"
              alt="instagram logo"
              draggable="false"
            />
          </div>
          <div className="flex w-9 cursor-pointer items-center justify-center rounded-full border-[1px] border-solid border-border-muted">
            <img
              src={twitter}
              alt="x logo"
              className="w-5 max-xl:w-4"
              draggable="false"
            />
          </div>
          <div className="flex cursor-pointer items-center justify-center rounded-full border-[1px] border-solid border-border-muted">
            <img
              src={facebook}
              className="w-9 max-xl:w-8"
              alt="facebook logo"
              draggable="false"
            />
          </div>
          <div className="flex w-9 cursor-pointer items-center justify-center rounded-full border-[1px] border-solid border-border-muted max-xl:w-8">
            <img
              src={more}
              alt="more"
              draggable="false"
              className="w-5 max-xl:w-4"
            />
          </div>
        </div>

        <Separator orientation="vertical" className="h-5 bg-border-primary" />

        <div className="flex cursor-pointer gap-3 rounded-full border-[1px] border-solid border-border-muted bg-text-primary px-5 py-2">
          <img
            src={link}
            alt="link icon"
            draggable="false"
            className="w-6 select-none invert"
          />
          <Link className="text-sm font-semibold text-bg-secondary">
            www.mywebsite.com
          </Link>
        </div>
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
            Message{' '}
          </button>
        )}
      </div>
      {isModalOpen(modals.SHARE_MODAL) && <ShareProfile />}
    </div>
  );
};

export default Profile;
