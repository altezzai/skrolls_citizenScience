import { useState, useEffect } from 'react';
import Profile from '../Components/Profile/Profile';
import ProfileNavContainer from '../Components/ProfileNavContainer/ProfileNavContainer';
import { apiClient } from '@/lib/api_client';

const ProfileContainer = () => {
  const [userDetails, setUserDetails] = useState([]);
  const userId = 1;

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

  return (
    <div className="Profile-container">
      <Profile userDetails={userDetails} userId={userId}/>
      <ProfileNavContainer userDetails={userDetails} userId={userId}/>
    </div>
  );
};

export default ProfileContainer;
