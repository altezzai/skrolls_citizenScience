import { timeAgo } from '@/utils/timeAgo';
import { ProfilePhoto } from '../Profilephoto/ProfilePhoto';
import user_icon from '../../assets/default_user.svg';

export const Notification = ({
  profilePic,
  username,
  text,
  time,
  postpic = '',
}) => {
  return (
    <>
      <div className="flex items-center justify-center gap-3 text-sm font-medium">
        <ProfilePhoto
          img={
            profilePic
              ? `http://localhost:3000/uploads/${encodeURIComponent(profilePic)}`
              : user_icon
          }
          className={'h-10 w-10'}
        />
        <span className="text-primary">{username}</span>
        <span className="text-text-primary">{text}</span>
        <div className="h-1 w-1 rounded-full bg-text-muted"></div>
        <span className="select-none text-text-secondary">{timeAgo(time)}</span>
      </div>
      {postpic === '' ? undefined : (
        <img
          src={`http://localhost:3000/uploads/${postpic}`}
          className="h-11 w-14 select-none rounded-lg object-cover"
          draggable="false"
          alt="post thumbnail"
        />
      )}
    </>
  );
};
