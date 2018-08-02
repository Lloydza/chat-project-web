import io from 'socket.io-client/dist/socket.io';
import Constants from 'app/constants';
import * as actions from './actions/index';

import {
  updateChatRoomUsers,
  addChatMessage,
  updateChatUserTypingStatus,
  updateChatUserOnlineStatus,
  updateLoginPageIsLoading,
  changeRoute
} from './actions/index';

let socket;
let pingFuncId;

let typingIndicatorTimeoutFuncs = {};
let onlineIndicatorTimeoutFuncs = {};

// time betweeen presence broadcasts
let presenceBroadcastDelay = 2500;

// after this length of time of NOT receiving an indicator assume stopped typing
let typingIndicatorTimeoutDelay = 2000;

// after this length of time of not receiving a ping assume the user is offline
let onlineIndicatorTimeoutDelay = 5000;

function chatMiddleware(store) {
  return next => action => {
    const result = next(action);

    if (action.type === actions.START_CHAT) {
      initChat(store);
    }
    else if (socket && action.type === actions.NEW_CHAT_MESSAGE) {
      socket.emit(Constants.SocketEvents.Message, action.data);
    }
    else if (socket && action.type === actions.EMIT_CHAT_TYPING_STATUS) {
      socket.emit(Constants.SocketEvents.TypingStatus, null);
    }

    return result;
  };
};

function initChat(store) {
  // Check chat has not already started
  if (socket) {
    return;
  }

  const name = store.getState().session.userName;

  if (!name) {
    return;
  }

  const query = "name=" + name;
  const options = {transports: ['websocket'], query: query };
  socket = io(Constants.ServerUrl, options);

  pingFuncId = setInterval(function() {
    socket.emit(Constants.SocketEvents.Hello, {message: 'Ping'});
  }, presenceBroadcastDelay);

  socket.on(Constants.SocketEvents.Connected + ":" + name, function(data) {
    store.dispatch(updateLoginPageIsLoading(false));
    store.dispatch(changeRoute('/'));
  });

  socket.on(Constants.SocketEvents.Hello, function(data) {
    //console.log('got hello');
  });

  socket.on(Constants.SocketEvents.Users, (data) => {
    store.dispatch(updateChatRoomUsers(data));
  });

  socket.on(Constants.SocketEvents.Message, (data) => {
    if (data.name != name) {
      store.dispatch(updateChatUserTypingStatus(false, data.name));
      store.dispatch(addChatMessage(data));
    }
  });

  socket.on(Constants.SocketEvents.TypingStatus, (name) => {
    // Clear existing timer to turn of typing indicator and then create a new one that will fire after 'typingIndicatorTimeoutDelay'
    clearTimeout(typingIndicatorTimeoutFuncs[name]);
    typingIndicatorTimeoutFuncs[name] = setTimeout(
      () => store.dispatch(updateChatUserTypingStatus(false, name)),
      typingIndicatorTimeoutDelay);
    
    store.dispatch(updateChatUserTypingStatus(true, name));
  });

  socket.on(Constants.SocketEvents.OnlineStatus, (name) => {
    // Clear existing timer to turn of online status and then create a new one that will fire after 'onlineIndicatorTimeoutDelay'
    clearTimeout(onlineIndicatorTimeoutFuncs[name]);
    onlineIndicatorTimeoutFuncs[name] = setTimeout(
      () => store.dispatch(updateChatUserOnlineStatus(false, name)),
      onlineIndicatorTimeoutDelay
    );
    store.dispatch(updateChatUserOnlineStatus(true, name));
  });
};

module.exports = { chatMiddleware };
