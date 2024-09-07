import postpic from '../assets/post-img.png';
import profilePic from '../assets/profile.png';
import IconBadge from '../Components/IconBadge/IconBadge';
import settings_icon from '../assets/settings-gray.svg';

import { Notification } from '../Components/Notification/Notification';
import { apiClient } from '@/lib/api_client';
import { useState, useEffect } from 'react';
import { groupMessagesByDate } from '@/utils/groupMessagesByDate';
import { Skeleton } from '@/Components/ui/skeleton';

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch notifications when the component mounts
  useEffect(() => {
    setLoading(true);
    const fetchNotifications = async () => {
      try {
        const response = await apiClient.get('/users/notifications', {
          params: {
            userId: 1,
            limit: 20,
          },
        });
        setNotifications(response.data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  const messagedate = groupMessagesByDate(notifications);

  return (
    <div className="mt-5 flex w-full flex-col">
      <div className="flex select-none items-center justify-between text-lg font-medium text-text-secondary">
        <span>Notifications</span>
        <IconBadge>
          <img
            src={settings_icon}
            alt="settings"
            className="h-7 w-7 cursor-pointer rounded-full p-1 hover:bg-secondary"
            draggable="false"
          />
        </IconBadge>
      </div>

      {loading && (
        <div className="mt-5 w-full">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="mb-5 flex items-center justify-between rounded-xl border-2 border-text-secondary p-2"
            >
              <div className="flex items-center gap-3">
                <Skeleton className="h-7 w-7 rounded-full bg-text-secondary" />
                <Skeleton className="h-3 w-20 bg-text-secondary" />
                <Skeleton className="h-3 w-40 bg-text-secondary" />
              </div>
              <div>
                <Skeleton className="h-10 w-20 bg-text-secondary" />
              </div>
            </div>
          ))}
        </div>
      )}

      {Object.keys(messagedate).map((date) => (
        <div
          className="mb-5 flex flex-col items-center justify-center"
          key={date}
        >
          <span className="mb-3 select-none text-xs font-medium text-text-secondary">
            {date}
          </span>
          <div className="w-full">
            {messagedate[date].map((notification) => (
              <div
                className="flex w-full cursor-pointer items-center justify-between border-b-2 border-bg-muted bg-bg-secondary py-2 pl-4 pr-2 first:rounded-t-xl last:rounded-b-xl"
                key={notification.id}
              >
                <Notification
                  profilePic={notification.actors[0]?.profilePhoto}
                  username={notification.actors[0]?.username}
                  text={notification.content}
                  time={notification.createdAt}
                  postpic={notification.relatedFeed?.fileName[0]}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default NotificationPage;
