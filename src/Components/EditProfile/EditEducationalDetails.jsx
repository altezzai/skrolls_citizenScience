import React from 'react';
import { EditButton } from '../ui/EditButton';

export const EditEducationalDetails = () => {
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
              {/* {Educations.map((education, index) => ( */}
              <tr
                className="p-2 text-left text-xs font-bold text-text-primary"
                // key={education.id}
              >
                <td className="py-2">1</td>
                <td>Kannur University</td>
                <td>Bachelor of Technology</td>
                <td>2012</td>
              </tr>
              {/* ))} */}
            </tbody>
          </table>
        </div>

        <EditButton />
      </div>
    </div>
  );
};
