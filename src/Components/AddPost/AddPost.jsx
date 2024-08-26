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
  const [hashTagList, setHashTagList] = useState([]);
  const [mentionSearchTerm, setMentionSearchTerm] = useState('');
  const [showMentionList, setShowMentionList] = useState(false);
  const [selectedUserIndex, setSelectedUserIndex] = useState(0);
  const [showTagList, setShowTagList] = useState(false);
  const [selectedTagIndex, setSelectedTagIndex] = useState(0);
  const [filteredTags, setFilteredTags] = useState([]);
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
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };
    fetchUsers();
  }, []);

  //fetch hashtags
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const res = await apiClient.get('users/search/hashtag', {
          params: {
            userId: 1,
          },
        });
        setHashTagList(res.data);
      } catch (error) {
        console.error('failed to fetch users:', error);
      }
    };
    fetchTags();
  }, []);

  // Handle keydown events for arrow keys and Enter key
  const handleKeyDown = (e) => {
    if (showMentionList && filteredUsers.length > 0) {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedUserIndex(
            (prevIndex) => (prevIndex + 1) % filteredUsers.length
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedUserIndex(
            (prevIndex) =>
              (prevIndex - 1 + filteredUsers.length) % filteredUsers.length
          );
          break;
        case 'Enter':
          e.preventDefault();
          handleMentionSelect(filteredUsers[selectedUserIndex]);
          break;
        case 'Escape':
          e.preventDefault();
          setShowMentionList(false);
          break;
        default:
          break;
      }
    } else if (showTagList && filteredTags.length > 0) {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedTagIndex(
            (prevIndex) => (prevIndex + 1) % filteredTags.length
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedTagIndex(
            (prevIndex) =>
              (prevIndex - 1 + filteredTags.length) % filteredTags.length
          );
          break;
        case 'Enter':
          e.preventDefault();
          handleTagSelect(filteredTags[selectedTagIndex]);
          break;
        case 'Escape':
          e.preventDefault();
          setShowTagList(false);
          break;
        default:
          break;
      }
    }
  };

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
    // setCursorPosition(e.target.selectionStart);

    // Detect if we're typing a mention (@) or a tag (#)
    const currentWordMatch = newContent
      .slice(0, e.target.selectionStart)
      .match(/\S+$/); // Get the current word
    const currentWord = currentWordMatch ? currentWordMatch[0] : '';

    if (currentWord.startsWith('@')) {
      const mentionSearch = currentWord.slice(1); // Extract search term after "@"
      const filteredUsersList = users.filter((user) =>
        user.username.toLowerCase().includes(mentionSearch.toLowerCase())
      );

      if (filteredUsersList.length > 0) {
        setShowMentionList(true);
        setMentionSearchTerm(mentionSearch);
      } else {
        setShowMentionList(false); // Hide mention list if no matches
      }

      setShowTagList(false); // Hide tag list when typing @
    } else if (currentWord.startsWith('#')) {
      const tagSearch = currentWord.slice(1); // Extract search term after "#"
      const filteredTagsList = hashTagList.filter((tag) =>
        tag.hashtag.toLowerCase().includes(tagSearch.toLowerCase())
      );

      if (filteredTagsList.length > 0) {
        setShowTagList(true);
        setFilteredTags(filteredTagsList);
      } else {
        setShowTagList(false); // Hide tag list if no matches
      }

      setShowMentionList(false); // Hide mention list when typing #
    } else {
      setShowMentionList(false);
      setShowTagList(false);
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
      `@${user.username}` +
      textAfterCursor;
    setPostContent(newContent);

    // Store the user id in a data attribute
    textarea.dataset.lastMentionId = user.id;

    setShowMentionList(false);
    textarea.focus();
    const newCursorPosition = lastAtSymbolIndex + user.username.length + 1;
    textarea.setSelectionRange(newCursorPosition, newCursorPosition);
  };

  const handleTagSelect = (tag) => {
    const textarea = textareaRef.current;
    const cursorPosition = textarea.selectionStart;
    const textBeforeCursor = postContent.slice(0, cursorPosition);
    const textAfterCursor = postContent.slice(cursorPosition);
    const lastHashSymbolIndex = textBeforeCursor.lastIndexOf('#');
    const newContent =
      textBeforeCursor.slice(0, lastHashSymbolIndex) +
      `#${tag.hashtag} ` +
      textAfterCursor;

    setPostContent(newContent);
    setShowTagList(false);

    const newCursorPosition = lastHashSymbolIndex + tag.hashtag.length + 2;
    // setCursorPosition(newCursorPosition);

    // Use setTimeout to ensure the DOM has updated
    setTimeout(() => {
      textareaRef.current.focus();
      textareaRef.current.setSelectionRange(
        newCursorPosition,
        newCursorPosition
      );
    }, 0);
  };

  const submit = async (e) => {
    e.preventDefault();

    // Create form data
    const formData = new FormData();
    formData.append('description', postContent);
    formData.append('link', link);
    formData.append('userId', '1');

    // Append files
    files.forEach((file, index) => {
      formData.append(`files`, file);
    });

    // Extract mentions and hashtags from the post content
    const mentionRegex = /@(\w+)/g;
    const hashtagRegex = /#(\w+)/g;

    const mentions = [];
    const mentionMatches = postContent.matchAll(mentionRegex);
    for (const match of mentionMatches) {
      const username = match[1];
      const mentionedUser = users.find((user) => user.username === username);
      if (mentionedUser) {
        mentions.push(mentionedUser.id);
      }
    }

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
          onKeyDown={handleKeyDown}
          required
        ></textarea>
        {showMentionList && (
          <div
            className="absolute left-1/2 top-[20%] z-10 mt-1 h-60 w-40 -translate-x-1/2 rounded-md border-2 bg-bg-secondary"
            onKeyDown={handleKeyDown}
          >
            {filteredUsers.map((user, index) => (
              <div
                key={user.id}
                className={`cursor-pointer px-4 py-2 ${
                  index === selectedUserIndex
                    ? 'bg-blue-100'
                    : 'hover:bg-gray-100'
                }`}
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

        {showTagList && (
          <div className="absolute left-1/2 top-[30%] z-10 mt-1 h-60 w-40 -translate-x-1/2 rounded-md border-2 bg-bg-secondary">
            {filteredTags.map((tag, index) => (
              <div
                key={index}
                className={`cursor-pointer px-4 py-2 ${
                  index === selectedTagIndex
                    ? 'bg-blue-100'
                    : 'hover:bg-gray-100'
                }`}
                onClick={() => handleTagSelect(tag)}
              >
                #{tag.hashtag}
              </div>
            ))}
          </div>
        )}

        <div className="flex w-full items-center gap-2 rounded-2xl bg-textarea p-4">
          <img
            src={url_icon}
            alt="url link"
            draggable="false"
            className="w-4 select-none"
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
            className="flex cursor-pointer select-none items-center gap-2 rounded-full border-[1px] border-border-muted bg-bg-primary px-4 py-2 text-sm font-semibold text-text-secondary"
          >
            <img src={doc} alt="document" className="w-4" draggable="false" />
            <span>File</span>
          </label>
          <input
            type="file"
            className="hidden"
            id="documentfile"
            accept="image/*,video/*"
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
                      draggable="false"
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
                accept="image/*,video/*"
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
