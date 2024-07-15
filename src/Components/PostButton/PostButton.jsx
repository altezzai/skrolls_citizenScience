import React from "react";
import "./PostButton.css";
import pencil from "../../assets/pencil.svg";

const PostButton = () => {
  return (
    <div className="postbutton">
      <img src={pencil} alt="" />
      Post it!
    </div>
  );
};

export default PostButton;
