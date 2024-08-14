import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/utils';

import NavPanelItem from './NavPanelItem';

import skrolls_logo from '../../assets/skrolls.png';
// Icons
import home_icon from '../../assets/home.svg';
import messages_icon from '../../assets/messages.svg';
import notification_icon from '../../assets/notification.svg';
import groups_icon from '../../assets/groups.svg';
import communities_icon from '../../assets/community.svg';
import settings_icon from '../../assets/settings.svg';
import profile_icon from '../../assets/profile.png';
import IconBadge from '../IconBadge/IconBadge';

export const NavPanel = () => {
  const location = useLocation();
  const inMessagePage = location.pathname.includes('/messages');

  return (
    <div
      className={cn(
        'ml-12 flex h-full flex-col items-center justify-between py-14 transition-margin',
        { 'ml-3 pt-[136px]': inMessagePage }
      )}
    >
      <Link
        to="/"
        className={cn('absolute top-3 flex rounded-lg bg-bg-secondary py-1', {
          hidden: !inMessagePage,
        })}
      >
        <img src={skrolls_logo} alt="icon" />
      </Link>

      <div className="rounded-2xl bg-bg-secondary">
        <NavPanelItem
          className="rounded-t-2xl"
          link="/"
          isSelected={location.pathname === '/'}
        >
          <IconBadge>
            <img src={home_icon} alt="home" />
          </IconBadge>
          {!inMessagePage && <span>Home</span>}
        </NavPanelItem>

        <NavPanelItem
          className=""
          link="/messages"
          isSelected={location.pathname === '/messages'}
        >
          <IconBadge>
            <img src={messages_icon} alt="messages" className="px-[1px]" />
          </IconBadge>
          {!inMessagePage && <span>Messages</span>}
        </NavPanelItem>

        <NavPanelItem
          className=""
          link="/groups"
          isSelected={location.pathname === '/groups'}
        >
          <IconBadge>
            <img src={groups_icon} alt="groups" />
          </IconBadge>
          {!inMessagePage && <span>Groups</span>}
        </NavPanelItem>

        <NavPanelItem
          className=""
          link="/communities"
          isSelected={location.pathname === '/communities'}
        >
          <IconBadge>
            <img src={communities_icon} alt="communities" />
          </IconBadge>
          {!inMessagePage && <span>Communities</span>}
        </NavPanelItem>

        <NavPanelItem
          className="rounded-b-2xl"
          link="/notifications"
          isSelected={location.pathname === '/notifications'}
        >
          <IconBadge className="">
            <img src={notification_icon} alt="notifications" />
          </IconBadge>
          {!inMessagePage && <span>Notification</span>}
        </NavPanelItem>
      </div>

      <div className="rounded-2xl bg-bg-secondary">
        <NavPanelItem
          className="rounded-t-2xl"
          link="/profile"
          isSelected={location.pathname === '/profile'}
        >
          <IconBadge>
            <img
              src={profile_icon}
              alt="profile"
              className="h-[22px] w-[22px] rounded-full"
            />
          </IconBadge>
          {!inMessagePage && <span>Profile</span>}
        </NavPanelItem>

        <NavPanelItem
          className="rounded-b-2xl"
          link="/settings"
          isSelected={location.pathname === '/settings'}
        >
          <IconBadge>
            <img src={settings_icon} alt="settings" />
          </IconBadge>
          {!inMessagePage && <span>Settings</span>}
        </NavPanelItem>
      </div>
    </div>
  );
};
