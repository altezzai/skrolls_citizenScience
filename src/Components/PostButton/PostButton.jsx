import './PostButton.css';
import pencil from '../../assets/pencil.svg';

const PostButton = ({
  image = pencil,
  text,
  radius = '12px',
  height = '48px',
  iconHeight = '50px',
  flag = false,
  textsize = '15px',
}) => {
  return (
    <div
      className="postbutton"
      style={{ height: height, borderRadius: radius }}
    >
      <img src={image} style={{ height: iconHeight }} />
      {flag ? (
        <span
          style={{
            borderLeft: '1px solid var(--color-bg-secondary)',
            paddingLeft: '8px',
            marginLeft: '2px',
            lineHeight: '13px',
            fontSize: textsize,
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
