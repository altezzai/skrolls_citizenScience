import { useEffect, useRef, useState } from 'react';

import landscape_icon from '../../assets/landscape.svg';
import search_user_icon from '../../assets/search_user.svg';

import { GroupMemberAdd } from './GroupMemberAdd';
import { DialogClose } from '@/Components/ui/dialog';
import socket from '@/context/socket';
import { apiClient } from '@/lib/api_client';

export const NewGroupForm = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [groupName, setGroupName] = useState('');
  const [groupDescription, setGroupDescription] = useState('');
  const [fileName, setFileName] = useState('');
  const [error, setError] = useState();
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const dialogCloseRef = useRef(null);
  const [memberDetail, setMemberDetail] = useState([]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSearch = async (event) => {
    const query = event.target.value.trim(); // Trim whitespace
    setSearchQuery(query);

    if (query === '') {
      setSearchResults([]);
      return;
    }

    try {
      const response = await apiClient.get('users/chat/members', {
        params: {
          q: query,
        },
      });
      setSearchResults(response.data);
    } catch (err) {
      console.error('Error searching users:', err);
    }
  };

  const handleMemberSelect = (user) => {
    setSelectedMembers((prevSelectedMembers) => [
      ...prevSelectedMembers,
      user.id,
    ]);
    setMemberDetail((prevDetails) => [...prevDetails, user]);
    setSearchQuery('');
  };

  const removeMember = (id) => {
    setSelectedMembers((prevSelectedMembers) =>
      prevSelectedMembers.filter((memberId) => memberId !== id)
    );
    setMemberDetail((prevDetails) =>
      prevDetails.filter((member) => member.id !== id)
    );
  };

  const submit = async (e) => {
    e.preventDefault();

    const file = e.target.groupdp.files[0];
    console.log('file', !!file);

    if (!!file) {
      try {
        const response = await apiClient.post('users/chat/icon', file, {
          headers: {
            'Content-Type': file.type,
          },
        });
        setFileName(response.data['fileName']);
      } catch (err) {
        console.log('Error', err);
      }
    }

    socket.emit('createChat', {
      type: 'group',
      name: groupName.trim(),
      icon: fileName,
      description: groupDescription.trim(),
      members: selectedMembers,
      sentAt: new Date(),
    });

    socket.on('error', (error) => {
      setError(error);
    });

    socket.on('chatCreated', (response) => {
      if (dialogCloseRef.current) {
        dialogCloseRef.current.click();
      }
    });
  };

  console.log('error', error);
  return (
    <form
      onSubmit={submit}
      className="flex w-full flex-col gap-4 px-5 max-xl:gap-2"
    >
      {/* Image Input */}
      <div className="flex select-none items-center justify-center">
        <label
          htmlFor="groupdp"
          className="cursor-pointer rounded-full bg-bg-primary"
        >
          <img
            src={imagePreview || landscape_icon}
            className="h-24 w-24 rounded-full object-cover max-xl:h-20 max-xl:w-20"
            alt="group thumbnail"
            draggable="false"
          />
        </label>
        <input
          id="groupdp"
          type="file"
          accept="image/png, image/jpeg, image/jpg, image/webp"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>

      {/* Group Name and Description */}
      <div className="flex flex-col gap-2 max-xl:gap-1">
        <label htmlFor="groupName" className="select-none text-sm font-bold">
          Group Name
        </label>
        <input
          type="text"
          id="groupName"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          className="rounded-lg border-[1px] border-border-primary bg-bg-primary px-2 py-1 outline-none"
          required
        />
      </div>

      <div className="flex flex-col gap-2 max-xl:gap-1">
        <label htmlFor="groupDesc" className="select-none text-sm font-bold">
          Description
        </label>
        <textarea
          id="groupDesc"
          value={groupDescription}
          onChange={(e) => setGroupDescription(e.target.value)}
          className="resize-none rounded-lg border-[1px] border-border-primary bg-bg-primary px-2 py-1 outline-none"
          rows="4"
          cols="50"
          required
        />
      </div>

      {/* Search Members */}
      <div className="flex flex-col gap-2 max-xl:gap-1">
        <label
          htmlFor="searchmembers"
          className="select-none text-sm font-bold"
        >
          Add Members
        </label>
        <div className="flex flex-col gap-2 rounded-lg border-[1px] border-border-primary bg-bg-primary px-2 py-1 outline-none">
          <div className="flex items-center gap-2 text-sm font-light">
            <img
              src={search_user_icon}
              className="w-4"
              alt="user search"
              draggable="false"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              className="w-full bg-bg-primary outline-none placeholder:text-text-secondary"
              placeholder="Search users"
            />
          </div>

          {/* Search Results - Exclude already selected members */}
          <div className="flex h-40 w-full flex-col gap-1 overflow-y-scroll max-xl:h-36">
            {searchQuery.length > 0 ? (
              <>
                {searchResults
                  .filter((user) => !selectedMembers.includes(user.id)) // Filter out selected members
                  .map((user) => (
                    <GroupMemberAdd
                      add={true}
                      key={user.id}
                      UserId={user.id}
                      username={user.username}
                      profilePic={user.profile_image}
                      OnMemberSelect={() => handleMemberSelect(user)}
                    />
                  ))}
              </>
            ) : (
              <>
                {memberDetail.length > 0 &&
                  memberDetail.map((user) => (
                    <GroupMemberAdd
                      add={false}
                      key={user.id}
                      UserId={user.id}
                      username={user.username}
                      profilePic={user.profile_image}
                      onRemove={() => removeMember(user.id)}
                    />
                  ))}
              </>
            )}
          </div>
        </div>
      </div>
      {/* Submit and Cancel Buttons */}
      <div className="flex justify-end gap-2 text-sm font-bold">
        <DialogClose asChild>
          <div
            ref={dialogCloseRef}
            className="cursor-pointer select-none rounded-md bg-bg-primary px-4 py-2 hover:bg-slate-200"
          >
            Cancel
          </div>
        </DialogClose>
        <input
          type="submit"
          value="Create Group"
          className="cursor-pointer select-none rounded-md bg-primary px-4 py-2 text-bg-secondary hover:bg-red-500 active:bg-red-900"
        />
      </div>
    </form>
  );
};
