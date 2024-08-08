import React, { Suspense } from "react";

const TabContent = ({ tabs, activeTab }) => {
  const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className="tab-content">
      <Suspense fallback={<div>Loading...</div>}>{activeTabContent}</Suspense>
    </div>
  );
};

export default TabContent;
