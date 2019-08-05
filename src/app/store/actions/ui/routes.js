import getHistory from '../../history';

export const changeRoute = (route) => {
  return () => {
    const history = getHistory();
    history.push(route);
  };
};

export const previousRoute = () => {
  return () => {
    const history = getHistory();
    history.goBack();
  };
};
