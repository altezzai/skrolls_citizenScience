import UserFollowListItem from "../UserFollowListItem/UserFollowListItem";
import { useModal } from "../../context/ModalContext";
import { modals } from "../../data/constants";
import useClickOutside from "../../hooks/useClickOutside";

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
      className="absolute z-50 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
    >
      <div className="flex items-center pl-8 max-w-md bg-bg-secondary border-b-2 border-text-primary py-2 rounded-t-3xl text-base font-semibold">
        Liked By
      </div>
      <div className="flex flex-col bg-bg-secondary rounded-b-3xl px-8 py-5 max-w-md gap-3 h-[500px]">
        <UserFollowListItem user={{ name: "Manuprasad", username: "manu" }} />
        <UserFollowListItem user={{ name: "Lively", username: "lv" }} />
        <UserFollowListItem user={{ name: "Jishnu", username: "jish" }} />
        <UserFollowListItem user={{ name: "Manu", username: "manooo" }} />
        <UserFollowListItem user={{ name: "William", username: "will" }} />
      </div>
    </div>
  );
};
