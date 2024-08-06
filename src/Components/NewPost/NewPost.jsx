import React, { useState } from "react";
import "./NewPost.css";
import photo from "../../assets/profile.png";
import PostButton from "../PostButton/PostButton";
import AddPost from "../AddPost/AddPost";
import { ProfilePhoto } from "../Profilephoto/ProfilePhoto";

const NewPost = () => {
  const [showAddPost, setShowAddPost] = useState(false);

  const handlePostClick = () => {
    setShowAddPost(true);
  };

  const handleCloseClick = () => {
    setShowAddPost(false);
  };

  return (
    <div className="newpost">
      {/* <div className="post-profile">
        <img src={photo} alt="" />
      </div> */}
      <ProfilePhoto img={photo} size={"3rem"} />

      <div className="input-sec" onClick={handlePostClick}>
        What is new. Rafsal?
        <div className="postbtn-container">
          <PostButton text={"Add Post!"} />
        </div>
      </div>

      <AddPost show={showAddPost} handleClose={handleCloseClick}></AddPost>
    </div>
  );
};

export default NewPost;
