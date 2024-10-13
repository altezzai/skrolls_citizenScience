import user_icon from '../../assets/default_user.svg';
import group_icon from '../../assets/default_group.svg';

import { ProfilePhoto } from '../Profilephoto/ProfilePhoto';
import { formatTimestamp } from '../../utils/formatTimestamp';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/Components/ui/context-menu';
import { cn } from '@/lib/utils';

const UserMsgListItem = ({ user, isActive, onClick }) => {
  console.log('user', user);
  return (
    <>
      <ContextMenu>
        <ContextMenuTrigger>
          <div
            className={cn(
              'flex select-none items-center justify-between rounded-xl p-2 hover:bg-bg-hover',
              { 'bg-secondary hover:bg-bg-active': isActive }
            )}
            onClick={onClick}
          >
            <div className="flex items-center gap-3">
              <ProfilePhoto
                img={
                  user?.icon
                    ? `http://localhost:3000/uploads/${encodeURIComponent(user.icon)}`
                    : user?.type === 'group'
                      ? group_icon
                      : user_icon
                }
                className={'h-10 w-10'}
              />
              <div className="flex flex-col">
                <div className="min-w-0 truncate text-base font-medium">
                  {user.name}
                </div>
                {user?.lastMessage?.content && (
                  <div className="h-5 flex-nowrap overflow-hidden truncate text-sm text-text-secondary">
                    {user.lastMessage?.content}
                  </div>
                )}
              </div>
            </div>

            {user?.lastMessage && (
              <div className="flex min-w-12 flex-col gap-2">
                <div className="text-xs text-text-secondary">
                  {formatTimestamp(user.lastMessage?.createdAt)}
                </div>
                {user.unreadMessagesCount > 0 && (
                  <div className="flex h-4 w-fit min-w-4 items-center justify-center rounded-full bg-primary px-1 text-xs leading-none text-bg-secondary">
                    {user.unreadMessagesCount}
                  </div>
                )}
              </div>
            )}
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Profile</ContextMenuItem>
          <ContextMenuItem>Billing</ContextMenuItem>
          <ContextMenuItem>Team</ContextMenuItem>
          <ContextMenuItem>Subscription</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </>
  );
};

export default UserMsgListItem;
