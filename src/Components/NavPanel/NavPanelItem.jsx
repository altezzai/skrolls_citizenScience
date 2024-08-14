import { cn } from '../../utils/utils';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const NavPanelItem = ({ children, isSelected, link, className }) => {
  const location = useLocation();
  const inMessagePage = location.pathname.includes('/messages');
  return (
    <Link
      draggable="false"
      to={link}
      className={cn(
        'bottomBorder group flex h-16 w-full cursor-pointer px-8 text-text-primary transition-padding hover:bg-gray-50',
        {
          'bg-secondary shadow-[-2px_0px_0px_0px] shadow-primary hover:bg-secondary':
            isSelected,
          'w-max px-3': inMessagePage,
        },
        className
      )}
    >
      <div
        className={cn(
          'hover:border-text-fade text-text flex h-full w-40 items-center justify-start gap-6 border-y-[1px] border-gray-100 text-sm leading-none group-first:border-t-0 group-last:border-b-0',
          {
            'border-transparent': isSelected,
            'w-fit': inMessagePage,
          }
        )}
      >
        {children}
      </div>
    </Link>
  );
};

export default NavPanelItem;
