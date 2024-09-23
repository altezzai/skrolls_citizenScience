import { apiClient } from '@/lib/api_client';
import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

export const MyPost = ({ userId }) => {
  const [MyPost, setMyPost] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchmypost = async () => {
      setLoading(true);
      try {
        const res = await apiClient.get('users/feeds', {
          params: { userId },
        });
        setMyPost(res.data);
      } catch (error) {
        console.error('failed to fetch feeds:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchmypost();
  }, []);

  return (
    <>
      {loading && <div>loading........</div>}
      {MyPost && (
        <div>
          {MyPost.map((post) => (
            <div key={post.id}>
              <Post feed={post} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};
