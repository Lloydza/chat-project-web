import React from 'react';
import PropTypes from 'prop-types';

import styles from 'app/content/styles/containers/chatRoomPage/index.css';

const ChatUserMessage = (props) => {
  const { data } = props;

  return (
    <li className={styles.messageItem}>
      <div className={styles.chatUserMessage}>
        <div className={styles.senderContainer}>
          <label className={styles.messageSender}>
            {data.name}
          </label>
        </div>
        <div className={[styles.innerMessageContainer, styles.messageContent].join(' ')}>
          <label>
            {data.message}
          </label>
        </div>
      </div>
    </li>
  );
}

ChatUserMessage.propTypes = {
  data: PropTypes.object.isRequired
}

export default ChatUserMessage;
