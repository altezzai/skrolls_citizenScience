import { cn } from '../../utils/utils';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const NavPanelItem = ({ children, isSelected, link, className }) => {
  const location = useLocation();
  const inMessagePage = location.pathname.includes('/messages')|| location.pathname.includes('/communities') || location.pathname.includes('/groups');
  return (
    <Link
      draggable="false"
      to={link}
      className={cn(
        'bottomBorder group flex h-16 w-full cursor-pointer px-8 text-text-primary transition-padding hover:bg-gray-50 max-xl:h-14 max-xl:px-3',
        {
          'bg-secondary shadow-[-2px_0px_0px_0px] shadow-primary hover:bg-secondary max-md:shadow-none':
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
            'max-xl:w-36 max-xl:gap-4 max-md:w-10 max-md:justify-center max-md:gap-1':
              !inMessagePage,
          }
        )}
      >
        {children}
      </div>
    </Link>
  );
};

export default NavPanelItem;
