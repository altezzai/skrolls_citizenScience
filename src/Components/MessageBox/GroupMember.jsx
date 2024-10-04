import React from 'react';

import photo from '../../assets/profile.png';
import more from '../../assets/vertical_dots.svg';
import admin_icon from '../../assets/admin.svg';
import message_icon from '../../assets/message.svg';
import delete_icon from '../../assets/delete.svg';
import view_icon from '../../assets/view.svg';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/Components/ui/dropdown-menu';

export const GroupMember = () => {
  return (
    <div className="flex w-[99%] items-center justify-between rounded-md border-2 border-bg-secondary bg-bg-secondary pr-2">
      <div className="flex items-center gap-2">
        <img
          src={photo}
          alt="profile"
          className="w-8 select-none rounded-sm"
          draggable="false"
        />
        <div className="text-sm font-normal text-text-hard">April Curtis</div>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="cursor-pointer">
            <img src={more} className="w-5 select-none" alt="cross" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <div className="flex items-center gap-2 text-xs font-medium text-text-secondary">
              <img
                src={admin_icon}
                alt="admin icon"
                draggable="false"
                className="w-4"
              />
              Make Admin
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="flex items-center gap-2 text-xs font-medium text-text-secondary">
              <img
                src={message_icon}
                alt="message icon"
                draggable="false"
                className="w-4"
              />
              Message
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="flex items-center gap-2 text-xs font-medium text-text-secondary">
              <img
                src={view_icon}
                alt="view icon"
                draggable="false"
                className="w-4"
              />
              View
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="flex items-center gap-2 text-xs font-medium text-text-secondary">
              <img
                src={delete_icon}
                alt="delete icon"
                draggable="false"
                className="w-4"
              />
              Remove
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
