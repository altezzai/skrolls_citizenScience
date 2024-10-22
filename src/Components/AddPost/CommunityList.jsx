export const CommunityList = ({
  filteredCommunities,
  selectedCommunityIndex,
  handleCommunitySelect,
}) => {

  if (!filteredCommunities.length) {
    return null; // Return nothing if no communities to show
  }
  return (
    <div className="absolute left-1/2 top-[20%] z-10 mt-1 h-60 w-40 -translate-x-1/2 overflow-auto rounded-md border-2 bg-bg-secondary shadow-lg">
      <ul>
        {filteredCommunities.map((community, index) => (
          <li
            key={community.id}
            onClick={() => handleCommunitySelect(community)}
            className={`cursor-pointer p-2 ${
              index === selectedCommunityIndex ? 'bg-blue-100' : 'hover:bg-gray-100'
            }`}
          >
            {community.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
