import { updateChatRoomNewMessageText } from 'app/store/actions/index';

export const START_CHAT = 'START_CHAT';
export const NEW_CHAT_MESSAGE = 'NEW_CHAT_MESSAGE';
export const ADD_CHAT_MESSAGE = 'ADD_CHAT_MESSAGE';
export const EMIT_CHAT_TYPING_STATUS = 'EMIT_CHAT_TYPING_STATUS';
export const UPDATE_CHAT_USER_ONLINE_STATUS = 'UPDATE_CHAT_USER_ONLINE_STATUS';
export const UPDATE_CHAT_USER_TYPING_STATUS = 'UPDATE_CHAT_USER_TYPING_STATUS';

export function startChat() {
  return {
    type: START_CHAT,
  };
}
exports.startChat = startChat;

function newChatMessage(data) {
  return {
    type: NEW_CHAT_MESSAGE,
    data,
  };
}
exports.newChatMessage = newChatMessage;

function addChatMessage(data) {
  return {
    type: ADD_CHAT_MESSAGE,
    data,
  };
}
exports.addChatMessage = addChatMessage;

function updateChatUserOnlineStatus(isOnline, name) {
  return {
    type: UPDATE_CHAT_USER_ONLINE_STATUS,
    isOnline,
    name,
  };
}
exports.updateChatUserOnlineStatus = updateChatUserOnlineStatus;

function updateChatUserTypingStatus(isTyping, name) {
  return {
    type: UPDATE_CHAT_USER_TYPING_STATUS,
    isTyping,
    name,
  };
}
exports.updateChatUserTypingStatus = updateChatUserTypingStatus;

function emitChatTypingStatus() {
  return {
    type: EMIT_CHAT_TYPING_STATUS,
  };
}
exports.emitChatTypingStatus = emitChatTypingStatus;

function sendChatMessage() {
  return function (dispatch, getState) {
    const name = getState().session.userName;
    const message = getState().pages.chatRoom.newMessageText;
    const timestamp = new Date().toUTCString();

    dispatch(newChatMessage({ name, message, timestamp }));
    dispatch(updateChatRoomNewMessageText(''));
    dispatch(updateChatUserTypingStatus(false, name));
  };
}
exports.sendChatMessage = sendChatMessage;
