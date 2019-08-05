import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import { changeRoute } from 'app/store/actions/index';
import getHistory from 'app/store/history';

// Pages
import LoginPage from 'app/containers/loginPage/index';
import ChatRoomPage from 'app/containers/chatRoomPage/index';

const history = getHistory();

class RouteHandler extends Component {
  componentDidMount() {
    const { userName, onChangeRoute } = this.props;
    if (!userName && window.location.pathname !== '/login') {
      onChangeRoute('/login');
    } else if (userName && window.location.pathname !== '/') {
      onChangeRoute('/');
    }
  }

  render() {
    return (
      <div>
        <Router history={history}>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route path="*" component={ChatRoomPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

RouteHandler.propTypes = {
  userName: PropTypes.string,
  onChangeRoute: PropTypes.func.isRequired,
};

RouteHandler.defaultProps = {
  userName: '',
};

const mapStateToProps = (state) => {
  return {
    userName: state.session.userName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeRoute: (route) => {
      dispatch(changeRoute(route));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RouteHandler);
