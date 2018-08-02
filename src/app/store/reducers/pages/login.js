import * as actions from 'app/store/actions/index';

function loginReducer(state = { isLoading: false, userName: '' }, action) {
	switch (action.type) {
    case actions.UPDATE_LOGIN_PAGE_IS_LOADING:
			return Object.assign({}, state, {
				isLoading: action.isLoading,
			});
		case actions.UPDATE_LOGIN_PAGE_USER_NAME:
			return Object.assign({}, state, {
				userName: action.userName.trim(),
			});
		default:
			return state
	}
};
module.exports = loginReducer;
