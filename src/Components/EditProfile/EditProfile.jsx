import React, { useEffect, useState } from 'react';
import { ProfilePhoto } from '../Profilephoto/ProfilePhoto';

import user_icon from '../../assets/default_user.svg';
import { EditButton } from '../ui/EditButton';
import { apiClient } from '@/lib/api_client';
import getFullName from '@/utils/getFullName';

export const EditProfile = ({ userId }) => {
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await apiClient.get('/users/profileDetails', {
          params: {
            userId: userId,
          },
        });
        setUserDetails(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };
    fetchUserDetails();
  }, []);

  console.log(userDetails);
  return (
    <div className="mt-2 flex items-center justify-between rounded-xl bg-bg-secondary px-5 py-5 max-md:px-2 max-md:py-2">
      <div className="flex items-center gap-3">
        <ProfilePhoto
          img={
            userDetails.profilePhoto
              ? `http://localhost:3000/uploads/${encodeURIComponent(userDetails.profilePhoto)}`
              : user_icon
          }
          className={
            'h-24 w-24 rounded-full bg-bg-primary max-md:h-20 max-md:w-20'
          }
        />
        <div className="flex flex-col gap-2">
          <div className="text-base font-semibold text-text-primary">
            {/* {getFullName({ userDetails })} */}
          </div>
          <div className="text-sm font-medium text-text-secondary">
            @username
          </div>
          <div className="text-sm font-medium text-text-secondary">Kerala</div>
        </div>
      </div>

      <EditButton />
    </div>
  );
};
