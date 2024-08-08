import React, { useState } from "react";

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
    <div className="flex items-center w-full my-4 rounded-2xl py-3 px-4 gap-5 bg-bg-secondary">

      <ProfilePhoto img={photo} size={"3rem"} />

      <div className="flex items-center justify-between w-full text-xl text-text-muted cursor-pointer" onClick={handlePostClick}>
        What is new. Rafsal?
        <div className="px-2">
          <PostButton text={"Add Post!"} />
        </div>
      </div>

      <AddPost show={showAddPost} handleClose={handleCloseClick}></AddPost>
    </div>
  );
};

export default NewPost;
