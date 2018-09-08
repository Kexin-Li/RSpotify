import axios from 'axios';
import { FETCH_USER, FETCH_USER_FAIL, FETCH_USER_SUCCESS } from './types';

const url = 'https://api.spotify.com/v1/me';

export function fetchUser(accessToken) {
  const request = axios({
    url: url,
    headers: { 
      'Authorization': `Bearer ${accessToken}`
    },
  });

  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: FETCH_USER, payload: data });
    });
  };
}


export function fetchUserSuccess(user) {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user
  }
}

export function fetchUserFail() {
  return {
    type: FETCH_USER_FAIL,
  }
}
