import { DialogClose } from '@/Components/ui/dialog';
import landscape_icon from '../../assets/landscape.svg';
import search_user_icon from '../../assets/search_user.svg';
import { GroupMemberAdd } from './GroupMemberAdd';
import { useState } from 'react';

export const NewGroupForm = () => {
    const [authorList, setAuthorList] = useState(["Manu", "Farhathulla","Aswin","Anurag"])
  return (
    <form className="flex flex-col gap-4 px-5">
      <div className="flex select-none items-center justify-center">
        <label
          htmlFor="groupdp"
          className="cursor-pointer rounded-full bg-bg-primary p-4"
        >
          <img
            src={landscape_icon}
            className="w-16"
            alt="landscape"
            draggable="false"
          />
        </label>
        <input
          id="groupdp"
          type="file"
          accept="image/png, image/jpeg, image/jpg, image/webp"
          className="hidden"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="groupName" className="select-none text-sm font-bold">
          Group Name
        </label>
        <input
          type="text"
          id="groupName"
          className="rounded-lg border-[1px] border-border-primary bg-bg-primary px-2 py-1 outline-none"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="groupDesc" className="select-none text-sm font-bold">
          Description
        </label>
        <textarea
          id="groupDesc"
          className="resize-none rounded-lg border-[1px] border-border-primary bg-bg-primary px-2 py-1 outline-none"
          rows="4"
          cols="50"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="searchmembers"
          className="select-none text-sm font-bold"
        >
          Add Members
        </label>
        <div className="flex flex-col gap-2 rounded-lg border-[1px] border-border-primary bg-bg-primary px-2 py-1 outline-none">
          <div className="flex items-center gap-1 text-sm font-light">
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

          <div className="flex h-40 w-full flex-col gap-1 overflow-y-scroll">
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
          <div className="cursor-pointer rounded-md bg-bg-primary px-4 py-2 hover:bg-slate-200">
            Cancel
          </div>
        </DialogClose>
        <input
          type="submit"
          className="cursor-pointer rounded-md bg-primary px-4 py-2 text-bg-secondary hover:bg-red-500"
          value="Create Group"
        />
      </div>
    </form>
  );
};
