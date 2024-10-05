import search_user_icon from '../../assets/search_user.svg';
import group_icon from '../../assets/default_group.svg';
import { GroupMember } from './GroupMember';
import { useEffect, useState } from 'react';
import socket from '@/context/socket';

export const GroupInfo = ({ chatId }) => {
  const [groupInfo, setGroupInfo] = useState([]);

  useEffect(() => {
    // Fetch initial chat details
    socket.emit('getChatDetails', { chatId });

    socket.on('chatDetails', (data) => {
      setGroupInfo(data);
    });

    // Listen for updates when an admin is made
    socket.on('adminMade', () => {
      // Refetch group details when an admin is made
      socket.emit('getChatDetails', { chatId });
    });

    socket.on('memberRemoved', () => {
      socket.emit('getChatDetails', { chatId });
    });

    return () => {
      socket.off('chatDetails');
      socket.off('adminMade');
    };
  }, [chatId]);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-3 px-3">
      <div className="w-fit rounded-full bg-bg-muted p-1">
        <img
          src={
            groupInfo?.chatIcon
              ? `http://localhost:3000/uploads/${encodeURIComponent(groupInfo?.chatIcon)}`
              : group_icon
          }
          alt={`${groupInfo?.chatName} icon`}
          className="h-20 w-20 rounded-full"
        />
      </div>
      <div className="flex items-center justify-center rounded-md bg-bg-muted px-2 py-1 text-sm text-text-primary">
        {groupInfo?.chatName}
      </div>

      <div className="flex min-h-24 w-full justify-center rounded-md bg-bg-muted px-2 py-1 text-sm text-text-primary">
        {groupInfo?.chatDescription}
      </div>

      <div className="flex w-full flex-col gap-1 text-start font-bold">
        Members
        <div className="flex flex-col gap-2 rounded-md bg-bg-primary px-2 pb-4 pt-1 outline-none">
          <div className="flex items-center gap-1 pl-1 text-sm font-light">
            <img
              src={search_user_icon}
              className="w-4 select-none"
              alt="user search"
              draggable="false"
            />
            <input
              type="text"
              className="w-full bg-bg-primary px-2 outline-none placeholder:select-none placeholder:text-text-secondary"
              placeholder="Search users"
            />
          </div>

          <div className="flex h-40 w-full flex-col gap-1 overflow-y-scroll max-xl:h-36">
            {groupInfo?.members?.map((member) => (
              <GroupMember
                key={member.userId}
                member={member}
                chatId={chatId}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-1 w-full select-none rounded-full bg-primary p-2 text-center text-sm font-bold text-bg-secondary active:bg-red-800">
        Copy Group Link
      </div>
    </div>
  );
};
