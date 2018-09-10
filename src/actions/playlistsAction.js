import axios from 'axios';
import { FETCH_PLAYLISTS_SUCCESS, FETCH_PLAYLISTS_FAILED } from './types';

const ROOT_URL = 'https://api.spotify.com/v1/me/playlists';

export default function fetchPlaylists(accessToken) {
  const request = axios({
    method: 'GET',
    url: ROOT_URL,
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })

  return (dispatch) => {
    request.then(res => {
      console.log('playlists: ', res);
      dispatch(fetchPlaylistsSuccess(res.data));
    }).catch(error => {
      dispatch(fetchPlaylistsFailed(error));
    });
  };
}

export default function fetchPlaylistsSuccess(playlists) {
  return {
    type: FETCH_PLAYLISTS_SUCCESS,
    payload: playlists
  }
}

export default function fetchPlaylistsFailed(error) {
  return {
    type: FETCH_PLAYLISTS_FAILED
  }
}
