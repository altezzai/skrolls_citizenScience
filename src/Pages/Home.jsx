import React from "react";
import NewPost from "../Components/NewPost/NewPost";
import Post from "../Components/Post/Post";

const Home = () => {
  return (
    <div className="Home">
      <NewPost />
      <Post />
    </div>
  );
};

export default Home;
