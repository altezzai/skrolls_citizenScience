import React from "react";

const MessageBubble = ({ message, type, isSentByMe, timestamp }) => {
  const formattedTime = new Date(timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const renderMessageContent = () => {
    switch (type) {
      case "text":
        return message.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ));
      case "image":
        return (
          <img
            src={message.data}
            alt={message.name || "Image"}
            className="max-w-96 rounded-lg"
          />
        );
      case "video":
        return (
          <video controls className="max-w-96 rounded-lg">
            <source src={message.data} type={message.type} />
            Your browser does not support the video tag.
          </video>
        );
      case "file":
        return (
          <a
            href={message.data}
            download={message.name}
            className="text-blue-500 underline"
          >
            {message.name}
          </a>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`w-full flex ${
        isSentByMe ? " justify-end " : "justify-start"
      }`}
    >
      <div
        className={`p-2 rounded-lg mb-2 w-fit max-w-lg ${
          isSentByMe
            ? "pr-5 bg-primary text-bg-secondary self-end"
            : "pl-5 bg-secondary self-start"
        } `}
      >
        <div className="message-text">{renderMessageContent()}</div>

        <div
          className={`text-[0.6rem] text-right pt-1 ${
            isSentByMe ? "text-border-muted" : "text-text-secondary"
          }`}
        >
          {formattedTime}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
