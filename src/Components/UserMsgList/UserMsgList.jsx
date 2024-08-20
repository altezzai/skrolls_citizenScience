import { useState, useRef } from 'react';

import search from '../../assets/search.svg';
import plus_icon from '../../assets/plus.svg';

import UserMsgListItem from '../UserMsgListItem/UserMsgListItem';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/Components/ui/dialog';
import { NewGroupForm } from '../NewGroupForm/NewGroupForm';

const UserMsgList = () => {
  const inputRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const handleSearchClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const users = [
    { name: 'Manuprasad', lastMessage: 'hello', time: '10:28 am', count: 10 },
    {
      name: 'John Doe',
      lastMessage: 'how are you?',
      time: '9:15 am',
      count: 5,
    },
    {
      name: 'John Doe',
      lastMessage: 'how are you?',
      time: '9:15 am',
      count: 5,
    },
    {
      name: 'John Doe',
      lastMessage: 'how are you?',
      time: '9:15 am',
      count: 5,
    },
    { name: 'Manuprasad', lastMessage: 'hello', time: '10:28 am', count: 10 },
    { name: 'Manuprasad', lastMessage: 'hello', time: '10:28 am', count: 10 },
    { name: 'Manuprasad', lastMessage: 'hello', time: '10:28 am', count: 10 },

    { name: 'Manuprasad', lastMessage: 'hello', time: '10:28 am', count: 10 },
    { name: 'Manuprasad', lastMessage: 'hello', time: '10:28 am', count: 10 },
    {
      name: 'John Doe',
      lastMessage: 'how are you?',
      time: '9:15 am',
      count: 5,
    },
    {
      name: 'John Doe',
      lastMessage: 'how are you?',
      time: '9:15 am',
      count: 5,
    },
    {
      name: 'John Doe',
      lastMessage: 'how are you?',
      time: '9:15 am',
      count: 5,
    },
  ];

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
          <DialogContent className="flex flex-col items-center px-6">
            <DialogHeader className="self-start">
              <DialogTitle>Create a Group</DialogTitle>
            </DialogHeader>
            <NewGroupForm />
          </DialogContent>
        </Dialog>
      </div>

      <div
        className="h-full w-full overflow-y-scroll rounded-t-2xl bg-bg-secondary"
        style={{ scrollbarWidth: 'none' }}
      >
        {users.map((user, index) => (
          <UserMsgListItem
            key={index}
            user={user}
            isActive={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default UserMsgList;
