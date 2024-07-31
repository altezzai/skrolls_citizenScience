import React from 'react';
import UserMsgList from '../Components/UserMsgList/UserMsgList';
import './CSS/MessagePage.css';

const MessagePage = () => {
  return (
    <div className='msgpage'>
      <div className="usermsglist-container"><UserMsgList/></div>
      <div className="chatbox-container">chat box section</div>
    </div>
  )
}

export default MessagePage
