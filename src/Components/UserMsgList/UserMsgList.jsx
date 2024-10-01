import { useState, useRef, useEffect } from 'react';

import search from '../../assets/search.svg';
import plus_icon from '../../assets/plus.svg';

import socket from '@/context/socket';
import UserMsgListItem from './UserMsgListItem';
import { NewGroupForm } from '../NewGroupForm/NewGroupForm';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/Components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/Components/ui/tabs';


const UserMsgList = ({ onUserSelect }) => {
  const [members, setMembers] = useState([]);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    // Send a request to get conversations on component mount
    socket.emit('getUserConversations', { type: 'personal' });

    // Listen for the 'userConversations' event from the server
    socket.on('userConversations', (data) => {
      setMembers(data.conversations);
    });

    // Handle error from the server
    socket.on('error', (errMsg) => {
      setError(errMsg);
      console.error(error);
    });

    // Cleanup on unmount
    return () => {
      socket.off('userConversations');
      socket.off('error');
    };
  }, []);


  const handleItemClick = (index, user) => {
    setActiveIndex(index);
    onUserSelect(user);
  };

  const handleSearchClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="min-w-60">
      <div className="flex select-none gap-5 px-4 py-4">
        <div className="flex w-full gap-3 rounded-3xl bg-textarea px-4 py-2">
          <img
            src={search}
            alt="search"
            className="w-7 cursor-pointer"
            onClick={handleSearchClick}
          />
          <input
            type="text"
            placeholder="Search"
            className="max-w-32 bg-textarea outline-none"
            ref={inputRef}
          />
        </div>
        <Dialog>
          <DialogTrigger>
            <div className="font-normalnt flex cursor-pointer items-center justify-center gap-2 rounded-3xl bg-textarea px-6 py-2">
              <img
                src={plus_icon}
                className="w-5"
                alt="plus"
                draggable="false"
              />
              New
            </div>
          </DialogTrigger>

          <DialogContent className="flex flex-col items-center px-2 max-xl:w-[440px] max-xl:py-4">
            <DialogHeader className="self-start pl-4">
              <DialogTitle>Create a Group</DialogTitle>
            </DialogHeader>
            <NewGroupForm />
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="chat">
        <TabsList className="w-full justify-between rounded-none bg-bg-primary">
          <TabsTrigger
            value="chat"
            className="w-1/2 !bg-inherit data-[state=active]:border-b-2 data-[state=active]:border-black"
          >
            Chat
          </TabsTrigger>
          <TabsTrigger
            value="group"
            className="w-1/2 !bg-inherit data-[state=active]:border-b-2 data-[state=active]:border-black"
          >
            Group
          </TabsTrigger>
        </TabsList>
        <TabsContent value="chat">
          <div
            className="flex h-full w-full flex-col overflow-y-scroll rounded-xl bg-bg-secondary"
            style={{ scrollbarWidth: 'none' }}
          >
            {members.map((member, index) => (
              <UserMsgListItem
                key={index}
                user={member}
                isActive={activeIndex === index}
                onClick={() => handleItemClick(index, member)}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="group">hi</TabsContent>
      </Tabs>
    </div>
  );
};

export default UserMsgList;
