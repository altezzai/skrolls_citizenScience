import getFullName from '@/utils/getFullName';
import React from 'react';
import { EditButton } from '../ui/EditButton';

export const EditPersonalDetails = () => {
  return (
    <div className="mt-4 flex flex-col rounded-xl bg-bg-secondary px-5 py-5 max-md:px-2 max-md:py-2">
      <h2 className="pl-2 text-lg font-medium text-text-primary">
        Personal Details
      </h2>

      <div className="flex items-center justify-between">
        <div className="pt-1 text-xs">
          <div className="flex w-full items-center gap-40 p-2">
            <div className="mb-1 flex w-44 flex-col">
              <div className="pb-1 text-left font-medium text-text-hard">
                Name
              </div>
              <div className="text-left font-medium text-text-primary">
                {getFullName({
                  first_name: 'Muhammed',
                  middle_name: 'Rafsal',
                  last_name: 'N',
                })}
              </div>
            </div>
            <div className="mb-1 flex w-44 flex-col">
              <div className="pb-1 text-left font-medium text-text-hard">
                Phone Number
              </div>
              <div className="text-left font-medium text-text-primary">
                9087654321
              </div>
            </div>
          </div>
          <div className="flex items-center gap-40 p-2">
            <div className="mb-1 flex w-44 flex-col">
              <div className="pb-1 text-left font-medium text-text-hard">
                E-mail
              </div>
              <div className="text-left font-medium text-text-primary">
                rafaln2001@gmail.com
              </div>
            </div>
            <div className="mb-1 flex w-44 flex-col">
              <div className="pb-1 text-left font-medium text-text-hard">
                Date of Birth
              </div>
              <div className="text-left font-medium text-text-primary">
                01/07/2001
              </div>
            </div>
          </div>
        </div>

        <EditButton />
      </div>
    </div>
  );
};
