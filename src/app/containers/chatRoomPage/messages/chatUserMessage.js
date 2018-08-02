import React, { Component } from 'react';

import styles from 'app/content/styles/containers/chatRoomPage/index.css';

export default class ChatUserMessage extends Component {
  render() {
    return (
      <li className={styles.messageItem}>
        <div className={styles.chatUserMessage}>
          <div className={styles.senderContainer}>
            <label className={styles.messageSender}>
              {this.props.data.name}
            </label>
          </div>
          <div className={[styles.innerMessageContainer, styles.messageContent].join(' ')}>
            <label>
              {this.props.data.message}
            </label>
          </div>
        </div>
      </li>
    );
  }
};
