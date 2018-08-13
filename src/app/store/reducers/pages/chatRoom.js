import * as actions from 'app/store/actions/index';

function chatRoomReducer(state = { users: [], newMessageText: '' }, action) {
  switch (action.type) {
    case actions.UPDATE_CHAT_ROOM_PAGE_USERS:
      return Object.assign({}, state, {
        users: action.users,
      });
    case actions.UPDATE_CHAT_ROOM_NEW_MESSAGE_TEXT:
      return Object.assign({}, state, {
        newMessageText: action.newMessageText,
      });
    default:
      return state;
  }
}
module.exports = chatRoomReducer;
