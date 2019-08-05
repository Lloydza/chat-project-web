import { combineReducers } from 'redux';
import login from './login';
import chatRoom from './chatRoom';

const pages = combineReducers({
  login,
  chatRoom,
});
module.exports = pages;
