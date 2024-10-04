import search_user_icon from '../../assets/search_user.svg';
import group_icon from '../../assets/default_group.svg';
import { GroupMember } from './GroupMember';

export const GroupInfo = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-3 px-3">
      <div className="w-fit rounded-full bg-bg-muted p-1">
        <img src={group_icon} alt="" className="w-20 rounded-full" />
      </div>
      <div className="flex items-center justify-center rounded-md bg-bg-muted px-2 py-1 text-sm text-text-primary">
        Group name
      </div>

      <div className="flex min-h-24 w-full justify-center rounded-md bg-bg-muted px-2 py-1 text-sm text-text-primary">
        Group description
      </div>

      <div className="flex w-full flex-col gap-1 text-start font-bold">
        Members
        <div className="flex flex-col gap-2 rounded-md bg-bg-primary px-2 py-1 outline-none">
          <div className="flex items-center gap-1 pl-1 text-sm font-light">
            <img
              src={search_user_icon}
              className="w-4"
              alt="user search"
              draggable="false"
            />
            <input
              type="text"
              className="w-full bg-bg-primary px-2 outline-none placeholder:text-text-secondary"
              placeholder="Search users"
            />
          </div>

          <div className="flex h-40 w-full flex-col gap-1 overflow-y-scroll max-xl:h-36">
            <GroupMember />
            <GroupMember />
            <GroupMember />
            <GroupMember />
            <GroupMember />
          </div>
        </div>
      </div>

      <div className="mt-1 w-full select-none rounded-full bg-primary p-2 text-center text-sm font-bold text-bg-secondary active:bg-red-800">
        Copy Group Link
      </div>
    </div>
  );
};
