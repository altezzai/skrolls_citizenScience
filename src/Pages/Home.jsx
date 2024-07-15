import React from "react";
import NewPost from "../Components/NewPost/NewPost";
import Post from "../Components/Post/Post";
import './CSS/Home.css';

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
