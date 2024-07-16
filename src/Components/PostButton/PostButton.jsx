import React from "react";
import "./PostButton.css";
import pencil from "../../assets/pencil.svg";

const PostButton = ({
  image = pencil,
  text,
  radius = "12px",
  height = "48px",
  flag = false,
}) => {
  return (
    <div
      className="postbutton"
      style={{ height: height, borderRadius: radius }}
    >
      <img src={image} style={{ height: "15px" }} />
      {flag ? (
        <span
          style={{
            borderLeft: "1px solid #ffffff",
            paddingLeft: "8px",
            marginLeft: "2px",
            lineHeight: "13px",
          }}
        >
          {text}
        </span>
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
};

export default PostButton;
