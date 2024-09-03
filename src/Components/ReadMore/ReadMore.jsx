import { useState } from 'react';

const ReadMore = ({ children, sliceLength }) => {
  const text = children || '';
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p className="text">
      {isReadMore ? text.slice(0, sliceLength) : text}
      {text.length > sliceLength && (
        <span onClick={toggleReadMore} className="cursor-pointer text-primary">
          {isReadMore ? ' more...' : ' less'}
        </span>
      )}
    </p>
  );
};

export default ReadMore;
