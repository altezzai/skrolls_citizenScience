import { cn } from '../../utils/utils';

export const SettingsItem = ({
  image,
  className,
  imgClassName,
  label,
  next,
  nextClassName,
}) => {
  return (
    <div className="flex items-center justify-between bg-bg-secondary p-4 first:rounded-t-2xl first:border-b-2 last:rounded-b-2xl only:rounded-2xl">
      <div className="flex items-center gap-4">
        <div
          className={cn(
            'flex items-center justify-center rounded-full bg-bg-muted-transparent',
            className
          )}
        >
          <img
            src={image}
            className={cn('rounded-full', imgClassName)}
            alt="author icon"
            draggable="false"
          />
        </div>
        <div className="text-sm">{label}</div>
      </div>
      <div className={cn('cursor-pointer', nextClassName)}>
        <img src={next} className="w-4" alt="next icon" draggable="false" />
      </div>
    </div>
  );
};
