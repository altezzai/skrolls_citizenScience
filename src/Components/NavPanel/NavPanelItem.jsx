import { cn } from "../../utils/utils";
import { Link } from "react-router-dom";
import "./NavPanel.css";

const NavPanelItem = ({ children, isSelected, link, className }) => {
  return (
    <Link
      to={link}
      className={cn(className, "navPiece bottomBorder group", {
        active: isSelected,
      })}
    >
      <div
        className={cn(
          " border-y-[1px] border-gray-100 w-full group-last:border-b-0 group-first:border-t-0 flex h-full items-center justify-start gap-6 hover:border-text-fade text-sm leading-none text-text",
          {
            "border-transparent": isSelected,
          }
        )}
      >
        {children}
      </div>
    </Link>
  );
};

export default NavPanelItem;
