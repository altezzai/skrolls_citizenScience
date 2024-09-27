const MessageBubble = ({ message, isSentByMe }) => {
  // Formatting the timestamp
  const formattedTime = new Date(message.createdAt).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  // Render message content based on the presence of mediaUrl or text content
  const renderMessageContent = () => {
    // Check if mediaUrl exists and is an array
    if (Array.isArray(message.mediaUrl) && message.mediaUrl.length > 0) {
      // Render media files (images, videos, files)
      return message.mediaUrl.map((media, index) => {
        const mediaType = media.type.split('/')[0]; // 'image', 'video', etc.

        if (mediaType === 'image') {
          return (
            <img
              key={index}
              src={media.url}
              alt={media.name || 'Image'}
              className="max-w-96 rounded-lg"
            />
          );
        } else if (mediaType === 'video') {
          return (
            <video key={index} controls className="max-w-96 rounded-lg">
              <source src={media.url} type={media.type} />
              Your browser does not support the video tag.
            </video>
          );
        } else {
          return (
            <a
              key={index}
              href={media.url}
              download={media.name}
              className="text-blue-500 underline"
            >
              {media.name || 'Download'}
            </a>
          );
        }
      });
    }

    // If no mediaUrl exists, render text content if it exists
    if (message.content) {
      return message.content.split('\n').map((line, index) => (
        <span key={index} className="whitespace-pre-wrap">
          {line}
          <br />
        </span>
      ));
    }

    // Default fallback if no content or media is available
    return null;
  };

  return (
    <div
      className={`flex w-full ${isSentByMe ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`mb-2 w-fit max-w-lg rounded-lg p-2 ${
          isSentByMe
            ? 'self-end bg-primary pr-5 text-bg-secondary'
            : 'self-start bg-secondary pl-5'
        }`}
      >
        <div className="message-text">{renderMessageContent()}</div>

        <div
          className={`pt-1 text-right text-[0.6rem] select-none ${
            isSentByMe ? 'text-border-muted' : 'text-text-secondary'
          }`}
        >
          {formattedTime}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
