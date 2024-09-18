import Profile from '@/Components/Profile/Profile';
import ProfileNavContainer from '@/Components/ProfileNavContainer/ProfileNavContainer';
import { apiClient } from '@/lib/api_client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const UserProfile = () => {
  const [userDetails, setUserDetails] = useState([]);
  const { targetUserId } = useParams();

  console.log(targetUserId);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await apiClient.get('/users/profileDetails', {
          params: {
            userId: targetUserId,
          },
        });
        setUserDetails(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };
    fetchUserDetails();
  }, []);

  return (
    <div>
      <Profile userDetails={userDetails} userId={targetUserId} />
      <ProfileNavContainer userDetails={userDetails} userId={targetUserId} />
    </div>
  );
};
