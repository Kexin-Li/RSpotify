import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setToken } from '../actions/tokenAction';
import { fetchUser } from '../actions/userAction';
import { fetchSongs } from '../actions/songsAction';
import { authURL_prod } from '../config/authKeys';
import Spotify from './Spotify';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ''
    };
  }

  componentDidMount() {
    let hashParams = {};
    let e, r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    
    // if user didn't login then bring them to login page, otherwise save the token.
    if(!hashParams.access_token) {
      window.location.href = authURL_prod;
    } else {
      this.props.setToken(hashParams.access_token);
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.token) {
      return {
        token: nextProps.token
      };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.token && this.props.token) {
      this.props.fetchUser(this.props.token);
      // default loading Favorite Songs preview
      this.props.fetchSongs(this.props.token);
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
