const TagList = ({ filteredTags, selectedTagIndex, handleTagSelect }) => {
    return (
      <div className="absolute left-1/2 top-[30%] z-10 mt-1 h-60 w-40 -translate-x-1/2 rounded-md border-2 bg-bg-secondary">
        {filteredTags.map((tag, index) => (
          <div
            key={tag.id}
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
    );
  };
  
  export default TagList;
  