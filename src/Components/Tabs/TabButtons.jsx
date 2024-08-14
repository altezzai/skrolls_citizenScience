import { cn } from '../../utils/utils';
import React from 'react';

const TabButton = ({ id, label, active, onClick }) => (
  <button
    className={`inline-block text-nowrap rounded-t-lg px-3 py-2 ${
      active
        ? 'border-b-2 border-black text-black dark:border-white dark:text-white'
        : 'text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-300'
    }`}
    id={`${id}-tab`}
    type="button"
    role="tab"
    aria-controls={id}
    aria-selected={active}
    onClick={() => onClick(id)}
  >
    {label}
  </button>
);

const TabButtons = ({ tabs, activeTab, setActiveTab, className }) => (
  <div className="mb-1 border-b border-gray-200 pt-1 dark:border-gray-700">
    <ul
      className={cn('-mb-px flex text-center text-sm font-medium', className)}
      role="tablist"
    >
      {tabs.map((tab) => (
        <li key={tab.id} className="flex-1" role="presentation">
          <TabButton
            id={tab.id}
            label={tab.label}
            active={activeTab === tab.id}
            onClick={setActiveTab}
          />
        </li>
      ))}
    </ul>
  </div>
);

export default TabButtons;
