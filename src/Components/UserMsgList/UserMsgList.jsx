import React, { useState, useRef } from "react";
import "./UserMsgList.css";
import UserMsgListItem from "../UserMsgListItem/UserMsgListItem";
import search from "../../assets/search.svg";

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
    { name: "Manuprasad", lastMessage: "hello", time: "10:28 am", count: 10 },
    {
      name: "John Doe",
      lastMessage: "how are you?",
      time: "9:15 am",
      count: 5,
    },
    {
      name: "John Doe",
      lastMessage: "how are you?",
      time: "9:15 am",
      count: 5,
    },
    {
      name: "John Doe",
      lastMessage: "how are you?",
      time: "9:15 am",
      count: 5,
    },
    { name: "Manuprasad", lastMessage: "hello", time: "10:28 am", count: 10 },
    { name: "Manuprasad", lastMessage: "hello", time: "10:28 am", count: 10 },
    { name: "Manuprasad", lastMessage: "hello", time: "10:28 am", count: 10 },

    { name: "Manuprasad", lastMessage: "hello", time: "10:28 am", count: 10 },
    { name: "Manuprasad", lastMessage: "hello", time: "10:28 am", count: 10 },
    {
      name: "John Doe",
      lastMessage: "how are you?",
      time: "9:15 am",
      count: 5,
    },
    {
      name: "John Doe",
      lastMessage: "how are you?",
      time: "9:15 am",
      count: 5,
    },
    {
      name: "John Doe",
      lastMessage: "how are you?",
      time: "9:15 am",
      count: 5,
    },
  ];

  return (
    <>
      <div className="search-box py-3 px-5">
        <img
          src={search}
          alt="search"
          onClick={handleSearchClick}
          style={{ cursor: "pointer" }}
        />
        <input type="text" placeholder="Search" ref={inputRef} />
      </div>
      
      <div className="user-msg-list w-full h-full overflow-y-scroll scrollbar-hide">
        {users.map((user, index) => (
          <UserMsgListItem
            key={index}
            user={user}
            isActive={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </>
  );
};

export default UserMsgList;
