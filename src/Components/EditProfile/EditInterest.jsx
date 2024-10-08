import React from 'react';
import SkillBtn from '../SkillBtn/SkillBtn';
import { EditButton } from '../ui/EditButton';
import { useEffect, useState } from 'react';
import { apiClient } from '@/lib/api_client';

export const EditInterest = ({ userId }) => {
  const [intrests, setIntrests] = useState([]);

  useEffect(() => {
    const fetchIntrests = async () => {
      try {
        const response = await apiClient.get(
          `users/profile/${userId}/interest`,
          {
            params: { userId },
          }
        );
        setIntrests(response.data);
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };

    fetchIntrests();
  }, [userId]);
  return (
    <div className="mt-4 flex flex-col rounded-xl bg-bg-secondary px-5 py-5 max-md:px-2 max-md:py-2">
      <h2 className="pl-2 text-lg font-medium text-text-primary">Interests</h2>

      <div className="flex items-center justify-between">
        <div className="flex w-full flex-wrap gap-2 pb-1 pt-4">
          
          {intrests.map((interest) => (
            <SkillBtn key={interest.Interest.id}>
              {interest.Interest.interest}
            </SkillBtn>
          ))}
        </div>

        <EditButton />
      </div>
    </div>
  );
};
