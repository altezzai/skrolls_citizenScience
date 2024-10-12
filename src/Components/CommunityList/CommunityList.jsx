import { useState, useRef, useEffect } from 'react';
import socket from '@/context/socket';
import { apiClient } from '@/lib/api_client';

import search from '../../assets/search.svg';
import UserMsgListItem from '../UserMsgList/UserMsgListItem';
import { CreateCommunityTrigger } from './CreateCommunityTrigger';

export const CommunityList = ({ onUserSelect }) => {
  const [communities, setCommunities] = useState([]);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    socket.emit('getUserConversations', { type: 'community' });

    socket.on('communityConversations', (data) => {
      console.log(data);
      setCommunities(data.conversations);
    });

    socket.on('error', (errMsg) => {
      setError(errMsg);
      console.error('Socket error:', errMsg);
    });

    return () => {
      socket.off('communityConversations');
      socket.off('error');
    };
  }, []);

  const handleItemClick = (index, user) => {
    setActiveIndex(index);
    onUserSelect(user);
    setSearchQuery('');
  };

  const handleSearchClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSearchChange = async (event) => {
    const query = event.target.value.trim(); // Trim whitespace
    setSearchQuery(query);

    if (query === '') {
      setSearchResults([]);
      return;
    }

    try {
      const response = await apiClient.get('users/search/communities', {
        params: {
          q: query,
        },
      });
      console.log(response.data);
      setSearchResults(response.data);
    } catch (err) {
      console.error('Error searching users:', err);
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
            className="w-full bg-textarea outline-none"
            ref={inputRef}
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        <CreateCommunityTrigger />
      </div>

      {searchQuery.length > 0 ? (
        <div
          className="flex max-h-[610px] w-full flex-col overflow-y-scroll rounded-xl bg-bg-secondary"
          style={{ scrollbarWidth: 'none' }}
        >
          {searchResults?.map((member, index) => (
            <UserMsgListItem
              key={index}
              user={member}
              isActive={activeIndex === index}
              onClick={() => handleItemClick(index, member)}
            />
          ))}
        </div>
      ) : (
        <div
          className="flex max-h-[610px] w-full flex-col overflow-y-scroll rounded-xl bg-bg-secondary"
          style={{ scrollbarWidth: 'none' }}
        >
          {communities.map((member, index) => (
            <UserMsgListItem
              key={index}
              user={member}
              isActive={activeIndex === index}
              onClick={() => handleItemClick(index, member)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
