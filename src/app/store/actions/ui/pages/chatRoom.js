export const UPDATE_CHAT_ROOM_PAGE_USERS = 'UPDATE_CHAT_ROOM_PAGE_USERS';
export const UPDATE_CHAT_ROOM_NEW_MESSAGE_TEXT = 'UPDATE_CHAT_ROOM_NEW_MESSAGE_TEXT';

export const updateChatRoomUsers = (users) => {
  return {
    type: UPDATE_CHAT_ROOM_PAGE_USERS,
    users,
  };
};

export const updateChatRoomNewMessageText = (newMessageText) => {
  return {
    type: UPDATE_CHAT_ROOM_NEW_MESSAGE_TEXT,
    newMessageText,
  };
};
