import PostButton from '../PostButton/PostButton';
import photo from '../../assets/profile.png';
import doc from '../../assets/document.svg';
import uploadfile from '../../assets/upload_doc.svg';
import url_icon from '../../assets/link_grey.svg';

import { ProfilePhoto } from '../Profilephoto/ProfilePhoto';
import { useEffect, useState, useRef } from 'react';
import { apiClient } from '@/lib/api_client';

const AddPost = ({ show, handleClose }) => {
  const [filePreviews, setFilePreviews] = useState([]);
  const [files, setFiles] = useState([]); // store actual file objects
  const isFileUploaded = filePreviews.length > 0;
  const [postContent, setPostContent] = useState('');
  const [link, setLink] = useState('');
  const [users, setUsers] = useState([]); // List of users for mentions
  const [mentionSearchTerm, setMentionSearchTerm] = useState('');
  const [showMentionList, setShowMentionList] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    // Fetch users for mentions
    const fetchUsers = async () => {
      try {
        const response = await apiClient.get('users/search/user', {
          params: {
            userId: 1,
            search: mentionSearchTerm,
          },
        });
        setUsers(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };
    fetchUsers();
  }, []);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const newFilePreviews = selectedFiles.map((file) => {
      if (file.type.startsWith('image/') || file.type.startsWith('video/')) {
        return URL.createObjectURL(file);
      } else {
        return file.name;
      }
    });

    setFilePreviews((prevPreviews) => [...prevPreviews, ...newFilePreviews]);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]); // add files
  };

  const removeFilePreview = (index) => {
    setFilePreviews((prevPreviews) =>
      prevPreviews.filter((_, i) => i !== index)
    );
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index)); // remove corresponding file
  };

  const resetForm = () => {
    setFilePreviews([]);
    setFiles([]); // reset file array
    setPostContent('');
    setLink('');
  };

  const handleModalClose = () => {
    resetForm();
    handleClose();
  };

  const handleTextareaChange = (e) => {
    const newContent = e.target.value;
    setPostContent(newContent);
  
    const lastChar = newContent[newContent.length - 1];
  
    // Check if '@' is typed at the start of a new line or preceded by a whitespace
    const lines = newContent.split('\n');
    const currentLine = lines[lines.length - 1];
  
    if (lastChar === '@' && (currentLine === '@' || currentLine.endsWith(' @'))) {
      setShowMentionList(true);
      setMentionSearchTerm('');
    } else if (showMentionList) {
      const matches = newContent.match(/(?:\s|^)@(\w*)$/); // Ensure '@' is preceded by a whitespace or is at the beginning
  
      if (matches) {
        const query = matches[1];
        setMentionSearchTerm(query);
  
        // If no matching user is found, close the mention list
        const mentionFound = users.some(user => user.username.startsWith(query));
        if (!mentionFound) {
          setShowMentionList(false);
        }
      } else {
        setShowMentionList(false);
      }
    }
  };
  
  
  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(mentionSearchTerm.toLowerCase())
  );

  const handleMentionSelect = (user) => {
    const textarea = textareaRef.current;
    const cursorPosition = textarea.selectionStart;
    const textBeforeCursor = postContent.slice(0, cursorPosition);
    const textAfterCursor = postContent.slice(cursorPosition);
    const lastAtSymbolIndex = textBeforeCursor.lastIndexOf('@');
    const newContent =
      textBeforeCursor.slice(0, lastAtSymbolIndex) +
      `@${user.username} ` +
      textAfterCursor;
    setPostContent(newContent);
    setShowMentionList(false);
    textarea.focus();
    const newCursorPosition = lastAtSymbolIndex + user.username.length + 2;
    textarea.setSelectionRange(newCursorPosition, newCursorPosition);
  };

  const submit = async (e) => {
    e.preventDefault();

    // Create form data
    const formData = new FormData();
    formData.append('description', postContent);
    formData.append('link', e.target.link.value);
    formData.append('userId', '1');

    // Append files
    files.forEach((file, index) => {
      formData.append(`files`, file);
    });

    // Extract mentions and hashtags from the post content
    const mentionRegex = /@(\w+)/g;
    const hashtagRegex = /#(\w+)/g;

    const mentions = [...postContent.matchAll(mentionRegex)].map(
      (match) => match[1]
    );
    const hashtags = [...postContent.matchAll(hashtagRegex)].map(
      (match) => match[1]
    );

    formData.append('mentionIds', JSON.stringify(mentions));
    formData.append('hashTags', JSON.stringify(hashtags));

    try {
      const response = await apiClient.post('users/feeds', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Post successful:', response.data);
      // Handle success
      resetForm();
      handleClose();
    } catch (error) {
      console.error('Post failed:', error.message);
      alert('There was an error posting your content.');
    }
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 top-0 z-10 h-full w-full overflow-auto bg-bg-transparent-muted backdrop-blur-sm ${show ? 'block' : 'hidden'}`}
      onClick={handleModalClose}
    >
      <form
        onSubmit={submit}
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
          name="description"
          id="description"
          placeholder="What is new, Rafsal?"
          className="w-full resize-none rounded-2xl bg-textarea p-4 text-sm outline-none transition-all duration-300 ease-in-out placeholder:select-none placeholder:text-text-muted"
          style={{ height: isFileUploaded ? '100px' : '170px' }}
          value={postContent}
          onChange={handleTextareaChange}
          ref={textareaRef}
          required
        ></textarea>
        {showMentionList && (
          <div className="absolute left-1/2 top-[20%] z-10 mt-1 h-60 w-40 -translate-x-1/2 rounded-md border-2 bg-bg-secondary">
            {filteredUsers.map((user) => (
              <div
                key={user.id}
                className="flex cursor-pointer px-4 py-2 text-sm hover:bg-gray-100"
                onClick={() => handleMentionSelect(user)}
              >
                {/* <img
                  src={user.profilePhoto}
                  className="w-4"
                  alt="profile photo"
                /> */}
                {user.username} 
              </div>
            ))}
          </div>
        )}

        <div className="flex w-full items-center gap-2 rounded-2xl bg-textarea p-4">
          <img
            src={url_icon}
            alt="url link"
            draggable="false"
            className="w-4"
          />
          <input
            type="url"
            id="link"
            name="link"
            placeholder="url (optional)"
            className="w-full bg-inherit text-sm outline-none placeholder:select-none placeholder:text-text-muted"
            value={link}
            onChange={(e) => setLink(e.target.value)}
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
          <div className="flex select-none flex-wrap gap-4 py-3">
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
              className={`cursor-pointer select-none rounded-xl bg-textarea px-14 py-5 ${isFileUploaded ? 'flex' : 'hidden'}`}
            >
              <img
                src={uploadfile}
                className="w-8"
                alt="Add more files"
                draggable="false"
              />
              <input
                type="file"
                id="uploadfile"
                multiple
                style={{ display: 'none' }}
                onChange={handleFileChange}
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
