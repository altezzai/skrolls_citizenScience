import React from 'react';

export const MenuButton = ({ label, icon }) => {
  return (
    <div className="flex items-center gap-2 text-xs font-medium text-text-secondary">
      <img src={icon} alt={`${label} icon`} draggable="false" className="w-4" />
      {label}
    </div>
  );
};
