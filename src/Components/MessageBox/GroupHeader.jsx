import React from 'react';
import { ProfilePhoto } from '../Profilephoto/ProfilePhoto';

import group_icon from '../../assets/default_group.svg';
import more from '../../assets/vertical_dots.svg';
import warning_icon from '../../assets/report_warning.svg';
import delete_icon from '../../assets/delete.svg';
import leave_icon from '../../assets/Leave.svg';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/Components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/Components/ui/dropdown-menu';
import { GroupInfo } from './GroupInfo';
import { MenuButton } from '../ui/MenuButton';

export const GroupHeader = ({ selectedUser }) => {

  console.log('selectedUser', selectedUser);
  return (
    <>
      <Dialog>
        <div className="flex h-16 select-none items-center justify-between bg-bg-secondary px-5 py-2">
          <DialogTrigger asChild>
            <div className="flex cursor-pointer items-center gap-3 text-lg font-medium">
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
          </DialogTrigger>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <img
                className="w-7 cursor-pointer"
                src={more}
                alt="More options"
                draggable="false"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="m-1 rounded-xl p-0">
              <DropdownMenuItem className="flex w-full gap-2 border-b-2 border-border-muted py-3">
                <MenuButton label={'Report'} icon={warning_icon} />
              </DropdownMenuItem>
              <DropdownMenuItem className="flex w-full gap-2 border-b-2 border-border-muted py-3">
                <MenuButton label={'Delete Chat'} icon={delete_icon} />
              </DropdownMenuItem>
              <DropdownMenuItem className="flex w-full gap-2 py-3">
                <MenuButton label={'Leave Chat'} icon={leave_icon} />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <DialogContent className="flex flex-col items-center px-2 max-xl:w-[440px] max-xl:py-4">
          <DialogHeader className="self-start pl-4">
            <DialogTitle>Group info</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <GroupInfo chatId={selectedUser.chatId} />
        </DialogContent>
      </Dialog>
    </>
  );
};
