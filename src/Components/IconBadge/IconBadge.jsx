import React from "react";
import { cn } from "../../utils/utils";

const IconBadge = ({ children, flag = false, notifyCount = 0, className }) => {
  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, { draggable: false })
  );
  return (
    <div className={cn("relative grid place-items-center", className)}>
      {childrenWithProps}
      {flag && (
        <div
          className={cn(
            "right-0 top-0 bg-primary  text-white ",
            {
              "h-4 w-4 left-3 -top-1": !!notifyCount,
              "w-fit ": notifyCount > 9,
            },
            "absolute inline-flex items-center justify-center  text-[10px] border-2 leading-none border-white rounded-full p-[3px]   dark:border-gray-900"
          )}
        >
          {!!notifyCount && (notifyCount >= 100 ? "99+" : notifyCount)}
        </div>
      )}
    </div>
  );
};

export default IconBadge;
