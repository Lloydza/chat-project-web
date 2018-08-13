import React from 'react';

import styles from 'app/content/styles/containers/chatRoomPage/index.css';

import ChatUsers from './chatUsers/index';
import Messages from './messages/index';
import MessageInputBox from './messageInputBox';

export default () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.chatUsersContainer}>
        <ChatUsers />
      </div>
      <div className={styles.messageContainer}>
        <Messages />
        <MessageInputBox />
      </div>
    </div>
  );
}
