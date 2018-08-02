import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from 'app/content/styles/containers/chatRoomPage/index.css';

class OnlineIndicator extends Component {
  render() {
    const indicatorIcon = this.props.isOnline ? <img className={styles.onlineIndicator} src='online.png' /> : null;

    return (
      <div className={styles.onlineIndicatorContainer}>
        {indicatorIcon}
      </div>
    );
  }
};

var mapStateToProps = function(state, componentProps) {
  return {
    isOnline: state.session.userName === componentProps.name || state.chat.onlineStatus[componentProps.name]
  }
};

export default connect(mapStateToProps, null)(OnlineIndicator);
