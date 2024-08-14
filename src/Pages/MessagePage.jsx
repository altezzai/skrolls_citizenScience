import UserMsgList from '../Components/UserMsgList/UserMsgList';
import MessageBox from '../Components/MessageBox/MessageBox';

const MessagePage = () => {
  return (
    <div className="flex w-full overflow-hidden">
      <div className="w-1/4 min-w-80">
        <UserMsgList />
      </div>
      <div className="w-3/4 max-md:hidden">
        <MessageBox />
      </div>
    </div>
  );
};

export default MessagePage;
