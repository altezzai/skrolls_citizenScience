import edit_icon from '../../assets/edit.svg';

export const EditButton = () => {
  return (
    <div className="flex h-fit w-fit cursor-pointer items-center gap-2 rounded-full border-2 border-border-muted px-3 py-2 text-sm text-text-secondary hover:bg-bg-primary">
      Edit
      <img src={edit_icon} alt="edit icon" draggable="false" className="w-4" />
    </div>
  );
};
