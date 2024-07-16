import React from "react";
import "./PostButton.css";
import pencil from "../../assets/pencil.svg";

const PostButton = ({children}) => {
  return (
    <div className="postbutton">
      <img src={pencil} alt="" />
     {children}
    </div>
  );
};

export default PostButton;
