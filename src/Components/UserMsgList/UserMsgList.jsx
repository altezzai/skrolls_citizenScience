import { useState, useRef, useEffect } from 'react';
import socket from '@/context/socket';
import UserMsgListItem from './UserMsgListItem';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/Components/ui/tabs';
import { apiClient } from '@/lib/api_client';
import { CreateGroupTrigger } from './CreateGroupTrigger';

import search from '../../assets/search.svg';

const UserMsgList = ({ onUserSelect }) => {
  const [members, setMembers] = useState([]);
  const [groups, setGroups] = useState([]);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch personal conversations
    socket.emit('getUserConversations', { type: 'personal' });

    // Fetch group conversations
    socket.emit('getUserConversations', { type: 'group' });

    // Function to refetch personal and group conversations
    const refetchConversations = () => {
      socket.emit('getUserConversations', { type: 'personal' });
      socket.emit('getUserConversations', { type: 'group' });
    };

    // Listen for new chat creation (either personal or group)
    socket.on('chatCreated', refetchConversations);

    // Handle personal conversations
    socket.on('personalConversations', (data) => {
      setMembers(data.conversations);
    });

    // Handle group conversations
    socket.on('groupConversations', (data) => {
      setGroups(data.conversations);
    });

    // Handle error from the server
    socket.on('error', (errMsg) => {
      setError(errMsg);
      console.error('Socket error:', errMsg);
    });

    // Cleanup all listeners on unmount or update
    return () => {
      socket.off('chatCreated', refetchConversations);
      socket.off('personalConversations');
      socket.off('groupConversations');
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
      const response = await apiClient.get('users/chat', {
        params: {
          q: query,
        },
      });
      console.log(response.data);
      setSearchResults(response.data?.searchDetails?.relatedChats);
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

        <CreateGroupTrigger />
      </div>

      {searchQuery.length > 0 ? (
        <div
          className="flex max-h-[610px] w-full flex-col overflow-y-scroll rounded-xl bg-bg-secondary"
          style={{ scrollbarWidth: 'none' }}
        >
          {searchResults.map((member, index) => (
            <UserMsgListItem
              key={index}
              user={member}
              isActive={activeIndex === index}
              onClick={() => handleItemClick(index, member)}
            />
          ))}
        </div>
      ) : (
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
              className="flex max-h-[610px] w-full flex-col overflow-y-scroll rounded-xl bg-bg-secondary"
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
          <TabsContent value="group">
            <div
              className="flex max-h-[610px] w-full flex-col overflow-y-scroll rounded-xl bg-bg-secondary"
              style={{ scrollbarWidth: 'none' }}
            >
              {groups.map((member, index) => (
                <UserMsgListItem
                  key={index}
                  user={member}
                  isActive={activeIndex === index}
                  onClick={() => handleItemClick(index, member)}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
};

export default UserMsgList;
