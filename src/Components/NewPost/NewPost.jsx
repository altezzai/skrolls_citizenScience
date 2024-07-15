import React from "react";
import "./NewPost.css";
import photo from "../../assets/profile.png";
import PostButton from "../PostButton/PostButton";

const NewPost = () => {
  return (
    <div className="newpost">
      <div className="post-profile">
        <img src={photo} alt="" />
      </div>

      <div className="input-sec">
        <input type="text" placeholder="What is new. Rafsal?" name="" id="" />
      </div>

      <div className="postbtn-container">
        <PostButton />
      </div>
    </div>
  );
};

export default NewPost;
