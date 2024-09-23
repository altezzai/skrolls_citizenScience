import { timeAgo } from '@/utils/timeAgo';
import { ProfilePhoto } from '../Profilephoto/ProfilePhoto';

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
        <ProfilePhoto img={profilePic} className={'h-10 w-10'} />
        <span className="text-primary">{username}</span>
        <span className="text-text-primary">{text}</span>
        <div className="h-1 w-1 rounded-full bg-text-muted"></div>
        <span className="text-text-secondary select-none">
          {timeAgo(time)}
        </span>
      </div>
      {postpic === '' ? undefined : (
        <img
          src={`http://localhost:3000/uploads/${postpic}`}
          className="h-11 w-14 rounded-lg select-none object-cover"
          draggable="false"
          alt="post thumbnail"
        />
      )}
    </>
  );
};
