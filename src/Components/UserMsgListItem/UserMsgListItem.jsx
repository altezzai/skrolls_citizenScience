import './UserMsgListItem.css';
import photo from '../../assets/profile.png';
import { ProfilePhoto } from '../Profilephoto/ProfilePhoto';
import { timeAgo } from '@/utils/timeAgo';

const UserMsgListItem = ({ user, isActive, onClick }) => {
  const formattedTime = new Date(
    user.lastMessage?.createdAt
  ).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div
      className={`usermsglist-item flex select-none items-center justify-between p-2 ${
        isActive ? 'clickedmsg' : ''
      }`}
      onClick={onClick}
    >
      <div className="user-msg-details flex items-center gap-3">
        <ProfilePhoto img={photo} className={'h-10 w-10'} />
        <div className="user-msg-name flex flex-col">
          <div className="user-name min-w-0 truncate">{user.name}</div>
          <div className="user-final-msg h-5 flex-nowrap overflow-hidden truncate">
            {user.lastMessage?.content}
          </div>
        </div>
      </div>

      <div className="user-msg-status flex min-w-12 flex-col gap-2">
        <div className="last-msg-time text-xs">{formattedTime}</div>
        {user.unreadMessagesCount > 0 && (
          <div className="unseen-msg-count flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-xs leading-none">
            {user.unreadMessagesCount}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserMsgListItem;
