import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from 'app/content/styles/containers/chatRoomPage/index.css';
import { updateChatRoomNewMessageText, emitChatTypingStatus, sendChatMessage } from 'app/store/actions/index';

class MessageInputBox extends Component {
  componentDidMount() {
    this.messageInput.focus();
  }

  onSubmit = () => {
    const { newMessageText, onSendChatMessage } = this.props;
    newMessageText.trim();
    if (newMessageText) {
      onSendChatMessage(newMessageText);
    }
    this.messageInput.focus();
  };

  onTextChange = (e) => {
    const { userName, onChangeTypingStatus, onNewMessageTextChange } = this.props;
    onChangeTypingStatus(userName);
    onNewMessageTextChange(e.target.value);
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      this.onSubmit();
    }
  };

  render() {
    const { newMessageText } = this.props;
    return (
      <div className={styles.inputBoxContainer}>
        <div className={styles.inputContainer}>
          <textarea
            autoFocus="true"
            onKeyPress={this.handleKeyPress}
            ref={(input) => {
              this.messageInput = input;
            }}
            className={styles.messageInput}
            onChange={this.onTextChange}
            placeholder="Say something..."
            value={newMessageText}
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
};

const mapStateToProps = (state) => {
  return {
    userName: state.session.userName,
    newMessageText: state.pages.chatRoom.newMessageText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSendChatMessage: () => {
      dispatch(sendChatMessage());
    },
    onChangeTypingStatus: (name) => {
      dispatch(emitChatTypingStatus(name));
    },
    onNewMessageTextChange: (newMessageText) => {
      dispatch(updateChatRoomNewMessageText(newMessageText));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessageInputBox);
