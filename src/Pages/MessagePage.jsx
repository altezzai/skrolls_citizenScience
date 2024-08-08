import React from 'react';
import UserMsgList from '../Components/UserMsgList/UserMsgList';
import MessageBox from '../Components/MessageBox/MessageBox';

const MessagePage = () => {
  return (
    <div className='flex w-full overflow-hidden'>
      <div className="min-w-80 w-1/4"><UserMsgList/></div>
      <div className="w-3/4 max-md:hidden ">
        <MessageBox />
      </div>
    </div>
  )
}

export default MessagePage
