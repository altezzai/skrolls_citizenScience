import React, { useState } from 'react';
import './ProfileNavContainer.css';

const ProfileNavContainer = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const navItems = ["Profile", "Post", "Research Activities"];

  return (
    <div className='profile-nav-container'>
      {navItems.map((item, index) => (
        <div
          key={index}
          className={`profile-navs ${activeIndex === index ? 'active' : ''}`}
          onClick={() => handleClick(index)}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default ProfileNavContainer;

