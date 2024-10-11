import UserMsgList from '../Components/UserMsgList/UserMsgList';
import MessageBox from '../Components/MessageBox/MessageBox';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '../Components/ui/resizable';
import { useState } from 'react';
import { CommunityList } from '@/Components/CommunityList/CommunityList';

const Communities = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <ResizablePanelGroup direction="horizontal" className="rounded-lg border">
      <ResizablePanel
        defaultSize={30}
        maxSize={50}
        minSize={30}
        className="max-md:mr-5"
      >
        <CommunityList onUserSelect={setSelectedUser} />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel className="max-md:hidden">
        {selectedUser ? (
          <MessageBox selectedUser={selectedUser} />
        ) : (
          <div className="flex h-full items-center justify-center">
            Select a user to start chatting
          </div>
        )}
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Communities;
