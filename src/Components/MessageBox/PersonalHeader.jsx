import React from 'react';
import { ProfilePhoto } from '../Profilephoto/ProfilePhoto';

import user_icon from '../../assets/default_user.svg';
import more from '../../assets/vertical_dots.svg';
import warning_icon from '../../assets/report_warning.svg';
import delete_icon from '../../assets/delete.svg';
import leave_icon from '../../assets/Leave.svg';

// import { useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/Components/ui/dropdown-menu';
import { MenuButton } from '../ui/MenuButton';

export const PersonalHeader = ({ selectedUser }) => {
  // const navigate = useNavigate();

  // console.log('selectedUser', selectedUser);
  // const handleProfileClick = (targetUserId) => {
  //   navigate(`/userprofile/${targetUserId}`);
  // }

  return (
    <div className="flex h-16 select-none items-center justify-between bg-bg-secondary px-5 py-2">
      <div
        className="flex items-center gap-3 text-lg font-medium"
        // onClick={() => handleProfileClick(selectedUser.lastMessage.senderId)}
      >
        <ProfilePhoto
          img={
            selectedUser.icon
              ? `http://localhost:3000/uploads/${encodeURIComponent(selectedUser.icon)}`
              : user_icon
          }
          className={'h-10 w-10'}
        />
        {selectedUser.name}
      </div>
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
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
