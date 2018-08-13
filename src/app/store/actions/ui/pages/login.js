export const UPDATE_LOGIN_PAGE_IS_LOADING = 'UPDATE_LOGIN_PAGE_IS_LOADING';
export const UPDATE_LOGIN_PAGE_USER_NAME = 'UPDATE_LOGIN_PAGE_USER_NAME';

function updateLoginPageIsLoading(isLoading) {
  return {
    type: UPDATE_LOGIN_PAGE_IS_LOADING,
    isLoading,
  };
}
exports.updateLoginPageIsLoading = updateLoginPageIsLoading;

function updateLoginPageUserName(userName) {
  return {
    type: UPDATE_LOGIN_PAGE_USER_NAME,
    userName,
  };
}
exports.updateLoginPageUserName = updateLoginPageUserName;
