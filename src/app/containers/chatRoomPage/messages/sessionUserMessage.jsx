import React from 'react';
import PropTypes from 'prop-types';

import styles from 'app/content/styles/containers/chatRoomPage/index.css';

const SessionUserMessage = (props) => {
  const { data } = props;

  return (
    <li className={styles.messageItem}>
      <div className={styles.sessionUserMessage}>
        <div className={styles.senderContainer}>
          <label className={styles.messageSender}>
            You
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

SessionUserMessage.propTypes = {
  data: PropTypes.object.isRequired
}

export default SessionUserMessage;
