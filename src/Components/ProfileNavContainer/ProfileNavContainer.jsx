import { lazy, useState } from 'react';
import TabContent from '../Tabs/TabContent';
import TabButtons from '../Tabs/TabButtons';
import { MyPost } from './MyPost';

import plus_icon from '../../assets/plus.svg';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/Components/ui/sheet';
import { Overlay } from './Overlay';

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
          <ProfileDetails userId={1} />
        </div>
      ),
    },
    {
      id: 'post',
      label: 'Post',
      content: (
        <div className="mt-4">
          <MyPost userId={1} />
        </div>
      ),
    },
    {
      id: 'research',
      label: 'Research Activities',
      content: (
        <div className="mt-4">
          <ResearchActivities />
          <ResearchActivities />
          <ResearchActivities />
          <Sheet>
            <SheetTrigger className="sticky inset-x-3/4 bottom-10">
              <div className="flex w-fit items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-5 text-bg-secondary shadow-xl drop-shadow-lg">
                <img
                  src={plus_icon}
                  alt="plus icon"
                  className="w-5 invert"
                  draggable="false"
                />
                Add Research Activity
              </div>
            </SheetTrigger>
            <SheetContent className="p-0">
              <SheetHeader>
                <SheetTitle></SheetTitle>
              </SheetHeader>
              <SheetDescription></SheetDescription>
              <Overlay />
            </SheetContent>
          </Sheet>
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
