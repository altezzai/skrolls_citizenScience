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
      className="flex items-center justify-center w-full h-full gap-2 rounded-xl bg-primary text-bg-secondary text-lg font-semibold cursor-pointer hover:bg-red-500 select-none px-3 active:bg-red-900"
      style={{ height: height, borderRadius: radius }}
    >
      <img src={image} style={{ height: iconHeight }} draggable="false" 
      className='w-6 '/>
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
