import clsx from "clsx";
import React from "react";

const TabButton = ({ id, label, active, onClick }) => (
  <button
    className={`inline-block px-3 py-2 rounded-t-lg text-nowrap ${
      active
        ? "text-black border-b-2 border-black dark:text-white dark:border-white"
        : "hover:text-gray-700 text-gray-500 hover:border-gray-300 dark:hover:text-gray-300"
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
  <div className="border-b pt-1 mb-1 border-gray-200 dark:border-gray-700">
    <ul
      className={clsx(
        "flex -mb-px text-sm font-medium text-center ",
        className
      )}
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
