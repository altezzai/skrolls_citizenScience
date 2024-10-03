import { useModal } from '@/context/ModalContext';
import socket from '@/context/socket';
import useClickOutside from '@/hooks/useClickOutside';
import { modals } from '@/utils/constants';

const DeleteConfirmationModal = ({
  id,
  isSentByMe,
  onClose
}) => {
  const { isModalOpen, closeModal } = useModal();

  console.log('ID', id);
  console.log('isSentByMe', isSentByMe);

  const DeleteRef = useClickOutside(
    isModalOpen(modals.CONFIRM_DELETE + id),
    () => {
      closeModal(modals.CONFIRM_DELETE + id);
    }
  );

  const handleCloseModal = () => {
    closeModal(modals.CONFIRM_DELETE);
    onClose();
  };

  const handleDeleteForMe = () => {
    console.log(`Delete message with ID ${id} for me`);
    socket.emit('deleteMessage', {
      messageId: id,
      deleteForEveryone: false,
      deletedAt: new Date(),
    });

    socket.on('message deleted', (id) => {
      console.log(`Message with ID ${id} deleted`);
    });
    closeModal(modals.CONFIRM_DELETE);
  };

  const handleDeleteForEveryone = () => {
    console.log(`Delete message with ID ${id} for everyone`);
    socket.emit('deleteMessage', {
      messageId: id,
      deleteForEveryone: true,
      deletedAt: new Date(),
    });
    socket.on('message deleted', (id) => {
      console.log(`Message with ID ${id} deleted`);
    });

    closeModal(modals.CONFIRM_DELETE);
  };

  if (!isModalOpen(modals.CONFIRM_DELETE)) {
    return null;
  }

  return (
    <div
      className="absolute left-1/2 top-1/2 z-50 min-w-80 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-bg-primary p-5"
      ref={DeleteRef}
    >
      <h3 className="text-lg font-normal">Delete Message?</h3>

      <div className="flex justify-center gap-4 pt-5 text-lg text-primary">
        <button
          onClick={handleDeleteForMe}
          className="rounded-3xl border-[1px] border-solid border-bg-active p-3 hover:bg-secondary"
        >
          Delete for Me
        </button>

        {isSentByMe && (
          <button
            onClick={handleDeleteForEveryone}
            className="rounded-3xl border-[1px] border-solid border-bg-active p-3 hover:bg-secondary"
          >
            Delete for Everyone
          </button>
        )}

        <button
          onClick={handleCloseModal}
          className="rounded-3xl border-[1px] border-solid border-bg-active p-3 hover:bg-secondary"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
