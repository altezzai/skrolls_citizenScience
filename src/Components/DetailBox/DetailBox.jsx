import './DetailBox.css';

const DetailBox = ({ children, heading }) => {
  return (
    <div className="detailBox">
      <div className="box-heading">{heading}</div>
      {children}
    </div>
  );
};

export default DetailBox;
