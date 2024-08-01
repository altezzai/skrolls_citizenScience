// MessageBubble.js
import React from "react";
import "./MessageBubble.css";

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
      className={`message-bubble ${
        isSentByMe ? "sent" : "received"
      } p-2 rounded-lg mb-2 max-w-xs`}
    >
      <div className="message-text">{formattedMessage}</div>
      <div className="message-time text-gray-500 mt-1 text-right">
        {formattedTime}
      </div>
    </div>
  );
};

export default MessageBubble;
