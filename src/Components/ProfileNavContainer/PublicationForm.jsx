import React, { useState } from 'react';

import search_user_icon from '../../assets/search_user.svg';
import upload_icon from '../../assets/cloud_upload.svg';

import { DialogClose } from '@/Components/ui/dialog';
import { GroupMemberAdd } from '../NewGroupForm/GroupMemberAdd';

export const PublicationForm = ({ selection }) => {
  const [selected, setSelected] = useState(selection);

  return (
    <form className="px-5">
      <div className='flex flex-col gap-4 pb-5'>
        <div className="flex flex-col gap-2 max-xl:gap-1">
          <label
            htmlFor="research_activity"
            className="select-none text-sm font-bold"
          >
            Publication Type
          </label>
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            name="research_activity"
            id="research_activity"
            className="border-b-[1px] border-border-primary bg-bg-primary px-2 py-1 outline-none"
          >
            <option value="Article">Article</option>
            <option value="Book">Book</option>
            <option value="Thesis">Thesis</option>
            <option value="Dissertation">Dissertation</option>
            <option value="Conference Proceedings">
              Conference Proceedings
            </option>
            <option value="Presentations">Presentations</option>
            <option value="Question Papers">Question Papers</option>
            <option value="others">Others</option>
          </select>
        </div>

        <div className="flex flex-col gap-2 max-xl:gap-1">
          <label htmlFor="title" className="select-none text-sm font-bold">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="rounded-md border-b-[1px] border-border-primary bg-bg-primary px-2 py-1 outline-none"
            required
          />
        </div>

        <div className="flex flex-col gap-2 max-xl:gap-1">
          <label htmlFor="doi" className="select-none text-sm font-bold">
            DOI
          </label>
          <input
            type="text"
            name="doi"
            id="doi"
            className="rounded-md border-b-[1px] border-border-primary bg-bg-primary px-2 py-1 outline-none"
            required
          />
        </div>

        <div className="flex flex-col gap-2 max-xl:gap-1">
          <label htmlFor="authors" className="select-none text-sm font-bold">
            Authors
          </label>
          <div className="flex flex-col gap-1 rounded-md border-b-[1px] border-border-primary bg-bg-primary px-2 py-1">
            <div className="grid w-full grid-cols-2 items-center gap-2">
              <GroupMemberAdd />
              <GroupMemberAdd />
              <GroupMemberAdd />
              <GroupMemberAdd />
            </div>
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
          </div>
        </div>

        <div className="flex flex-col gap-2 max-xl:gap-1">
          <label htmlFor="abstract" className="select-none text-sm font-bold">
            Abstract
          </label>
          <textarea
            name="abstract"
            id="abstract"
            className="resize-none rounded-md border-b-[1px] border-border-primary bg-bg-primary px-2 py-1 outline-none"
            required
          ></textarea>
        </div>

        <div className="flex flex-col gap-2 max-xl:gap-1">
          <label htmlFor="" className="select-none text-sm font-bold">
            File
          </label>
          <label className="flex cursor-pointer items-center justify-center gap-2 rounded-md border-[1px] border-dashed border-border-primary bg-bg-primary px-2 py-4 text-sm text-text-secondary outline-none">
            <img
              src={upload_icon}
              alt="upload"
              className="w-10"
              draggable="false"
            />
            Upload file
            <input
              type="file"
              name="file"
              id="file"
              accept="pdf"
              style={{ display: 'none' }}
              required
            />
          </label>
        </div>
      </div>

      <div className="flex justify-end gap-2 text-sm font-bold">
        <DialogClose asChild>
          <div className="cursor-pointer select-none rounded-md bg-bg-primary px-4 py-2 hover:bg-slate-200">
            Cancel
          </div>
        </DialogClose>
        <input
          type="submit"
          value="Publish"
          className="cursor-pointer select-none rounded-md bg-primary px-4 py-2 text-bg-secondary hover:bg-red-500 active:bg-red-900"
        />
      </div>
    </form>
  );
};
