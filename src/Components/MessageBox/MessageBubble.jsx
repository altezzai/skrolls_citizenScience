import delete_icon from '../../assets/delete.svg';
import copy_icon from '../../assets/copy.svg';
import reply_icon from '../../assets/reply_msg.svg';
import report_icon from '../../assets/report_warning.svg';

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/Components/ui/context-menu';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import { useState } from 'react';
import { useModal } from '@/context/ModalContext';
import { modals } from '@/utils/constants';

const MessageBubble = ({ message, isSentByMe }) => {
  const { openModal, isModalOpen, closeModal } = useModal();
  const [selectedMessageId, setSelectedMessageId] = useState(null);
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

  const handleCopyText = () => {
    if (message.content) {
      navigator.clipboard.writeText(message.content).catch((err) => {
        console.error('Failed to copy: ', err);
      });
    }
  };

  const handleDeleteClick = () => {
    // Set selectedMessageId only if it's not already set or if the modal is closed
    if (!selectedMessageId || !isModalOpen(modals.CONFIRM_DELETE)) {
      setSelectedMessageId(message.id);
      openModal(modals.CONFIRM_DELETE);
    }
  };

  const handleModalClose = () => {
    closeModal(modals.CONFIRM_DELETE);
    setSelectedMessageId(null);
  };

  return (
    <>
      {message.messageType === 'system' ? (
        <div className="mb-2 flex justify-center">
          <div className="bg-bg-system select-none rounded-lg p-2 text-center text-xs">
            {renderMessageContent()}
          </div>
        </div>
      ) : (
        <ContextMenu>
          <div
            className={`flex w-full ${isSentByMe ? 'justify-end' : 'justify-start'}`}
          >
            <ContextMenuTrigger>
              <div
                className={`mb-2 w-fit max-w-lg rounded-lg p-2 ${
                  isSentByMe
                    ? 'self-end bg-primary pr-5 text-bg-secondary'
                    : 'self-start bg-secondary pl-5'
                }`}
              >
                <div className="message-text">{renderMessageContent()}</div>

                <div
                  className={`select-none pt-1 text-right text-[0.6rem] ${
                    isSentByMe ? 'text-border-muted' : 'text-text-secondary'
                  }`}
                >
                  {formattedTime}
                </div>
              </div>
            </ContextMenuTrigger>
          </div>

          <ContextMenuContent className="m-0 rounded-xl p-0">
            <ContextMenuItem className="flex w-full gap-2 border-b-2 border-border-muted py-2">
              <img
                src={reply_icon}
                alt="reply icon"
                draggable="false"
                className="w-5"
              />
              Reply
            </ContextMenuItem>
            <ContextMenuItem
              onClick={handleCopyText}
              className="flex w-full gap-2 border-b-2 border-border-muted py-2"
            >
              <img
                src={copy_icon}
                className="w-6"
                alt="copy icon"
                draggable="false"
              />
              Copy
            </ContextMenuItem>
            {!isSentByMe && (
              <ContextMenuItem className="flex w-full gap-2 border-b-2 border-border-muted py-2">
                <img
                  src={report_icon}
                  alt="report icon"
                  draggable="false"
                  className="w-5"
                />
                Report
              </ContextMenuItem>
            )}

            <ContextMenuItem
              onClick={handleDeleteClick}
              className="flex w-full gap-2 py-2"
            >
              <img
                src={delete_icon}
                className="w-5"
                alt="delete icon"
                draggable="false"
              />
              Delete
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      )}

      {isModalOpen(modals.CONFIRM_DELETE) &&
        selectedMessageId === message.id && (
          <DeleteConfirmationModal
            id={selectedMessageId}
            onClose={handleModalClose}
            isSentByMe={isSentByMe}
          />
        )}
    </>
  );
};

export default MessageBubble;
