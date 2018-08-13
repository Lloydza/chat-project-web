import { combineReducers } from 'redux';

import session from './session';
import chat from './chat';
import pages from './pages/index';

const appReducer = combineReducers({
  pages,
  session,
  chat,
});

const rootReducer = (state, action) => appReducer(state, action);

module.exports = rootReducer;
