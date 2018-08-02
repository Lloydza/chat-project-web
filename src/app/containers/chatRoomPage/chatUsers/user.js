import React, { Component } from 'react';
import { connect } from 'react-redux';

import OnlineIndicator from './onlineIndicator';
import TypingIndicator from './typingIndicator';

class User extends Component {
  render() {
    const isYouText = this.props.userName === this.props.name ? "(you)" : "";
    return (
      <li>
        <OnlineIndicator name={this.props.name} />
        {this.props.name} {isYouText}
        <TypingIndicator name={this.props.name} />
      </li>
    );
  }
};

var mapStateToProps = function(state) {
  return {
    userName: state.session.userName
  }
};

export default connect(mapStateToProps, null)(User);
