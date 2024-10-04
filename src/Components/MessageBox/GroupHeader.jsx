import React from 'react';
import { ProfilePhoto } from '../Profilephoto/ProfilePhoto';

import group_icon from '../../assets/default_group.svg';
import more from '../../assets/vertical_dots.svg';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/Components/ui/dialog';
import { GroupInfo } from './GroupInfo';

export const GroupHeader = ({ selectedUser }) => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div className="flex h-16 select-none items-center justify-between bg-bg-secondary px-5 py-2">
            <div className="flex items-center gap-3 text-lg font-medium">
              <ProfilePhoto
                img={
                  selectedUser.icon
                    ? `http://localhost:3000/uploads/${encodeURIComponent(selectedUser.icon)}`
                    : group_icon
                }
                className={'h-10 w-10'}
              />
              {selectedUser.name}
            </div>
            <img
              className="w-7 cursor-pointer"
              src={more}
              alt="More options"
              draggable="false"
            />
          </div>
        </DialogTrigger>

        <DialogContent className="flex flex-col items-center px-2 max-xl:w-[440px] max-xl:py-4">
          <DialogHeader className="self-start pl-4">
            <DialogTitle>Group info</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <GroupInfo selectedUser />
        </DialogContent>
      </Dialog>
    </>
  );
};
