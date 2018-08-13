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
    const { userName } = this.props;
    if (!userName && window.location.pathname !== '/login') {
      this.props.onChangeRoute('/login');
    } else if (userName && window.location.pathname !== '/') {
      this.props.onChangeRoute('/');
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
}

const mapStateToProps = function (state) {
  return {
    userName: state.session.userName,
  };
};

const mapDispatchToProps = dispatch => ({
  onChangeRoute: (route) => {
    dispatch(changeRoute(route));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RouteHandler);
