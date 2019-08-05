import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from 'app/content/styles/containers/chatRoomPage/index.css';

const OnlineIndicator = (props) => {
  const { isOnline } = props;
  const indicatorIcon = isOnline ? <img className={styles.onlineIndicator} alt="Online" src="online.png" /> : null;

  return <div className={styles.onlineIndicatorContainer}>{indicatorIcon}</div>;
};

OnlineIndicator.propTypes = {
  isOnline: PropTypes.bool,
};

OnlineIndicator.defaultProps = {
  isOnline: false,
};

const mapStateToProps = (state, componentProps) => {
  return {
    isOnline: state.session.userName === componentProps.name || state.chat.onlineStatus[componentProps.name],
  };
};

export default connect(
  mapStateToProps,
  null,
)(OnlineIndicator);
