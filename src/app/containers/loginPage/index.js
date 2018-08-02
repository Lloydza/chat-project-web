import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from 'app/content/styles/containers/loginPage/index.css';

import FullPageLoader from 'app/components/fullPageLoader';

import { 
  doLogin,
  updateLoginPageUserName
} from 'app/store/actions';

class LoginPage extends Component {
  componentDidMount() {
    this.loginInput.focus();
  }

  handleLogin = (e) => {
    e.preventDefault();
    this.props.onLogin();
  }

  handleUpdateLoginPageUserName = (e) => {
    this.props.onUpdateLoginPageUserName(e.target.value);
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.onLogin();
    }
  }

  render() {
    if (this.props.page.isLoading) {
      return <FullPageLoader />;
    }
    
    return (
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.headerContainer}>
            <label className={styles.pageHeader}>Please choose a chat name to log in:</label>
          </div>
          <div>
            <input
              type="text"
              ref={(input) => { this.loginInput = input; }}
              onKeyPress={this.handleKeyPress}
              className={styles.userName}
              placeholder='Enter chat name...'
              value={this.props.page.userName}
              onChange={this.handleUpdateLoginPageUserName}
            />
            <input type="button" className={styles.button} onClick={this.handleLogin} value="LOGIN" />
          </div>
        </div>
      </div>
    );
  }
};

var mapStateToProps = function(state) {
  return {
    page: state.pages.login
  }
};

var mapDispatchToProps = (dispatch) => {
  return {
    onUpdateLoginPageUserName: (userName) => {
      dispatch(updateLoginPageUserName(userName));
    },
    onLogin: () => {
      dispatch(doLogin());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
