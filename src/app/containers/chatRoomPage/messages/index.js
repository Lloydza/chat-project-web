import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import SessionUserMessage from './sessionUserMessage';
import ChatUserMessage from './chatUserMessage';

import styles from 'app/content/styles/containers/chatRoomPage/index.css';

class Messages extends Component {
  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  renderMessages = () => {
    const listItems = this.props.messages.slice().reverse().map((data, index) => {
     return data.name === this.props.userName ? 
        <SessionUserMessage key={index} data={data} />
        :
        <ChatUserMessage key={index} data={data} />;
    });
 
    return (<ul>{listItems}<li ref={(el) => { this.messagesEnd = el; }}></li></ul>);
  }

  scrollToBottom () {
    var node = ReactDOM.findDOMNode(this.messagesEnd);
    if (node) {
      node.scrollIntoView();
    }
  }

  render() {
    const messages = this.renderMessages();

    return (
      <div ref={(el) => { this.messagesList = el; }} className={styles.messagesContainer}>
        {messages}
      </div>
    );
  }
};

var mapStateToProps = function(state) {
  return {
    messages: state.chat.messages,
    userName: state.session.userName
  }
};

export default connect(mapStateToProps, null)(Messages);