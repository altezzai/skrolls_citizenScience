import React, { useRef } from 'react';

import user_icon from '../../assets/default_user.svg';
import more from '../../assets/vertical_dots.svg';
import admin_icon from '../../assets/admin.svg';
import message_icon from '../../assets/message.svg';
import delete_icon from '../../assets/delete.svg';
import view_icon from '../../assets/view.svg';
import red_admin_icon from '../../assets/red_admin.svg';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/Components/ui/dropdown-menu';
import { MenuButton } from '../ui/MenuButton';
import socket from '@/context/socket';
import { useNavigate } from 'react-router-dom';
import { DialogClose } from '@/Components/ui/dialog';

export const GroupMember = ({ chatId, member }) => {
  const navigate = useNavigate();
  const dialogCloseRef = useRef(null);
  const userId = 1;
  console.log('chatId', chatId);
  console.log('member', member);

  const makeAdminClick = () => {
    console.log('make admin');
    socket.emit('makeAdmin', {
      chatId: chatId,
      userId: member?.userId,
    });
  };

  const removeAdminClick = () => {
    console.log('remove admin');
  };

  const viewUserProfile = (targetUserId) => {
    if (dialogCloseRef.current) {
      dialogCloseRef.current.click();
    }
    if (userId === targetUserId) {
      navigate('/profile');
    } else {
      navigate(`/userprofile/${targetUserId}`);
    }
  };

  const removeMemberClick = () => {
    socket.emit('removeMemberFromChat', {
      chatId: chatId,
      userId: member?.userId,
    });
  };

  return (
    <div className="flex w-[99%] select-none items-center justify-between rounded-md border-2 border-bg-secondary bg-bg-secondary pr-2">
      <div className="flex items-center gap-2">
        <img
          src={
            member?.profilePhoto
              ? `http://localhost:3000/uploads/${encodeURIComponent(member?.profilePhoto)}`
              : user_icon
          }
          alt="profile"
          className="w-8 select-none rounded-sm"
          draggable="false"
        />

        <div className="text-sm font-normal text-text-hard">
          {member?.username}
        </div>

        {member?.isAdmin === 1 && (
          <div className="flex select-none items-center justify-center gap-1 rounded-full bg-bg-active px-2 py-[3px] text-center text-xs font-normal text-primary">
            <img src={red_admin_icon} alt="red admin" className="w-3" />
            admin
          </div>
        )}
      </div>

      <DialogClose asChild ref={dialogCloseRef}></DialogClose>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="cursor-pointer">
            <img src={more} className="w-5 select-none" alt="cross" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="select-none">
          <DropdownMenuItem
            onClick={member?.isAdmin === 1 ? removeAdminClick : makeAdminClick}
          >
            {member?.isAdmin === 1 ? (
              <MenuButton label={'Dismiss Admin'} icon={admin_icon} />
            ) : (
              <MenuButton
                onClick={makeAdminClick}
                label={'Make Admin'}
                icon={admin_icon}
              />
            )}
          </DropdownMenuItem>
          <DropdownMenuItem>
            <MenuButton label="Message" icon={message_icon} />
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => viewUserProfile(member?.userId)}>
            <MenuButton label="View" icon={view_icon} />
          </DropdownMenuItem>
          <DropdownMenuItem onClick={removeMemberClick}>
            <MenuButton label="Remove" icon={delete_icon} />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
