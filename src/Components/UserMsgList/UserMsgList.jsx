import { useState, useRef } from 'react';

import UserMsgListItem from '../UserMsgListItem/UserMsgListItem';
import search from '../../assets/search.svg';

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
      <div className="mx-4 my-4 flex gap-3 rounded-3xl bg-textarea px-4 py-2">
        <img
          src={search}
          alt="search"
          className="w-7 cursor-pointer"
          onClick={handleSearchClick}
        />
        <input
          type="text"
          placeholder="Search"
          className="bg-textarea outline-none"
          ref={inputRef}
        />
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
