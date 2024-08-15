import UserMsgList from '../Components/UserMsgList/UserMsgList';
import MessageBox from '../Components/MessageBox/MessageBox';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '../Components/ui/resizable';

const MessagePage = () => {
  return (
    <ResizablePanelGroup direction="horizontal" className="rounded-lg border">
      <ResizablePanel
        defaultSize={25}
        maxSize={50}
        minSize={25}
        className="max-md:mr-5"
      >
        <UserMsgList />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel className="max-md:hidden">
        <MessageBox />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default MessagePage;
