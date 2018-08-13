import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from 'app/content/styles/containers/chatRoomPage/index.css';
import SessionUserMessage from './sessionUserMessage';
import ChatUserMessage from './chatUserMessage';


class Messages extends Component {
  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    if (this.messagesEnd) {
      this.messagesEnd.scrollIntoView();
    }
  }

  renderMessages = () => {
    const { messages, userName } = this.props;

    const listItems = messages.slice().reverse().map(
      (data) => (data.name === userName
      ? <SessionUserMessage key={data} data={data} />
      : <ChatUserMessage key={data} data={data} />)
    );

    return (
      <ul>
        {listItems}
        <li ref={(el) => { this.messagesEnd = el; }} />
      </ul>
    );
  }

  render() {
    const messages = this.renderMessages();

    return (
      <div ref={(el) => { this.messagesList = el; }} className={styles.messagesContainer}>
        {messages}
      </div>
    );
  }
}

Messages.propTypes = {
  messages: PropTypes.array.isRequired,
  userName: PropTypes.string
}

const mapStateToProps = function (state) {
  return {
    messages: state.chat.messages,
    userName: state.session.userName,
  };
};

export default connect(mapStateToProps, null)(Messages);
