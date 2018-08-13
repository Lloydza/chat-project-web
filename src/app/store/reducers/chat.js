/* eslint no-param-reassign: 0 */ // --> OFF
import * as actions from 'app/store/actions/index';

function chatReducer(state = { messages: [], onlineStatus: {}, typingStatus: {} }, action) {
  switch (action.type) {
    case actions.NEW_CHAT_MESSAGE:
      return Object.assign({}, state, {
        messages: [
          action.data,
          ...state.messages,
        ],
      });
    case actions.ADD_CHAT_MESSAGE:
      return Object.assign({}, state, {
        messages: [
          action.data,
          ...state.messages,
        ],
      });
    case actions.UPDATE_CHAT_USER_ONLINE_STATUS:
      state.onlineStatus[action.name] = action.isOnline;
      state.onlineStatus = Object.assign({}, state.onlineStatus);
      return Object.assign({}, state);
    case actions.UPDATE_CHAT_USER_TYPING_STATUS:
      state.typingStatus[action.name] = action.isTyping;
      state.typingStatus = Object.assign({}, state.typingStatus);
      return Object.assign({}, state);
    default:
      return state;
  }
}
module.exports = chatReducer;
