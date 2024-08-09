import React from "react";

const MessageBubble = ({ message, isSentByMe, timestamp }) => {
  const formattedTime = new Date(timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const formattedMessage = message.split("\n").map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));

  return (
    <div
      className={`w-full flex ${
        isSentByMe ? " justify-end " : "justify-start"
      }`}
    >
      <div
        className={`p-2 rounded-lg mb-2 ${
          isSentByMe
            ? "pr-5 bg-primary text-bg-secondary self-end"
            : "pl-5 bg-secondary self-start"
        } `}
      >
        <div className="message-text">{formattedMessage}</div>

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
