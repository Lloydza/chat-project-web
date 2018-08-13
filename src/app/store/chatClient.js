import io from 'socket.io-client/dist/socket.io';
import Constants from 'app/constants';
import * as actions from './actions/index';

import {
  updateChatRoomUsers,
  addChatMessage,
  updateChatUserTypingStatus,
  updateChatUserOnlineStatus,
  updateLoginPageIsLoading,
  changeRoute,
} from './actions/index';

let socket;

const typingIndicatorTimeoutFuncs = {};
const onlineIndicatorTimeoutFuncs = {};

// time betweeen presence broadcasts
const presenceBroadcastDelay = 2500;

// after this length of time of NOT receiving an indicator assume stopped typing
const typingIndicatorTimeoutDelay = 2000;

// after this length of time of not receiving a ping assume the user is offline
const onlineIndicatorTimeoutDelay = 5000;

function initChat(store) {
  // Check chat has not already started
  if (socket) {
    return;
  }

  const name = store.getState().session.userName;

  if (!name) {
    return;
  }

  const query = `name=${name}`;
  const options = { transports: ['websocket'], query };
  socket = io(Constants.ServerUrl, options);

  setInterval(() => {
    socket.emit(Constants.SocketEvents.Hello, { message: 'Ping' });
  }, presenceBroadcastDelay);

  socket.on(`${Constants.SocketEvents.Connected}:${name}`, () => {
    store.dispatch(updateLoginPageIsLoading(false));
    store.dispatch(changeRoute('/'));
  });

  socket.on(Constants.SocketEvents.Hello, () => {
    // console.log('got hello');
  });

  socket.on(Constants.SocketEvents.Users, (data) => {
    store.dispatch(updateChatRoomUsers(data));
  });

  socket.on(Constants.SocketEvents.Message, (data) => {
    if (data.name !== name) {
      store.dispatch(updateChatUserTypingStatus(false, data.name));
      store.dispatch(addChatMessage(data));
    }
  });

  socket.on(Constants.SocketEvents.TypingStatus, (typingName) => {
    // Clear existing timer to turn of typing indicator and
    // then create a new one that will fire after 'typingIndicatorTimeoutDelay'
    clearTimeout(typingIndicatorTimeoutFuncs[typingName]);
    typingIndicatorTimeoutFuncs[typingName] = setTimeout(
      () => store.dispatch(updateChatUserTypingStatus(false, typingName)),
      typingIndicatorTimeoutDelay,
    );

    store.dispatch(updateChatUserTypingStatus(true, typingName));
  });

  socket.on(Constants.SocketEvents.OnlineStatus, (onlineName) => {
    // Clear existing timer to turn of online status
    // and then create a new one that will fire after 'onlineIndicatorTimeoutDelay'
    clearTimeout(onlineIndicatorTimeoutFuncs[onlineName]);
    onlineIndicatorTimeoutFuncs[name] = setTimeout(
      () => store.dispatch(updateChatUserOnlineStatus(false, onlineName)),
      onlineIndicatorTimeoutDelay,
    );
    store.dispatch(updateChatUserOnlineStatus(true, name));
  });
}

function chatMiddleware(store) {
  return next => (action) => {
    const result = next(action);

    if (action.type === actions.START_CHAT) {
      initChat(store);
    } else if (socket && action.type === actions.NEW_CHAT_MESSAGE) {
      socket.emit(Constants.SocketEvents.Message, action.data);
    } else if (socket && action.type === actions.EMIT_CHAT_TYPING_STATUS) {
      socket.emit(Constants.SocketEvents.TypingStatus, null);
    }

    return result;
  };
}

module.exports = { chatMiddleware };
