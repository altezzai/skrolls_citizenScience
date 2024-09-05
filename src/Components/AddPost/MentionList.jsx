const MentionList = ({ filteredUsers, selectedUserIndex, handleMentionSelect }) => {
    return (
      <div className="absolute left-1/2 top-[20%] z-10 mt-1 h-60 w-40 -translate-x-1/2 rounded-md border-2 bg-bg-secondary">
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
            {user.username}
          </div>
        ))}
      </div>
    );
  };
  
  export default MentionList;
  