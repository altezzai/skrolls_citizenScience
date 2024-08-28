import Post from '../Components/Post/Post';
import { AddMyComment } from '../Components/AddMyComment/AddMyComment';
import { Comments } from '../Components/Comments/Comments';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { apiClient } from '@/lib/api_client';

export const PostPage = () => {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState([]);
  const { postId } = useParams();

  useEffect(() => {
    const fetchpost = async () => {
      setLoading(true);
      try {
        const res = await apiClient.get(`users/feeds/${postId}`, {
          params: {
            userId: 1,
          },
        });
        setPost(res.data);
        console.log(res.data);
      } catch (error) {
        console.error('failed to fetch feeds:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchpost();
  }, []);

  return (
    <div className="mt-5">
      
      <Post feed={post}/>
      <AddMyComment feedId={post.id}/>
      <Comments />
      <Comments />
      <Comments />
      <Comments />
    </div>
  );
};
