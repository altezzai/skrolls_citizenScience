import React from "react";
import NewPost from "../Components/NewPost/NewPost";
import Post from "../Components/Post/Post";

const Home = () => {
  return (
    <div className="home">
      <NewPost />
      <Post id={2} />
      <Post id={3} />
      <Post id={4} />
      <Post id={5} />
    </div>
  );
};

export default Home;
