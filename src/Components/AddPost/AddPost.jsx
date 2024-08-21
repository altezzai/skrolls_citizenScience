import PostButton from '../PostButton/PostButton';
import photo from '../../assets/profile.png';
import doc from '../../assets/document.svg';
import uploadfile from '../../assets/upload_doc.svg';
import url_icon from '../../assets/link_grey.svg';

import { ProfilePhoto } from '../Profilephoto/ProfilePhoto';
import { useState } from 'react';

const AddPost = ({ show, handleClose }) => {
  const [filePreviews, setFilePreviews] = useState([]);
  const isFileUploaded = filePreviews.length > 0;
  const [postContent, setPostContent] = useState('');

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const newFilePreviews = files.map((file) => {
      if (file.type.startsWith('image/')) {
        return URL.createObjectURL(file);
      } else if (file.type.startsWith('video/')) {
        return URL.createObjectURL(file);
      } else {
        return file.name;
      }
    });
    setFilePreviews((prevPreviews) => [...prevPreviews, ...newFilePreviews]);
  };

  const removeFilePreview = (index) => {
    setFilePreviews((prevPreviews) =>
      prevPreviews.filter((_, i) => i !== index)
    );
  };

  const resetForm = () => {
    setFilePreviews([]);
    setPostContent('');
  };

  const handleModalClose = () => {
    resetForm();
    handleClose();
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 top-0 z-10 h-full w-full overflow-auto bg-bg-transparent-muted backdrop-blur-sm ${show ? 'block' : 'hidden'}`}
      onClick={handleModalClose}
    >
      <form
        className="relative left-1/2 top-[15%] w-1/2 -translate-x-1/2 rounded-2xl border-2 border-solid border-border-primary bg-bg-secondary p-5"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <span
          className="float-right cursor-pointer pr-2 text-4xl font-bold text-text-secondary transition-all duration-300 ease-in-out hover:scale-110 hover:text-text-primary"
          onClick={handleModalClose}
        >
          &times;
        </span>
        <div className="mb-3 flex items-center gap-3">
          <ProfilePhoto img={photo} size={'2.5rem'} />
          <div className="text-lg font-medium text-text-hard">Manu P</div>
        </div>

        <textarea
          name=""
          id=""
          placeholder="What is new, Rafsal?"
          className="w-full resize-none rounded-2xl bg-textarea p-4 text-sm outline-none transition-all duration-300 ease-in-out placeholder:text-text-muted placeholder:select-none"
          style={{ height: isFileUploaded ? '100px' : '170px' }}
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          required
        ></textarea>

        <div className="w-full rounded-2xl bg-textarea p-4 flex items-center gap-2">
          <img src={url_icon} alt="url link" draggable="false" className='w-4'/>
          <input
            type="url"
            placeholder="url (optional)"
            className="w-full bg-inherit text-sm outline-none placeholder:text-text-muted placeholder:select-none"
          />
        </div>

        <div className={`py-3 ${isFileUploaded ? 'hidden' : 'flex'}`}>
          <label
            htmlFor="documentfile"
            className="flex cursor-pointer items-center gap-2 rounded-full border-[1px] border-border-muted bg-bg-primary px-4 py-2 text-sm font-semibold text-text-secondary"
          >
            <img src={doc} alt="document" className="w-4" draggable="false" />
            <span>File</span>
          </label>
          <input
            type="file"
            className="hidden"
            id="documentfile"
            multiple
            onChange={handleFileChange}
          />
        </div>

        {filePreviews.length > 0 && (
          <div className="flex flex-wrap gap-4 py-3 select-none">
            {filePreviews.map((preview, index) => (
              <div key={index} className="relative">
                {preview.startsWith('blob:') ? (
                  preview.includes('video') ? (
                    <video
                      src={preview}
                      controls
                      className="h-36 w-36 rounded-lg object-cover"
                    />
                  ) : (
                    <img
                      src={preview}
                      alt={`Preview ${index}`}
                      className="h-36 w-36 rounded-lg object-cover"
                    />
                  )
                ) : (
                  <div className="flex h-36 w-36 items-center justify-center break-all rounded-lg bg-gray-200 p-2">
                    {preview}
                  </div>
                )}
                <span
                  className="absolute right-1 top-1 flex h-5 w-5 cursor-pointer justify-center rounded-full bg-gray-700 align-middle text-lg leading-none text-white hover:bg-gray-900"
                  onClick={() => removeFilePreview(index)}
                >
                  &times;
                </span>
              </div>
            ))}
            <label
              htmlFor="uploadfile"
              className={`cursor-pointer rounded-xl bg-textarea px-14 py-5 select-none ${isFileUploaded ? 'flex' : 'hidden'}`}
            >
              <img src={uploadfile} className="w-8" alt="Add more files" draggable="false" />
              <input
                type="file"
                id="uploadfile"
                multiple
                style={{ display: 'none' }}
                onChange={(e) => {
                  const files = Array.from(e.target.files);
                  files.forEach((file) => {
                    handleFileChange(e);
                  });
                }}
              />
            </label>
          </div>
        )}

        <PostButton text={'Post it!'} />
      </form>
    </div>
  );
};

export default AddPost;
