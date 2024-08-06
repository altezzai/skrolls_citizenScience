import React from "react";

export const ProfilePhoto = ({ img, size }) => {
  return (
    <img
      src={img}
      className=" rounded-full select-none"
      style={{ height: size, width: size }}
      draggable="false"
    />
  );
};
