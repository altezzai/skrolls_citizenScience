import { cn } from '@/lib/utils';

export const ProfilePhoto = ({ img, className }) => {
  return (
    <img
      src={img}
      crossorigin="anonymous"
      className={cn('select-none rounded-full', className)}
      draggable="false"
    />
  );
};
