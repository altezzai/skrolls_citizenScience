import { useState } from 'react';

import photo from '../../assets/profile.png';
import PostButton from '../PostButton/PostButton';
import AddPost from '../AddPost/AddPost';
import { ProfilePhoto } from '../Profilephoto/ProfilePhoto';

const NewPost = () => {
  const [showAddPost, setShowAddPost] = useState(false);

  const handlePostClick = () => {
    setShowAddPost(true);
  };

  const handleCloseClick = () => {
    setShowAddPost(false);
  };

  return (
    <div className="my-3 flex w-full items-center gap-5 rounded-2xl bg-bg-secondary p-2">
      <ProfilePhoto img={photo} size={'2.5rem'} />

      <div
        className="flex w-full cursor-pointer items-center justify-between text-base text-text-muted"
        onClick={handlePostClick}
      >
        What is new. Rafsal?
        <div className="px-2">
          <PostButton text={'Add Post!'} />
        </div>
      </div>

      <AddPost show={showAddPost} handleClose={handleCloseClick}></AddPost>
    </div>
  );
};

export default NewPost;
