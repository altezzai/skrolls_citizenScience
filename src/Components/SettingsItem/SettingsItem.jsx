import { cn } from "../../utils/utils";
import React from "react";

export const SettingsItem = ({
  image,
  className,
  imgClassName,
  label,
  next,
  nextClassName,
}) => {
  return (
    <div className="flex justify-between p-4 bg-bg-secondary items-center first:border-b-2 first:rounded-t-2xl last:rounded-b-2xl only:rounded-2xl">
      <div className="flex gap-4 items-center">
        <div
          className={cn(
            "bg-bg-muted-transparent flex items-center justify-center rounded-full",
            className
          )}
        >
          <img
            src={image}
            className={cn("rounded-full", imgClassName)}
            alt="author icon"
            draggable="false"
          />
        </div>
        <div className="text-sm">{label}</div>
      </div>
      <div className={cn("cursor-pointer", nextClassName)}>
        <img src={next} className="w-4" alt="next icon" draggable="false" />
      </div>
    </div>
  );
};
