import React from "react";
import "./AddPost.css";
import PostButton from "../PostButton/PostButton";
import photo from "../../assets/profile.png";
import imageico from "../../assets/img.svg";
import video from "../../assets/video.svg";
import doc from "../../assets/document.svg";
import linkico from "../../assets/link.svg";

const AddPost = ({ show, handleClose }) => {
  return (
    <div className={`addpost ${show ? "show" : ""}`} onClick={handleClose}>
      <div
        className="addpost-content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <div className="postman-details">
          <div className="post-profile">
            <img src={photo} alt="" />
          </div>
          <div className="my-name">Manu P</div>
        </div>

        <textarea name="" id="" placeholder="What is new. Rafsal?"></textarea>
        <div className="add-media">
          <label htmlFor="imgfile" className="icon-post">
            <img src={imageico} alt="" />
            <span>Image</span>
          </label>
          <input
            type="file"
            name="myImage"
            id="imgfile"
            accept="image/png, image/gif, image/jpeg"
          />
          <label htmlFor="videofile" className="icon-post">
            <img src={video} alt="" />
            <span>Video</span>
          </label>
          <input
            type="file"
            id="videofile"
            accept="video/mp4,video/x-m4v,video/*"
          />
          <label htmlFor="document" className="icon-post">
            <img src={doc} alt="" />
            <span>Document</span>
          </label>
          <input type="file" id="document" />
          <label htmlFor="weblink" className="icon-post">
            <img src={linkico} alt="" />
            <span>Link</span>
          </label>
          <input type="text" id="weblink" />
        </div>
        <PostButton>Post it!</PostButton>
      </div>
    </div>
  );
};

export default AddPost;
