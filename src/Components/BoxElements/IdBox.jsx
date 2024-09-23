import { useEffect, useState } from 'react';
import internet from '../../assets/internet.svg';
import { apiClient } from '@/lib/api_client';

export const IdBox = ({ userId = 1 }) => {
  const [otherIds, setOtherIds] = useState([]);

  useEffect(() => {
    const fetchOtherIds = async () => {
      try {
        const response = await apiClient.get(
          `users/profile/${userId}/otherIds`,
          {
            params: {
              userId: userId,
            },
          }
        );
        setOtherIds(response.data);
      } catch (error) {
        console.error('Error fetching other ids:', error);
      }
    };

    fetchOtherIds();
  }, [userId]);

  if (otherIds.length === 0) {
    return null;
  } else
    return (
      <div className="mt-2 w-full rounded-3xl border-[1px] border-solid border-border-muted bg-bg-secondary py-5 max-xl:py-4">
        <div className="mb-5 border-l-4 border-solid border-primary">
          <span className="pl-3 text-lg font-semibold max-xl:text-base">
            Other id&apos;s
          </span>
        </div>
        {otherIds.map((otherId) => (
          <div
            className="flex items-center justify-start pb-2 pl-5"
            key={otherId.id}
          >
            <img src={internet} className="mr-3 w-4 max-xl:w-3" />

            <h5 className="overflow-hidden border-l-[1px] border-solid border-border-muted pl-3 text-base font-medium text-text-secondary max-xl:text-sm">
              {otherId.link}
            </h5>
          </div>
        ))}
      </div>
    );
};
