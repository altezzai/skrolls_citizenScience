import { useState, useEffect } from 'react';
import NewPost from '../Components/NewPost/NewPost';
import Post from '../Components/Post/Post';
import { apiClient } from '@/lib/api_client';
import { Skeleton } from '@/Components/ui/skeleton';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    const fetchfeed = async () => {
      setLoading(true);
      try {
        const res = await apiClient.get('users/feeds', {
          params: {
            userId: 1,
          },
        });
        setFeeds(res.data);
        console.log(res.data);
      } catch (error) {
        console.error('failed to fetch feeds:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchfeed();
  }, []);
  return (
    <div className="home">
      <NewPost />

      {loading && (
        <>
          <div className="flex flex-col space-y-3 border-2 p-2 mb-3">
            <div className="flex items-center gap-5">
              <Skeleton className="h-8 w-8 rounded-full bg-text-hard" />
              <Skeleton className="h-4 w-40 bg-text-hard" />
            </div>
            <div className="flex flex-col items-center gap-3">
              <Skeleton className="h-4 w-full bg-text-hard" />
              <Skeleton className="h-4 w-full bg-text-hard" />
              <Skeleton className="h-4 w-full bg-text-hard" />
              <Skeleton className="h-4 w-full bg-text-hard" />
            </div>
            <div>
              <Skeleton className="h-80 w-full bg-text-hard" />
            </div>
          </div>
          <div className="flex flex-col space-y-3 border-2 p-2">
            <div className="flex items-center gap-5">
              <Skeleton className="h-8 w-8 rounded-full bg-text-hard" />
              <Skeleton className="h-4 w-40 bg-text-hard" />
            </div>
            <div className="flex flex-col items-center gap-3">
              <Skeleton className="h-4 w-full bg-text-hard" />
              <Skeleton className="h-4 w-full bg-text-hard" />
              <Skeleton className="h-4 w-full bg-text-hard" />
              <Skeleton className="h-4 w-full bg-text-hard" />
            </div>
            <div>
              <Skeleton className="h-80 w-full bg-text-hard" />
            </div>
          </div>
        </>
      )}

      {feeds.map((feed) => (
        <Post key={feed.id} feed={feed} />
      ))}
    </div>
  );
};

export default Home;
