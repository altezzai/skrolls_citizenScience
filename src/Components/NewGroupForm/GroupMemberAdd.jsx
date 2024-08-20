import React from 'react';
import photo from '../../assets/profile.png';
import cross_icon from '../../assets/cross.svg';

export const GroupMemberAdd = () => {
  return (
    <div className="flex w-[99%] items-center justify-between bg-bg-secondary rounded-md pr-2 border-2 border-bg-secondary">
      <div className="flex items-center gap-2">
        <img src={photo} alt="profile" className="w-8 rounded-sm select-none" draggable="false" />
        <div className='text-sm font-normal text-text-hard'>April Curtis</div>
      </div>
      <div className='cursor-pointer'>
        <img src={cross_icon} className='w-5 select-none' alt="cross" />
      </div>
    </div>
  );
};
