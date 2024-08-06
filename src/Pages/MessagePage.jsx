import React from 'react';
import UserMsgList from '../Components/UserMsgList/UserMsgList';
import './CSS/MessagePage.css';
import MessageBox from '../Components/MessageBox/MessageBox';

const MessagePage = () => {
  return (
    <div className='msgpage'>
      <div className="usermsglist-container"><UserMsgList/></div>
      <div className="chatbox-container max-md:hidden ">
        <MessageBox />
      </div>
    </div>
  )
}

export default MessagePage
