import UserMsgList from '../Components/UserMsgList/UserMsgList';
import MessageBox from '../Components/MessageBox/MessageBox';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '../Components/ui/resizable';
import { useState } from 'react';

const MessagePage = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <ResizablePanelGroup direction="horizontal" className="rounded-lg border">
      <ResizablePanel
        defaultSize={25}
        maxSize={50}
        minSize={25}
        className="max-md:mr-5"
      >
        <UserMsgList onUserSelect={setSelectedUser} />
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

export default MessagePage;
