import { cn } from '@/lib/utils';
import { BookMarkIcon } from '../../assets/component/BookMarkIcon';
import React, { useEffect, useState } from 'react';
import { apiClient } from '@/lib/api_client';

export const Saved = ({ userId, feedId }) => {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    // Check if the feed is saved when the component mounts
    const checkIfSaved = async () => {
      try {
        const response = await apiClient.get('/users/saved-feeds', {
          params: {
            userId,
          },
        });

        // Check if feedId is present in the list of saved feeds
        const isFeedSaved = response.data.feeds.some(
          (savedFeed) => savedFeed.Feed.id === feedId
        );
        setSaved(isFeedSaved); // Set the saved state based on the presence of feedId
      } catch (error) {
        console.error('Error checking if feed is saved:', error);
      }
    };

    checkIfSaved();
  }, [userId, feedId]);

  const handleSaveClick = async () => {
    try {
      const response = await apiClient.post('users/saved-feeds', {
        // Backend endpoint
        userId,
        feedId,
      });

      // Toggle saved state based on response
      setSaved(!saved);
      console.log(response.data.message); // Success message from server
    } catch (error) {
      console.error('Error saving feed:', error);
    }
  };

  return (
    <div
      className="flex cursor-pointer items-center rounded-full p-1 hover:bg-red-50"
      onClick={() => handleSaveClick()}
    >
      <BookMarkIcon
        className={cn('w-6 text-black', {
          'fill-black': saved,
          'fill-none': !saved,
        })}
      />
    </div>
  );
};
