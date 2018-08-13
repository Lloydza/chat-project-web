import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from 'app/content/styles/containers/chatRoomPage/index.css';

import {
  updateChatRoomNewMessageText,
  emitChatTypingStatus,
  sendChatMessage,
} from 'app/store/actions/index';

class MessageInputBox extends Component {
  componentDidMount() {
    this.messageInput.focus();
  }

  onSubmit = () => {
    let { newMessageText } = this.props;
    newMessageText.trim();
    if (newMessageText) {
      this.props.onSendChatMessage(newMessageText);
    }
    this.messageInput.focus();
  }

  onTextChange = (e) => {
    const { userName } = this.props;
    this.props.onChangeTypingStatus(userName);
    this.props.onNewMessageTextChange(e.target.value);
	}

  handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      this.onSubmit();
    }
  }

  render() {
    return (
      <div className={styles.inputBoxContainer}>
        <div className={styles.inputContainer}>
          <textarea
            autoFocus="true"
            onKeyPress={this.handleKeyPress}
            ref={(input) => { this.messageInput = input; }}
            className={styles.messageInput}
            onChange={this.onTextChange}
            placeholder="Say something..."
            value={this.props.newMessageText}
          />
        </div>
        <div className={styles.buttonContainer}>
          <input type="button" className={styles.button} onClick={this.onSubmit} value="SEND" />
        </div>
      </div>
    );
  }
}

MessageInputBox.propTypes = {
  newMessageText: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  onSendChatMessage: PropTypes.func.isRequired,
  onChangeTypingStatus: PropTypes.func.isRequired,
  onNewMessageTextChange: PropTypes.func.isRequired,
}

const mapStateToProps = function (state) {
  return {
    userName: state.session.userName,
    newMessageText: state.pages.chatRoom.newMessageText,
  };
};

const mapDispatchToProps = dispatch => ({
  onSendChatMessage: () => {
    dispatch(sendChatMessage());
  },
  onChangeTypingStatus: (name) => {
    dispatch(emitChatTypingStatus());
  },
  onNewMessageTextChange: (newMessageText) => {
    dispatch(updateChatRoomNewMessageText(newMessageText));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageInputBox);
