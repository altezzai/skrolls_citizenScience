// MessageBubble.js
import React from 'react';
import './MessageBubble.css';

const MessageBubble = ({ message, isSentByMe, timestamp }) => {
  const formattedTime = new Date(timestamp).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  const formattedMessage = message.split('\n').map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));

  return (
    <div
      className={`flex w-full ${isSentByMe ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`message-bubble ${
          isSentByMe ? 'sent' : 'received'
        } mb-2 max-w-xs rounded-lg p-2`}
      >
        <div className="message-text">{formattedMessage}</div>
        <div className="message-time mt-1 text-right text-gray-500">
          {formattedTime}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
