import { updateLoginPageIsLoading, startChat } from 'app/store/actions/index';

export const UPDATE_SESSION_USER_NAME = 'UPDATE_SESSION_USER_NAME';

export const updateSessionUserName = (userName) => {
  return {
    type: UPDATE_SESSION_USER_NAME,
    userName,
  };
};

export const doLogin = () => {
  return (dispatch, getState) => {
    const userName = getState().pages.login.userName.trim();

    if (!userName) {
      return;
    }

    dispatch(updateLoginPageIsLoading(true));
    dispatch(updateSessionUserName(userName));
    dispatch(startChat());
  };
};
