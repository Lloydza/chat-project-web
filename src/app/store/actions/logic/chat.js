import { updateChatRoomNewMessageText } from 'app/store/actions/index';

export const START_CHAT = 'START_CHAT';
export const NEW_CHAT_MESSAGE = 'NEW_CHAT_MESSAGE';
export const ADD_CHAT_MESSAGE = 'ADD_CHAT_MESSAGE';
export const EMIT_CHAT_TYPING_STATUS = 'EMIT_CHAT_TYPING_STATUS';
export const UPDATE_CHAT_USER_ONLINE_STATUS = 'UPDATE_CHAT_USER_ONLINE_STATUS';
export const UPDATE_CHAT_USER_TYPING_STATUS = 'UPDATE_CHAT_USER_TYPING_STATUS';

export const startChat = () => {
  return {
    type: START_CHAT,
  };
};

export const newChatMessage = (data) => {
  return {
    type: NEW_CHAT_MESSAGE,
    data,
  };
};

export const addChatMessage = (data) => {
  return {
    type: ADD_CHAT_MESSAGE,
    data,
  };
};

export const updateChatUserOnlineStatus = (isOnline, name) => {
  return {
    type: UPDATE_CHAT_USER_ONLINE_STATUS,
    isOnline,
    name,
  };
};

export const updateChatUserTypingStatus = (isTyping, name) => {
  return {
    type: UPDATE_CHAT_USER_TYPING_STATUS,
    isTyping,
    name,
  };
};

export const emitChatTypingStatus = () => {
  return {
    type: EMIT_CHAT_TYPING_STATUS,
  };
};

export const sendChatMessage = () => {
  return (dispatch, getState) => {
    const name = getState().session.userName;
    const message = getState().pages.chatRoom.newMessageText;
    const timestamp = new Date().toUTCString();

    dispatch(newChatMessage({ name, message, timestamp }));
    dispatch(updateChatRoomNewMessageText(''));
    dispatch(updateChatUserTypingStatus(false, name));
  };
};
