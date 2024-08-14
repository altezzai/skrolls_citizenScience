export const ProfilePhoto = ({ img, size }) => {
  return (
    <img
      src={img}
      className="select-none rounded-full"
      style={{ height: size, width: size }}
      draggable="false"
    />
  );
};
