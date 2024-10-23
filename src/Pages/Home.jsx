import { useState, useEffect, useRef, useCallback } from 'react';
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
        const response = await apiClient.get(`users/feeds`, {
          params: {
            page, // Current page for pagination
            limit, // Number of items per page
          },
        });
        setFeeds((prevFeeds) => [...prevFeeds, ...response.data.feeds]);
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
    } catch (error) {
      console.error('Error updating view counts:', error);
    }
  };

  const handleFeedVisibility = (feedId) => {
    if (!viewedFeeds.includes(feedId)) {
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

  const handleNextPage = useCallback(() => {
    setPage((prevPage) => prevPage + 1);
  }, []);

  return (
    <div className="home">
      <NewPost />

      {loading && (
        <>
          {/* Skeleton loaders here */}
        </>
      )}

      {feeds.map((feed, index) => (
        <VisiblePost
          key={`${feed.id}-${index}`}
          feed={feed}
          onView={handleFeedVisibility}
          isLast={index === feeds.length - 1} 
          onLoadMore={handleNextPage} // Function to load the next page
        />
      ))}
    </div>
  );
};

const VisiblePost = ({ feed, onView, isLast, onLoadMore }) => {
  const postRef = useRef(null); // Create a ref for each post
  const isVisible = useIsVisible(postRef); // Check visibility using the hook

  useEffect(() => {
    if (isVisible) {
      onView(feed.id); // Call onView when the post is visible

      if (isLast) {
        onLoadMore(); // Load the next page if this is the last post
      }
    }
  }, [isVisible, feed.id, isLast,  onView]);

  return (
    <div ref={postRef}>
      <Post key={feed.id} feed={feed} isVisible={isVisible} />
    </div>
  );
};

export default Home;
