import React from 'react';
import SkillBtn from '../SkillBtn/SkillBtn';
import { EditButton } from '../ui/EditButton';

export const EditInterest = () => {
  return (
    <div className="mt-4 flex flex-col rounded-xl bg-bg-secondary px-5 py-5 max-md:px-2 max-md:py-2">
      <h2 className="pl-2 text-lg font-medium text-text-primary">
        Interests
      </h2>

      <div className="flex items-center justify-between">
        <div className="flex w-full flex-wrap gap-2 pb-1 pt-4">
          {/* {intrests.map((interest) => ( */}
          <SkillBtn

          // key={interest.Interest.id}
          >
            {/* {interest.Interest.interest} */}
            Machine Learning
          </SkillBtn>
          <SkillBtn>Machine Learning</SkillBtn>
          <SkillBtn>Machine Learning</SkillBtn>
          <SkillBtn>Machine Learning</SkillBtn>
          {/* ))} */}
        </div>

        <EditButton />
      </div>
    </div>
  );
};
