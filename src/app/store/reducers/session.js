import * as actions from 'app/store/actions/index';

function sessionReducer(state = { userName: null }, action) {
  switch (action.type) {
    case actions.UPDATE_SESSION_USER_NAME:
      return Object.assign({}, state, {
        userName: action.userName,
      });
    default:
      return state;
  }
}
module.exports = sessionReducer;
