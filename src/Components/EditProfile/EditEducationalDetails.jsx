import React from 'react';
import { EditButton } from '../ui/EditButton';
import { useEffect, useState } from 'react';
import { apiClient } from '@/lib/api_client';

import plus_icon from '../../assets/plus.svg';

export const EditEducationalDetails = ({ userId }) => {
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    const fetchEducations = async () => {
      try {
        const response = await apiClient.get(
          `users/profile/${userId}/education`,
          {
            params: { userId },
          }
        );
        setEducations(response.data);
      } catch (error) {
        console.error('Error fetching educations:', error);
      }
    };

    fetchEducations();
  }, [userId]);

  if (educations.length === 0) {
    return (
      <div className="mt-4 flex cursor-pointer select-none justify-between rounded-xl bg-bg-secondary px-5 py-5 active:bg-bg-hover max-md:px-2 max-md:py-2">
        <h2 className="pl-2 text-lg font-medium text-text-primary">
          Add Education
        </h2>
        <img src={plus_icon} alt="add icon" draggable="false" className="w-6" />
      </div>
    );
  }

  return (
    <div className="mt-4 flex flex-col rounded-xl bg-bg-secondary px-5 py-5 max-md:px-2 max-md:py-2">
      <h2 className="pl-2 text-lg font-medium text-text-primary">
        Educational Details
      </h2>
      <div className="flex items-center justify-between">
        <div className="w-full px-4 pt-2">
          <table className="w-full">
            <thead>
              <tr className="pb-1 text-left text-xs font-medium text-text-hard">
                <th className="pb-2">No</th>
                <th className="pb-2">Institution</th>
                <th className="pb-2">Course</th>
                <th className="pb-2">Year</th>
              </tr>
            </thead>
            <tbody>
              {educations.map((education, index) => (
                <tr
                  className="p-2 text-left text-xs font-bold text-text-primary"
                  key={education.id}
                >
                  <td className="py-2">{index + 1}</td>
                  <td>{education.institution}</td>
                  <td>{education.course}</td>
                  <td>{education.startYear}</td>
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
