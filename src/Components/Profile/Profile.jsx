import React, { lazy, Suspense, useState } from 'react';
import photo from '../../assets/profile.png';
import './Profile.css';
import ReadMore from '../ReadMore/ReadMore';
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/x.svg';
import more from '../../assets/more.svg';
import link from '../../assets/link.svg';
import SkillBtn from '../SkillBtn/SkillBtn';
// import FollowList from "../FollowList/FollowList";
const FollowList = lazy(() => import('../FollowList/FollowList'));
import { useModal } from '../../context/ModalContext';
import { modals } from '../../data/constants';

const Profile = () => {
  const { openModal, isModalOpen } = useModal();
  const [selected, setSelected] = useState('followers');
  const [myProfile, setMyProfile] = useState(true);

  const handleShowFollow = (selected) => {
    setSelected(selected);
    openModal(modals.FOLLOW_LIST);
  };

  return (
    <div className="profile">
      <div className="profile-photo">
        <img src={photo} alt="" />
        <div className="online"></div>
      </div>

      <div className="name">
        <div className="person-name">Ishaque Risan</div>
        <div className="username">@ishaque.risan</div>
      </div>

      <div className="follows">
        <div
          className="following"
          onClick={() => handleShowFollow('following')}
        >
          200 following
        </div>
        <div
          className="followers"
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

      <div className="description">
        <ReadMore sliceLength={135}>
          Dive inot the digital realm with me! As a computer science student.
          I'm on a quest to conquer bugs, craft elegant code, and shape the
          future of the web designing
        </ReadMore>
      </div>

      <div className="skills">
        <SkillBtn> Machine Learning</SkillBtn>
        <SkillBtn> Artificial Intelligence</SkillBtn>
        <SkillBtn> Designing</SkillBtn>
        <div className="more">+3 more</div>
      </div>

      <div className="social">
        <div className="social-media">
          <div className="socialmedias">
            <img src={instagram} alt="" />
          </div>
          <div className="socialmedias twitter">
            <img src={twitter} alt="" />
          </div>
          <div className="socialmedias">
            <img src={facebook} alt="" />
          </div>
          <div className="socialmedias dots">
            <img src={more} alt="" />
          </div>
        </div>
        <div className="web-link btn">
          <img src={link} alt="" />
          <a href="">www.mywebsite.com</a>
        </div>
      </div>

      <div className="buttons">
        <button className="follow btn">
          {myProfile ? 'Edit Profile' : 'Follow'}
        </button>
        <button className="message btn">
          {myProfile ? 'Share Profile' : 'Message'}
        </button>
      </div>
    </div>
  );
};

export default Profile;
