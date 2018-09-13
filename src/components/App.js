import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setToken } from '../actions/tokenAction';
import { fetchUser } from '../actions/userAction';
import { fetchSongs } from '../actions/songsAction';
import { authURL } from '../config/authKeys';
import Spotify from './Spotify';

import './App.css';

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
      // default loading Favorite Songs preview
      this.props.fetchSongs(nextProps.token);
    }
  }

  render() {
    return (
      <div className="app">
        <Spotify />
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    token: state.tokenReducer.token
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setToken,
    fetchUser,
    fetchSongs
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
