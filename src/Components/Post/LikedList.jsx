import UserFollowListItem from '../UserFollowListItem/UserFollowListItem';
import { useModal } from '../../context/ModalContext';
import { modals } from '../../utils/constants';
import useClickOutside from '../../hooks/useClickOutside';

export const LikedList = ({ id }) => {
  const { isModalOpen, closeModal } = useModal();
  const LikedListRef = useClickOutside(
    isModalOpen(modals.LIKED_LIST + id),
    () => {
      closeModal(modals.LIKED_LIST + id);
    }
  );

  return (
    <div
      ref={LikedListRef}
      className="absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2"
    >
      <div className="flex max-w-md items-center rounded-t-3xl border-b-2 border-text-primary bg-bg-secondary py-2 pl-8 text-base font-semibold">
        Liked By
      </div>
      <div className="flex h-[500px] max-w-md flex-col gap-3 rounded-b-3xl bg-bg-secondary px-8 py-5">
        <UserFollowListItem user={{ name: 'Manuprasad', username: 'manu' }} />
        <UserFollowListItem user={{ name: 'Lively', username: 'lv' }} />
        <UserFollowListItem user={{ name: 'Jishnu', username: 'jish' }} />
        <UserFollowListItem user={{ name: 'Manu', username: 'manooo' }} />
        <UserFollowListItem user={{ name: 'William', username: 'will' }} />
      </div>
    </div>
  );
};
