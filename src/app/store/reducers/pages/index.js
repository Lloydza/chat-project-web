import { combineReducers } from 'redux';

import login from './login';
import chatRoom from './chatRoom';

var pages = combineReducers({
	login,
	chatRoom
});
module.exports = pages;
