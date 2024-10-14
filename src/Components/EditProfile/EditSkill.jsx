import React from 'react';
import { EditButton } from '../ui/EditButton';
import SkillBtn from '../SkillBtn/SkillBtn';
import { useEffect, useState } from 'react';
import { apiClient } from '@/lib/api_client';

import plus_icon from '../../assets/plus.svg';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/Components/ui/dialog';
import { AddSkill } from './AddSkill';

export const EditSkill = ({ userId }) => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await apiClient.get(`users/profile/${userId}/skill`, {
          params: { userId },
        });
        setSkills(response.data);
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };
    fetchSkills();
  }, [userId]);

  const addSkills = () => {
    console.log('add skills');
  };


  if (skills.length === 0) {
    return (
      <div 
      onClick={addSkills}
      className="mt-4 flex cursor-pointer select-none justify-between rounded-xl bg-bg-secondary px-5 py-5 active:bg-bg-hover max-md:px-2 max-md:py-2">
        <h2 className="pl-2 text-lg font-medium text-text-primary">
          Add Skills
        </h2>
        <img src={plus_icon} alt="add icon" draggable="false" className="w-6" />
      </div>
    );
  }
  return (
    <div
     className="mt-4 flex flex-col rounded-xl bg-bg-secondary px-5 py-5 max-md:px-2 max-md:py-2">
      <h2 className="select-none pl-2 text-lg font-medium text-text-primary">
        Skills
      </h2>

      <div className="flex items-center justify-between">
        <div className="flex w-full flex-wrap gap-2 pb-1 pt-4">
          {skills.map((skill) => (
            <SkillBtn key={skill.Skill.id}>{skill.Skill.skill}</SkillBtn>
          ))}
        </div>

        <Dialog>
          <DialogTrigger>
            <EditButton />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle></DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>

            <AddSkill />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
