import './FollowButton.css';
import { cn } from '../../utils/utils';

const FollowButton = ({ follow, onClick, className }) => {
  return (
    <div
      className={cn(
        'flex w-28 cursor-pointer select-none items-center justify-center rounded-full border-[1px] border-black px-4 py-1 text-center max-xl:w-20 max-xl:text-sm',
        { 'bg-black text-white hover:bg-gray-900': !follow },
        { 'bg-white text-black hover:bg-gray-200': follow },
        className
      )}
      onClick={onClick}
    >
      {follow ? 'Following' : 'Follow'}
    </div>
  );
};

export default FollowButton;
