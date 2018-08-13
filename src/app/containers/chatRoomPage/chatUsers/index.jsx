import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from 'app/content/styles/containers/chatRoomPage/index.css';
import User from './user';

class ChatUsers extends Component {
  renderUsers = () => {
    const { users } = this.props;
    const listItems = users.map((name, index) => <User key={name} name={name} />);

    return (
      <ul>
        {listItems}
      </ul>
    );
  }

  render() {
    const listItems = this.renderUsers();

    return (
      <div>
        <div className={styles.chatUsersHeader}>
          <label>
Chat Lobby
          </label>
        </div>
        <div>
          {listItems}
        </div>
      </div>
    );
  }
}

ChatUsers.propTypes = {
  users: PropTypes.array.isRequired,
}

const mapStateToProps = function (state) {
  return {
    users: state.pages.chatRoom.users,
  };
};

export default connect(mapStateToProps, null)(ChatUsers);
