import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from 'app/content/styles/containers/chatRoomPage/index.css';

const TypingIndicator = (props) => {
  const { isTyping } = props;
  const isTypingText = isTyping ? 'typing...' : '';

  return (
    <div className={styles.typingIndicatorContainer}>
      <label>
        {isTypingText}
      </label>
    </div>
  );
}

TypingIndicator.propTypes = {
  isTypingText: PropTypes.bool,
}

const mapStateToProps = function (state, componentProps) {
  return {
    isTyping: state.chat.typingStatus[componentProps.name],
  };
};

export default connect(mapStateToProps, null)(TypingIndicator);
