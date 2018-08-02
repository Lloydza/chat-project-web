export const UPDATE_SESSION_USER_NAME = 'UPDATE_SESSION_USER_NAME';

import { updateLoginPageIsLoading, startChat } from 'app/store/actions/index';

function updateSessionUserName(userName) {
	return {
		type: UPDATE_SESSION_USER_NAME,
		userName: userName
	}
};
exports.updateSessionUserName = updateSessionUserName;

function doLogin() {
	return function (dispatch, getState) {
		const userName = getState().pages.login.userName.trim();

		if (!userName) {
			return;
		}

		dispatch(updateLoginPageIsLoading(true));
		dispatch(updateSessionUserName(userName));
		dispatch(startChat());
	}
};
exports.doLogin = doLogin;
