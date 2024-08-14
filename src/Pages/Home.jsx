import React from 'react';
import NewPost from '../Components/NewPost/NewPost';
import Post from '../Components/Post/Post';

const Home = () => {
  return (
    <div className="home">
      <NewPost />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Home;
