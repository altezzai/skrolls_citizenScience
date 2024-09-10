import { useState, useEffect, useRef } from 'react';
import NewPost from '../Components/NewPost/NewPost';
import Post from '../Components/Post/Post';
import { apiClient } from '@/lib/api_client';
import { Skeleton } from '@/Components/ui/skeleton';
import useIsVisible from '@/hooks/useIsVisible';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [feeds, setFeeds] = useState([]);
  const [viewList, setViewList] = useState([]);
  const [viewedFeeds, setViewedFeeds] = useState([]);
  const [page, setPage] = useState(1); // Pagination state
  const limit = 10; // Limit of posts per page
  const timer = useRef(null);

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

  const updateViewCounts = async (viewList) => {
    try {
      const response = await apiClient.post('users/feeds/updateCounts', {
        viewList,
        shareList: [], // You can pass shareList when needed
      });
      console.log('View counts updated:', response.data);
    } catch (error) {
      console.error('Error updating view counts:', error);
    }
  };

  // Function to handle when a feed becomes visible
  const handleFeedVisibility = (feedId) => {
    if (!viewedFeeds.includes(feedId)) {
      // Check if feedId is already viewed
      setViewList((prevList) => [...prevList, feedId]);
      setViewedFeeds((prevViewed) => [...prevViewed, feedId]); // Mark as viewed
    }
  };

  useEffect(() => {
    if (viewList.length > 0) {
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        updateViewCounts(viewList);
        setViewList([]); // Clear the viewList after sending the data
      }, 5000); // Wait for 5 seconds before sending data
    }

    return () => clearTimeout(timer.current);
  }, [viewList]);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

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
              <Skeleton className="h-4 w-full bg-text-secondary" />
              <Skeleton className="h-4 w-full bg-text-secondary" />
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
          <VisiblePost
            key={feed.id}
            feed={feed}
            onView={handleFeedVisibility}
          />
        </div>
      ))}
    </div>
  );
};

const VisiblePost = ({ feed, onView }) => {
  const postRef = useRef(null); // Create a ref for each post
  const isVisible = useIsVisible(postRef); // Check visibility using the hook

  useEffect(() => {
    if (isVisible) {
      console.log(`Post ${feed.id} is visible`);
      onView(feed.id); // Call onView when the post is visible
    }
  }, [isVisible, feed.id, onView]);

  return (
    <div ref={postRef}>
      <Post feed={feed} isVisible={isVisible} />
    </div>
  );
};

export default Home;
