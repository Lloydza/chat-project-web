import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from 'app/content/styles/containers/chatRoomPage/index.css';

class TypingIndicator extends Component {
  render() {
    const isTypingText = this.props.isTyping ? "typing..." : "";

    return (
      <div className={styles.typingIndicatorContainer}>
        <label>{isTypingText}</label>
      </div>
    );
  }
};

var mapStateToProps = function(state, componentProps) {
  return {
    isTyping: state.chat.typingStatus[componentProps.name]
  }
};

export default connect(mapStateToProps, null)(TypingIndicator);
