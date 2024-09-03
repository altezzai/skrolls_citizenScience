import { Link } from 'react-router-dom';
import UserFollowListItem from '../UserFollowListItem/UserFollowListItem';

export const Followers = ({
  title,
  unfollowbtnflag = false,
  followbtnflag = false,
  countflag = false,
}) => {
  return (
    <div className="my-2 w-full rounded-3xl border-[1px] border-solid border-border-muted bg-bg-secondary px-5 py-5 max-xl:px-2">
      <div className="flex items-center justify-between">
        <span className="pb-2 text-lg font-semibold">{title}</span>
        {countflag ? (
          <div className="bg-bg-text-muted flex h-5 w-5 items-center justify-center rounded-full border-2 border-solid border-bg-secondary text-xs text-bg-secondary">
            12
          </div>
        ) : undefined}
      </div>

      <UserFollowListItem
        user={{ name: 'Manuprasad', username: 'manu' }}
        btnClassName={'w-fit'}
      />
      <div className="cursor-pointe items-center pt-5 text-center">
        <Link
          className="r border-b-[1px] border-solid border-text-primary text-sm text-text-primary max-xl:text-xs"
        >
          View more
        </Link>
      </div>
    </div>
  );
};
