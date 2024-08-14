import React from 'react';
import Post from '../Components/Post/Post';
import { AddMyComment } from '../Components/AddMyComment/AddMyComment';
import { Comments } from '../Components/Comments/Comments';

export const PostPage = () => {
  return (
    <div className="mt-5">
      <Post />
      <AddMyComment />
      <Comments />
      <Comments />
      <Comments />
      <Comments />
    </div>
  );
};
