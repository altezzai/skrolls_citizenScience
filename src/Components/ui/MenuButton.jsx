import { cn } from '@/lib/utils';
import React from 'react';

export const MenuButton = ({ label, icon, className }) => {
  return (
    <div className={cn("flex items-center gap-2 text-xs font-medium ",
      className
    )}>
      <img src={icon} alt={`${label} icon`} draggable="false" className="w-4" />
      {label}
    </div>
  );
};
