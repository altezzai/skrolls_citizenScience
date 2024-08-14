import { cn } from '../../utils/utils';

const Dot = ({ size = 4, className }) => {
  return (
    <div
      style={{ width: `${size}px`, height: `${size}px` }}
      className={cn('mx-2 rounded-full bg-text-muted', className)}
    ></div>
  );
};

export default Dot;
