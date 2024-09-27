import photo from '../../assets/profile.png';
import { ProfilePhoto } from '../Profilephoto/ProfilePhoto';
import { formatTimestamp } from '../../utils/formatTimestamp';

const UserMsgListItem = ({ user, isActive, onClick }) => {
  return (
    <div
      className={`hover:bg-bg-hover flex select-none items-center justify-between rounded-xl p-2 ${
        isActive && 'hover:bg-bg-active bg-secondary'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        <ProfilePhoto img={photo} className={'h-10 w-10'} />
        <div className="flex flex-col">
          <div className="min-w-0 truncate text-base font-medium">
            {user.name}
          </div>
          <div className="h-5 flex-nowrap overflow-hidden truncate text-sm text-text-secondary">
            {user.lastMessage?.content}
          </div>
        </div>
      </div>

      <div className="flex min-w-12 flex-col gap-2">
        <div className="text-xs text-text-secondary">
          {formatTimestamp(user.lastMessage?.createdAt)}
        </div>
        {user.unreadMessagesCount > 0 && (
          <div className="flex h-4 w-fit min-w-4 items-center justify-center rounded-full bg-primary px-1 text-xs leading-none text-bg-secondary">
            {user.unreadMessagesCount}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserMsgListItem;
