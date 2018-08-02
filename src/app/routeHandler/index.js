import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';

import { changeRoute }  from 'app/store/actions/index';
import getHistory from 'app/store/history';
const history = getHistory();

// Pages
import LoginPage from 'app/containers/loginPage/index';
import ChatRoomPage from 'app/containers/chatRoomPage/index';

class RouteHandler extends Component {
	componentDidMount() {
		if (!this.props.userName && window.location.pathname !== '/login') {
			this.props.onChangeRoute('/login');
		}
		else if (this.props.userName && window.location.pathname !== '/') {
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

var mapStateToProps = function(state) {
  return {
		userName: state.session.userName
  }
};

var mapDispatchToProps = (dispatch) => {
  return {
  	onChangeRoute: (route) => {
      dispatch(changeRoute(route));
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteHandler);
