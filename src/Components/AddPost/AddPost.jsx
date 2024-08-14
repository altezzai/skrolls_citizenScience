import './AddPost.css';
import PostButton from '../PostButton/PostButton';
import photo from '../../assets/profile.png';
import imageico from '../../assets/img.svg';
import video from '../../assets/video.svg';
import doc from '../../assets/document.svg';
import uploadfile from '../../assets/upload_doc.svg';

import { ProfilePhoto } from '../Profilephoto/ProfilePhoto';
import { useState } from 'react';

const AddPost = ({ show, handleClose }) => {
  const [imagePreviews, setImagePreviews] = useState([]);
  const [videoPreviews, setVideoPreviews] = useState([]);
  const [documentPreviews, setDocumentPreviews] = useState([]);
  const [postContent, setPostContent] = useState('');

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImagePreviews = files.map((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      return new Promise((resolve) => {
        reader.onloadend = () => {
          resolve(reader.result);
        };
      });
    });

    Promise.all(newImagePreviews).then((previews) => {
      setImagePreviews((prevPreviews) => [...prevPreviews, ...previews]);
    });
  };

  const handleVideoChange = (e) => {
    const files = Array.from(e.target.files);
    const newVideoPreviews = files.map((file) => URL.createObjectURL(file));
    setVideoPreviews((prevPreviews) => [...prevPreviews, ...newVideoPreviews]);
  };

  const handleDocumentChange = (e) => {
    const files = Array.from(e.target.files);
    const newDocumentPreviews = files.map((file) => file.name);
    setDocumentPreviews((prevPreviews) => [
      ...prevPreviews,
      ...newDocumentPreviews,
    ]);
  };

  const removeImagePreview = (index) => {
    setImagePreviews((prevPreviews) =>
      prevPreviews.filter((_, i) => i !== index)
    );
  };

  const removeVideoPreview = (index) => {
    setVideoPreviews((prevPreviews) =>
      prevPreviews.filter((_, i) => i !== index)
    );
  };

  const removeDocumentPreview = (index) => {
    setDocumentPreviews((prevPreviews) =>
      prevPreviews.filter((_, i) => i !== index)
    );
  };

  const resetForm = () => {
    setImagePreviews([]);
    setVideoPreviews([]);
    setDocumentPreviews([]);
    setPostContent('');
  };

  const handleModalClose = () => {
    resetForm();
    handleClose();
  };

  const isFileUploaded =
    imagePreviews.length > 0 ||
    videoPreviews.length > 0 ||
    documentPreviews.length > 0;

  return (
    <div className={`addpost ${show ? 'show' : ''}`} onClick={handleModalClose}>
      <div
        className="addpost-content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <span className="close" onClick={handleModalClose}>
          &times;
        </span>
        <div className="postman-details gap-3">
          <ProfilePhoto img={photo} size={'2.5rem'} />
          <div className="my-name">Manu P</div>
        </div>

        <textarea
          name=""
          id=""
          placeholder="What is new, Rafsal?"
          style={{ height: isFileUploaded ? '150px' : '250px' }}
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        ></textarea>
        <div
          className="add-media"
          style={{ display: isFileUploaded ? 'none' : 'flex' }}
        >
          <label htmlFor="imgfile" className="icon-post">
            <img src={imageico} alt="" />
            <span>Image</span>
          </label>
          <input
            type="file"
            name="myImage"
            id="imgfile"
            accept="image/png, image/gif, image/jpeg"
            multiple
            onChange={handleImageChange}
          />
          <label htmlFor="videofile" className="icon-post">
            <img src={video} alt="" />
            <span>Video</span>
          </label>
          <input
            type="file"
            id="videofile"
            accept="video/mp4,video/x-m4v,video/*"
            multiple
            onChange={handleVideoChange}
          />
          <label htmlFor="documentfile" className="icon-post">
            <img src={doc} alt="" />
            <span>Document</span>
          </label>
          <input
            type="file"
            id="documentfile"
            multiple
            onChange={handleDocumentChange}
          />
        </div>

        <div className="preview-container">
          {imagePreviews.map((preview, index) => (
            <div className="thumbnail-container" key={index}>
              <img
                src={preview}
                alt={`Image Preview ${index}`}
                className="thumbnail"
              />
              <span
                className="close-thumbnail"
                onClick={() => removeImagePreview(index)}
              >
                &times;
              </span>
            </div>
          ))}
          {videoPreviews.map((preview, index) => (
            <div className="thumbnail-container" key={index}>
              <video src={preview} controls className="thumbnail" />
              <span
                className="close-thumbnail"
                onClick={() => removeVideoPreview(index)}
              >
                &times;
              </span>
            </div>
          ))}
          {documentPreviews.map((preview, index) => (
            <div className="thumbnail-container document-thumbnail" key={index}>
              {preview}
              <span
                className="close-thumbnail"
                onClick={() => removeDocumentPreview(index)}
              >
                &times;
              </span>
            </div>
          ))}
          <label
            htmlFor="uploadfile"
            className="upload"
            style={{ display: isFileUploaded ? 'flex' : 'none' }}
          >
            <img src={uploadfile} alt="Add more files" />
            <input
              type="file"
              id="uploadfile"
              multiple
              style={{ display: 'none' }}
              onChange={(e) => {
                const files = Array.from(e.target.files);
                files.forEach((file) => {
                  if (file.type.startsWith('image/')) {
                    handleImageChange(e);
                  } else if (file.type.startsWith('video/')) {
                    handleVideoChange(e);
                  } else {
                    handleDocumentChange(e);
                  }
                });
              }}
            />
          </label>
        </div>

        <PostButton text={'Post it!'} />
      </div>
    </div>
  );
};

export default AddPost;
