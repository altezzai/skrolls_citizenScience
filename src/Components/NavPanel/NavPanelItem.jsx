import { cn } from "../../utils/utils";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavPanelItem = ({ children, isSelected, link, className }) => {
  const location = useLocation();
  const inMessagePage = location.pathname.includes("/messages");
  return (
    <Link
      draggable="false"
      to={link}
      className={cn(
        "w-full bottomBorder group flex cursor-pointer text-text-primary px-8 h-16 transition-padding hover:bg-gray-50",
        {
          "bg-secondary shadow-[-2px_0px_0px_0px] shadow-primary hover:bg-secondary ":
            isSelected,
          "px-3 w-max ": inMessagePage,
        },
        className
      )}
    >
      <div
        className={cn(
          " border-y-[1px] w-40 border-gray-100 group-last:border-b-0 group-first:border-t-0 flex h-full items-center justify-start gap-6 hover:border-text-fade text-sm leading-none text-text",
          {
            "border-transparent": isSelected,
            "w-fit": inMessagePage,
          }
        )}
      >
        {children}
      </div>
    </Link>
  );
};

export default NavPanelItem;
