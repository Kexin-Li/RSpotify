import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setToken } from '../actions/tokenAction';
import { fetchUser } from '../actions/userAction';
import { authURL } from '../config/authKeys';
import Spotify from './Spotify';

class App extends Component {
  componentDidMount() {
    let hashParams = {};
    let e, r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    
    if(!hashParams.access_token) {
      window.location.href = authURL;
    } else {
      this.props.setToken(hashParams.access_token);
    }
  }

  // 在 component 接收到新的 props 时被触发
  componentWillReceiveProps(nextProps) {
    if (nextProps.token) {
      this.props.fetchUser(nextProps.token);
    }
  }

  render() {
    return (
      <div className="app">
        <div className="app_container">
          <Spotify />
        </div>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    token: state.tokenReducer.token,
    user: state.userReducer.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setToken,
    fetchUser
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
