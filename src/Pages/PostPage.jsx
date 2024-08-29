import Post from '../Components/Post/Post';
import { AddMyComment } from '../Components/AddMyComment/AddMyComment';
import { Comments } from '../Components/Comments/Comments';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { apiClient } from '@/lib/api_client';

export const PostPage = () => {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState([]);
  const [commentData, setCommentData] = useState([]);
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
      } catch (error) {
        console.error('failed to fetch feeds:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchpost();
  }, []);

  useEffect(() => {
    const fetchcomments = async () => {
      try {
        const res = await apiClient.get(`users/feeds/${postId}/comments`, {
          params: {
            userId: 1,
          },
        });
        setCommentData(res.data);
      } catch (error) {
        console.error('failed to fetch comments:', error);
      }
    };
    fetchcomments();
  }, []);

  return (
    <div className="mt-5">
      <Post feed={post} />
      <AddMyComment feedId={post.id} />

      {commentData &&
        commentData.length > 0 &&
        commentData.map((comments) => (
          <div key={comments.id}>
            <Comments comments={comments} />
          </div>
        ))}
    </div>
  );
};
