import React from 'react';

import back_icon from '../assets/previous.svg';
import { Link } from 'react-router-dom';
import { EditProfile } from '@/Components/EditProfile/EditProfile';
import { EditPersonalDetails } from '@/Components/EditProfile/EditPersonalDetails';
import { EditProfessionalDetails } from '@/Components/EditProfile/EditProfessionalDetails';
import { EditEducationalDetails } from '@/Components/EditProfile/EditEducationalDetails';
import { Edit } from 'lucide-react';
import { EditSkill } from '@/Components/EditProfile/EditSkill';
import { EditInterest } from '@/Components/EditProfile/EditInterest';

export const EditProfilePage = () => {
  const userId = 1;
  return (
    <>
      <div className="sticky top-0 flex items-center justify-center bg-bg-primary p-3">
        <Link
          to="/settings"
          className="absolute left-0 flex cursor-pointer gap-1 text-sm font-medium text-text-primary"
        >
          <img src={back_icon} alt="back icon" className="w-3" />
          Back
        </Link>

        <h2 className="text-base font-medium text-text-primary">
          Profile Settings
        </h2>
      </div>

      <EditProfile userId={userId} />
      <EditPersonalDetails userId={userId} />
      <EditProfessionalDetails userId={userId} />
      <EditEducationalDetails userId={userId} />
      <EditSkill userId={userId} />
      <EditInterest userId={userId} />
    </>
  );
};
