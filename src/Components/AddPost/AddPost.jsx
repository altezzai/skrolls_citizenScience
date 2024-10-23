import PostButton from '../PostButton/PostButton';
import { ProfilePhoto } from '../Profilephoto/ProfilePhoto';
import { useState, useRef } from 'react';
import MentionList from './MentionList';
import TagList from './TagList';
import FileUpload from './FileUpload';
import { apiClient } from '@/lib/api_client';

import photo from '../../assets/profile.png';
import url_icon from '../../assets/link_grey.svg';
import { CommunityList } from './CommunityList';

const AddPost = ({ show, handleClose }) => {
  const [filePreviews, setFilePreviews] = useState([]);
  const isFileUploaded = filePreviews.length > 0;
  const [files, setFiles] = useState([]);
  const [postContent, setPostContent] = useState('');
  const [link, setLink] = useState('');
  const [users, setUsers] = useState([]);
  const [mentionSearchTerm, setMentionSearchTerm] = useState('');
  const [showMentionList, setShowMentionList] = useState(false);
  const [selectedUserIndex, setSelectedUserIndex] = useState(0);
  const [showTagList, setShowTagList] = useState(false);
  const [selectedTagIndex, setSelectedTagIndex] = useState(0);
  const [filteredTags, setFilteredTags] = useState([]);
  const textareaRef = useRef(null);

  const [showCommunityList, setShowCommunityList] = useState(false);
  const [selectedCommunityIndex, setSelectedCommunityIndex] = useState(0);
  const [filteredCommunities, setFilteredCommunities] = useState([]);

  // Fetch users for mentions when @ and a character is typed
  const fetchUsers = async (mentionSearchTerm) => {
    if (mentionSearchTerm.length >= 1) {
      try {
        const response = await apiClient.get('users/search/user', {
          params: {
            q: mentionSearchTerm,
          },
        });
        setUsers(response.data);
        setShowMentionList(true);
      } catch (error) {
        console.error('Failed to fetch users:', error);
        setShowMentionList(false);
      }
    } else {
      setShowMentionList(false); // hide if no valid term
    }
  };

  const fetchTags = async (tagSearchTerm) => {
    if (tagSearchTerm.length >= 1) {
      try {
        const response = await apiClient.get('users/feed/search/hashtag', {
          params: {
            q: tagSearchTerm,
          },
        });
        const fetchedTags = response.data.hashtags;
        setFilteredTags(fetchedTags); // Update filteredTags here

        setShowTagList(true);
      } catch (error) {
        console.error('Failed to fetch hashtags:', error);
        setShowTagList(false);
      }
    } else {
      setShowTagList(false); // hide if no valid term
    }
  };

  const fetchCommunity = async (communitySearchTerm) => {
    console.log('Seaarch Term', communitySearchTerm);
    if (communitySearchTerm.length >= 1) {
      try {
        const response = await apiClient.get('users/search/communities', {
          params: {
            q: communitySearchTerm,
          },
        });
        const fetchedCommunities = response.data;
        setFilteredCommunities(fetchedCommunities); // Update filteredCommunities here

        setShowCommunityList(true);
      } catch (error) {
        console.error('Failed to fetch communities:', error);
        setShowCommunityList(false);
      }
    } else {
      setShowCommunityList(false); // hide if no valid term
    }
  };

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
    } else if (showCommunityList && filteredCommunities.length > 0) {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedCommunityIndex(
            (prevIndex) => (prevIndex + 1) % filteredCommunities.length
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedCommunityIndex(
            (prevIndex) =>
              (prevIndex - 1 + filteredCommunities.length) %
              filteredCommunities.length
          );
          break;
        case 'Enter':
          e.preventDefault();
          handleCommunitySelect(filteredCommunities[selectedCommunityIndex]);
          break;
        case 'Escape':
          e.preventDefault();
          setShowCommunityList(false);
          break;
        default:
          break;
      }
    }
  };

  const resetForm = () => {
    setFilePreviews([]);
    setFiles([]); // reset file array
    setPostContent('');
    setLink('');
  };

  const handleTextareaChange = (e) => {
    const newContent = e.target.value;
    setPostContent(newContent);

    // Detect if we're typing a mention (@), a tag (#), or a community (*)
    const currentWordMatch = newContent
      .slice(0, e.target.selectionStart)
      .match(/\S+$/);
    const currentWord = currentWordMatch ? currentWordMatch[0] : '';

    if (currentWord.startsWith('@')) {
      const mentionSearch = currentWord.slice(1);
      // setMentionSearchTerm(mentionSearch);
      fetchUsers(mentionSearch);
      setShowTagList(false);
      setShowCommunityList(false); // Hide the community list
    } else if (currentWord.startsWith('#')) {
      const tagSearch = currentWord.slice(1);
      fetchTags(tagSearch);
      setShowMentionList(false); // Hide the mention list
      setShowCommunityList(false);
    } else if (currentWord.startsWith('*')) {
      const communitySearch = currentWord.slice(1);
      fetchCommunity(communitySearch);
      setShowMentionList(false);
      setShowTagList(false); // Fetch communities when * and a character are typed
    } else {
      setShowMentionList(false);
      setShowTagList(false);
      setShowCommunityList(false); // Hide the community list if no * symbol
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
    textarea.dataset.lastTagId = tag.id;
    setShowTagList(false);

    const newCursorPosition = lastHashSymbolIndex + tag.hashtag.length + 1;
    textarea.setSelectionRange(newCursorPosition, newCursorPosition);
  };

  const handleCommunitySelect = (community) => {
    const textarea = textareaRef.current;
    const cursorPosition = textarea.selectionStart;
    const textBeforeCursor = postContent.slice(0, cursorPosition);
    const textAfterCursor = postContent.slice(cursorPosition);
    const lastStarSymbolIndex = textBeforeCursor.lastIndexOf('*');
    const newContent =
      textBeforeCursor.slice(0, lastStarSymbolIndex) +
      `*${community.name} ` +
      textAfterCursor;

    setPostContent(newContent);
    textarea.dataset.lastCommunityId = community.id;
    setShowCommunityList(false);

    const newCursorPosition = lastStarSymbolIndex + community.name.length + 1;
    textarea.setSelectionRange(newCursorPosition, newCursorPosition);
  };

  const submit = async (e) => {
    e.preventDefault();

    // Create form data
    const formData = new FormData();
    formData.append('description', postContent);
    formData.append('link', link);

    // Append files
    files.forEach((file, index) => {
      formData.append(`files`, file);
    });

    // Extract mentions and hashtags from the post content
    const mentionRegex = /@(\w+)/g;
    const hashtagRegex = /#(\w+)/g;
    const communityRegex = /\*(\w+)/g;

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

    const communities = [];
    const communityMatches = postContent.matchAll(communityRegex);
    for (const match of communityMatches) {
      const community = match[1];
      const mentionedCommunity = communities.find(
        (community) => community.name === community
      );
      if (mentionedCommunity) {
        communities.push(mentionedCommunity.id);
      }
    }

    formData.append('mentionIds', JSON.stringify(mentions));
    formData.append('hashTags', JSON.stringify(hashtags));
    formData.append('communityIds', JSON.stringify(communities));

    try {
      const response = await apiClient.post('users/feeds', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
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
      onClick={handleClose}
    >
      <form
        onSubmit={submit}
        className="relative left-1/2 top-[15%] w-1/2 -translate-x-1/2 rounded-2xl border-2 border-solid border-border-primary bg-bg-secondary p-5 max-lg:w-2/3 max-md:w-11/12"
        onClick={(e) => e.stopPropagation()}
      >
        <span
          className="float-right cursor-pointer pr-2 text-4xl font-bold text-text-secondary"
          onClick={handleClose}
        >
          &times;
        </span>
        <div className="mb-3 flex items-center gap-3">
          <ProfilePhoto img={photo} className={'h-10 w-10'} />
          <div className="text-lg font-medium text-text-hard">Manu P</div>
        </div>

        <textarea
          name="description"
          placeholder="What is new?"
          className="w-full resize-none rounded-2xl bg-textarea p-4 text-sm outline-none"
          style={{ height: isFileUploaded ? '100px' : '170px' }}
          value={postContent}
          onChange={handleTextareaChange}
          ref={textareaRef}
          onKeyDown={handleKeyDown}
          required
        ></textarea>

        {showMentionList && (
          <MentionList
            filteredUsers={filteredUsers}
            selectedUserIndex={selectedUserIndex}
            handleMentionSelect={handleMentionSelect}
          />
        )}

        {showTagList && (
          <TagList
            filteredTags={filteredTags}
            selectedTagIndex={selectedTagIndex}
            handleTagSelect={handleTagSelect}
          />
        )}

        {showCommunityList && (
          <CommunityList
            filteredCommunities={filteredCommunities}
            selectedCommunityIndex={selectedCommunityIndex}
            handleCommunitySelect={handleCommunitySelect}
          />
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
            className="w-full bg-inherit text-sm outline-none placeholder:select-none"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>

        <FileUpload
          filePreviews={filePreviews}
          setFilePreviews={setFilePreviews}
          files={files}
          setFiles={setFiles}
        />

        <PostButton text={'Post it!'} />
      </form>
    </div>
  );
};

export default AddPost;
