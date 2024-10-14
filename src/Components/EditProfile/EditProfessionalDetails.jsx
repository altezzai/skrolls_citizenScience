import React from 'react';
import { EditButton } from '../ui/EditButton';
import { useEffect, useState } from 'react';
import { apiClient } from '@/lib/api_client';

import plus_icon from '../../assets/plus.svg';

export const EditProfessionalDetails = ({ userId }) => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await apiClient.get(
          `users/profile/${userId}/experience`,
          {
            params: { userId },
          }
        );
        setExperiences(response.data);
      } catch (error) {
        console.error('Error fetching educations:', error);
      }
    };

    fetchExperiences();
  }, [userId]);


  if (experiences.length === 0) {
    return (
      <div className="mt-4 flex cursor-pointer select-none justify-between rounded-xl bg-bg-secondary px-5 py-5 active:bg-bg-hover max-md:px-2 max-md:py-2">
        <h2 className="pl-2 text-lg font-medium text-text-primary">
          Add Experience
        </h2>
        <img src={plus_icon} alt="add icon" draggable="false" className="w-6" />
      </div>
    );
  }
  return (
    <div className="mt-4 flex flex-col rounded-xl bg-bg-secondary px-5 py-5 max-md:px-2 max-md:py-2">
      <h2 className="pl-2 text-lg font-medium text-text-primary">
        Professional Details
      </h2>

      <div className="flex items-center justify-between">
        <div className="w-full px-2 pt-2">
          <table className="w-full">
            <thead>
              <tr className="text-left text-xs font-medium text-text-hard">
                <th>Workspace(company/institute)</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              {experiences.map((experience) => (
                <tr
                  className="border-b-[1px] border-solid border-border-muted p-2 text-left text-xs font-bold text-text-primary last:border-b-0"
                  key={experience.id}
                >
                  <td className="py-2">{experience.workspace}</td>
                  <td className="py-2">{experience.position}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <EditButton />
      </div>
    </div>
  );
};
