import { useState, useEffect } from 'react';
import NewPost from '../Components/NewPost/NewPost';
import Post from '../Components/Post/Post';
import { apiClient } from '@/lib/api_client';
import { Skeleton } from '@/Components/ui/skeleton';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [feeds, setFeeds] = useState([]);
  const [page, setPage] = useState(1); // Pagination state
  const limit = 10; // Limit of posts per page

  useEffect(() => {
    const fetchFeeds = async () => {
      setLoading(true); 
      try {
        // Fetch feeds from the API (without userId to get all posts)
        const res = await apiClient.get(`users/feeds`, {
          params: {
            userId: 1,
            page, // Current page for pagination
            limit, // Number of items per page
          },
        });
        setFeeds(res.data); 
      } catch (error) {
        console.error('Error fetching feeds:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchFeeds();
  }, [page]); // Re-fetch when `page` changes

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  }

  return (
    <div className="home">
      <NewPost />

      {loading && (
        <>
          <div className="mb-3 flex flex-col space-y-3 border-2 p-2">
            <div className="flex items-center gap-5">
              <Skeleton className="h-8 w-8 rounded-full bg-text-secondary" />
              <Skeleton className="h-4 w-40 bg-text-secondary" />
            </div>
            <div className="flex flex-col gap-3">
              <Skeleton className="h-4 w-full bg-text-secondary " />
              <Skeleton className="h-4 w-full bg-text-secondary " />
              <Skeleton className="h-4 w-1/2 bg-text-secondary" />
              <Skeleton className="h-4 w-1/4 bg-text-secondary" />
            </div>
            <div>
              <Skeleton className="h-80 w-full bg-text-secondary" />
            </div>
          </div>
          <div className="flex flex-col space-y-3 border-2 p-2">
            <div className="flex items-center gap-5">
              <Skeleton className="h-8 w-8 rounded-full bg-text-secondary" />
              <Skeleton className="h-4 w-40 bg-text-secondary" />
            </div>
            <div className="flex flex-col items-center gap-3">
              <Skeleton className="h-4 w-full bg-text-secondary" />
              <Skeleton className="h-4 w-full bg-text-secondary" />
              <Skeleton className="h-4 w-full bg-text-secondary" />
              <Skeleton className="h-4 w-full bg-text-secondary" />
            </div>
            <div>
              <Skeleton className="h-80 w-full bg-text-secondary" />
            </div>
          </div>
        </>
      )}

      {feeds.map((feed) => (
        <div key={feed.id}>
          <Post feed={feed} />
        </div>
      ))}
    </div>
  );
};

export default Home;
