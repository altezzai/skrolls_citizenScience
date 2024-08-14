import { ProfilePhoto } from '../Profilephoto/ProfilePhoto';

export const PhotowithName = ({ profile, name }) => {
  return (
    <div className="flex items-center gap-1">
      <ProfilePhoto img={profile} size={'24px'} />
      <a className=" text-xs text-text-secondary cursor-pointer">{name}</a>
    </div>
  );
};
