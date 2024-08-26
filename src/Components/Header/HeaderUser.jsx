import profile_icon from '../../assets/profile.png';
const HeaderUser = () => {
  return (
    <div className="flex cursor-pointer items-center gap-3">
      <img
        className="h-10 w-10 rounded-full object-cover"
        src={profile_icon}
        alt="User avatar"
      />
      <div className="flex flex-col">
        <span className="flex items-centerjustify-between font-medium">
          <span className="text-text text-sm mr-1">Ishaque Risan</span>
          <span className="text-background-sec rounded-sm bg-secondary p-1 text-xs leading-none">
            Admin
          </span>
        </span>
        <span className="text-text-muted text-xs">risan@skrolls.com</span>
      </div>
    </div>
  );
};

export default HeaderUser;
