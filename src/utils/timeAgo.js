// Function to calculate the time ago for a given timestamp
export const timeAgo = (timestamp) => {
  const now = new Date();
  const sentTime = new Date(timestamp);
  const diffInMs = now - sentTime; // Difference in milliseconds

  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInMinutes < 60) {
    // Less than 1 hour ago
    return diffInMinutes === 1
      ? '1 minute ago'
      : `${diffInMinutes} minutes ago`;
  } else if (diffInHours < 24) {
    // Less than 1 day ago
    return diffInHours === 1 ? '1 hour ago' : `${diffInHours} hours ago`;
  } else {
    // More than 1 day ago
    return diffInDays === 1 ? '1 day ago' : `${diffInDays} days ago`;
  }
};

