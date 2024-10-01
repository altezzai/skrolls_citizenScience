import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/utils';

import NavPanelItem from './NavPanelItem';

import skrolls_logo from '../../assets/skrolls.png';
// Icons
import plus_icon from '../../assets/plus.svg';
import home_icon from '../../assets/home.svg';
import messages_icon from '../../assets/messages.svg';
import notification_icon from '../../assets/notification.svg';
import groups_icon from '../../assets/groups.svg';
import communities_icon from '../../assets/community.svg';
import settings_icon from '../../assets/settings.svg';
import profile_icon from '../../assets/profile.png';
import IconBadge from '../IconBadge/IconBadge';
import { useState, lazy } from 'react';
const AddPost = lazy(() => import('../AddPost/AddPost'));

export const NavPanel = () => {
  const location = useLocation();
  const inMessagePage = location.pathname.includes('/messages');
  const [addPost, setAddPost] = useState(false);

  const handleAddPost = () => {
    setAddPost(true);
  };

  const ClosePost = () => {
    setAddPost(false);
  };

  return (
    <div
      className={cn(
        'ml-12 flex h-full flex-col items-center justify-between py-14 transition-margin',
        { 'ml-3 pt-[136px]': inMessagePage },
        {
          'max-xl:ml-5 max-xl:py-3 max-md:absolute max-md:bottom-0 max-md:ml-0 max-md:hidden max-md:flex-row max-md:gap-3 max-md:py-0':
            !inMessagePage,
        }
      )}
    >
      <Link
        to="/"
        className={cn(
          'absolute top-3 flex rounded-lg bg-bg-secondary py-1 max-md:hidden',
          {
            hidden: !inMessagePage,
          }
        )}
      >
        <img src={skrolls_logo} alt="icon" />
      </Link>

      <div className={`flex flex-col max-md:flex-row`}>
        <div
          className="mb-3 flex cursor-pointer select-none justify-center gap-2 rounded-2xl bg-primary py-3 text-sm text-bg-secondary transition-all duration-100 ease-in-out hover:bg-red-500 active:bg-red-800 max-md:hidden"
          onClick={handleAddPost}
        >
          <img
            src={plus_icon}
            alt="add post"
            className="w-5 invert"
            draggable="false"
          />

          {!inMessagePage && <p>Create Post</p>}
        </div>
        <AddPost show={addPost} handleClose={ClosePost}></AddPost>

        <div className="flex flex-col rounded-2xl bg-bg-secondary max-md:flex-row">
          <NavPanelItem
            className="rounded-t-2xl max-md:rounded-l-2xl max-md:rounded-t-none"
            link="/"
            isSelected={location.pathname === '/'}
          >
            <IconBadge>
              <img src={home_icon} alt="home" />
            </IconBadge>
            {!inMessagePage && <span className="max-md:hidden">Home</span>}
          </NavPanelItem>

          <NavPanelItem
            className=""
            link="/messages"
            isSelected={location.pathname === '/messages'}
          >
            <IconBadge>
              <img src={messages_icon} alt="messages" className="px-[1px]" />
            </IconBadge>
            {!inMessagePage && <span className="max-md:hidden">Messages</span>}
          </NavPanelItem>

          <NavPanelItem
            className=""
            link="/groups"
            isSelected={location.pathname === '/groups'}
          >
            <IconBadge>
              <img src={groups_icon} alt="groups" />
            </IconBadge>
            {!inMessagePage && <span className="max-md:hidden">Groups</span>}
          </NavPanelItem>

          <NavPanelItem
            className=""
            link="/communities"
            isSelected={location.pathname === '/communities'}
          >
            <IconBadge>
              <img src={communities_icon} alt="communities" />
            </IconBadge>
            {!inMessagePage && (
              <span className="max-md:hidden">Communities</span>
            )}
          </NavPanelItem>

          <NavPanelItem
            className="rounded-b-2xl max-md:rounded-b-none max-md:rounded-r-2xl"
            link="/notifications"
            isSelected={location.pathname === '/notifications'}
          >
            <IconBadge className="">
              <img src={notification_icon} alt="notifications" />
            </IconBadge>
            {!inMessagePage && (
              <span className="max-md:hidden">Notification</span>
            )}
          </NavPanelItem>
        </div>
      </div>

      <div className="flex flex-col rounded-2xl bg-bg-secondary max-md:flex-row">
        <NavPanelItem
          className="rounded-t-2xl max-md:rounded-b-2xl"
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
          {!inMessagePage && <span className="max-md:hidden">Profile</span>}
        </NavPanelItem>

        <NavPanelItem
          className="rounded-b-2xl max-md:rounded-t-2xl"
          link="/settings"
          isSelected={location.pathname === '/settings'}
        >
          <IconBadge>
            <img src={settings_icon} alt="settings" />
          </IconBadge>
          {!inMessagePage && <span className="max-md:hidden">Settings</span>}
        </NavPanelItem>
      </div>
    </div>
  );
};
