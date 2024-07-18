import React from "react";
import "./ProfilePhoto.css";

export const ProfilePhoto = ({ img, size }) => {
  return (
    <img
      src={img}
      className="photocircle"
      style={{ height: size, width: size }}
    />
  );
};
