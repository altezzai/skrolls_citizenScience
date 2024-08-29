import { lazy, useState } from 'react';
import TabContent from '../Tabs/TabContent';
import TabButtons from '../Tabs/TabButtons';
import { MyPost } from './MyPost';

// const MyPost = lazy(() => import('./MyPost'));
const ProfileDetails = lazy(() => import('../ProfileDetails/ProfileDetails'));
const ResearchActivities = lazy(
  () => import('../ResearchActivities/ResearchActivities')
);

const ProfileNavContainer = () => {
  const tabs = [
    {
      id: 'profile',
      label: 'Profile',
      content: (
        <div className="mt-4">
          <ProfileDetails />
        </div>
      ),
    },
    {
      id: 'post',
      label: 'Post',
      content: <div className="mt-4"><MyPost userId={2}/></div>,
    },
    {
      id: 'research',
      label: 'Research Activities',
      content: (
        <div className="mt-4">
          <ResearchActivities />
        </div>
      ),
    },
  ];

  const [activeTab, setActiveTab] = useState('profile' || tabs[0].id);

  return (
    <div className="tab-container">
      <TabButtons
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        className="w-min"
      />
      <TabContent tabs={tabs} activeTab={activeTab} />
    </div>
  );
};

export default ProfileNavContainer;
