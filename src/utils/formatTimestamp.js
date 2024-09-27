export const formatTimestamp = (timestamp) => {
  const currentDate = new Date();
  const passedDate = new Date(timestamp);

  // Calculate the time difference in days
  const timeDifference = Math.floor(
    (currentDate - passedDate) / (1000 * 60 * 60 * 24)
  );

  // Get the time if the date is today
  if (timeDifference === 0) {
    return passedDate.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  // If it's yesterday
  if (timeDifference === 1) {
    return 'Yesterday';
  }

  // Otherwise, return the date in dd-mm-yyyy format
  const day = String(passedDate.getDate()).padStart(2, '0');
  const month = String(passedDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const year = passedDate.getFullYear();

  return `${day}-${month}-${year}`;
}
