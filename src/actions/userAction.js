import axios from 'axios';
import { FETCH_USER_FAILED, FETCH_USER_SUCCESS } from './types';

const ROOT_URL = 'https://api.spotify.com/v1/me';

export function fetchUser(accessToken) {
  const request = axios({
    method: 'GET',
    url: ROOT_URL,
    headers: { 
      'Authorization': `Bearer ${accessToken}`
    },
  });

  return (dispatch) => {
    request.then(res => {
      // if spotify says unauthorized then send them to home page
      if (res.statusText === 'Unauthorized') {
        window.location.href = './';
      }
      dispatch(fetchUserSuccess(res.data));
    }).catch(error => {
      dispatch(fetchUserFailed(error));
    })
  };
}

export function fetchUserSuccess(user) {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user
  }
}

export function fetchUserFailed(error) {
  return {
    type: FETCH_USER_FAILED
  }
}
