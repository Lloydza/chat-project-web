import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import OnlineIndicator from './onlineIndicator';
import TypingIndicator from './typingIndicator';

const User = (props) => {
  const { userName, name } = props;

  const isYouText = userName === name ? '(you)' : '';
  return (
    <li>
      <OnlineIndicator name={name} />
      {name}
      {' '}
      {isYouText}
      <TypingIndicator name={name} />
    </li>
  );
}

OnlineIndicator.propTypes = {
  userName: PropTypes.string,
  name: PropTypes.string,
}

const mapStateToProps = function (state) {
  return {
    userName: state.session.userName,
  };
};

export default connect(mapStateToProps, null)(User);
