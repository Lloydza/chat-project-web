import React, { Component } from 'react';
import { connect } from 'react-redux';

import User from './user';

import styles from 'app/content/styles/containers/chatRoomPage/index.css';

class ChatUsers extends Component {
  renderUsers = () => {
   const listItems = this.props.users.map((name, index) => {
    return <User key={index} name={name} />;
   });

   return (<ul>{listItems}</ul>);
  }

  render() {
    const listItems = this.renderUsers();

    return (
      <div>
        <div className={styles.chatUsersHeader}>
          <label>Chat Lobby</label>
        </div>
        <div>
          {listItems}
        </div>
      </div>
    );
  }
};

var mapStateToProps = function(state) {
  return {
    users: state.pages.chatRoom.users
  }
};

export default connect(mapStateToProps, null)(ChatUsers);