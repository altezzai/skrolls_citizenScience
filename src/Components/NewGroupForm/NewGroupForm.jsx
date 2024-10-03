import { useEffect, useRef, useState } from 'react';

import landscape_icon from '../../assets/landscape.svg';
import search_user_icon from '../../assets/search_user.svg';

import { GroupMemberAdd } from './GroupMemberAdd';
import { DialogClose } from '@/Components/ui/dialog';
import socket from '@/context/socket';
import { apiClient } from '@/lib/api_client';

export const NewGroupForm = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedMembers, setSelectedMembers] = useState([5]);
  const [groupName, setGroupName] = useState('');
  const [groupDescription, setGroupDescription] = useState('');
  const [fileName, setFileName] = useState();
  const dialogCloseRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Set the preview URL
        setImagePreview(reader.result);
      };
      // Read the file as a data URL
      reader.readAsDataURL(file);
    }
  };

  const submit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', e.target.groupdp.files[0]);

    if (formData) {
      console.log('file', formData);
      try {
        const response = await apiClient.post('users/chat/icon', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('file', response.data);
        setFileName(response.data['fileName']);
      } catch (err) {
        console.log('Error', err);
      }
      console.log(fileName);
    }

    console.log('submit');
    console.log(groupName, groupDescription, selectedMembers, fileName);

    socket.emit('createChat', {
      type: 'group',
      name: groupName.trim(),
      icon: fileName,
      description: groupDescription.trim(),
      members: selectedMembers,
      initialMessage: `Welcome to ${groupName}!`,
      mediaUrl: null,
      sentAt: new Date(),
    });

    setGroupName('');
    setGroupDescription('');
    // setSelectedMembers([]);
    setImagePreview(null);

    socket.on('chatCreated', (response) => {
      console.log('Group created successfully:', response);
      if (dialogCloseRef.current) {
        dialogCloseRef.current.click();
      }
    });
  };

  return (
    <form
      onSubmit={submit}
      className="flex w-full flex-col gap-4 px-5 max-xl:gap-2"
    >
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
              className="w-full bg-bg-primary outline-none placeholder:text-text-secondary"
              placeholder="Search users"
            />
          </div>

          <div className="flex h-40 w-full flex-col gap-1 overflow-y-scroll max-xl:h-36">
            <GroupMemberAdd />
            <GroupMemberAdd />
            <GroupMemberAdd />
            <GroupMemberAdd />
            <GroupMemberAdd />
            <GroupMemberAdd />
            <GroupMemberAdd />
            <GroupMemberAdd />
          </div>
        </div>
      </div>

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
