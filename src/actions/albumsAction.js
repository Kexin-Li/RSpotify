import axios from 'axios';
import { FETCH_ALBUMS_FAILED, FETCH_ALBUMS_SUCCESS } from './types';

const ROOT_URL = '	https://api.spotify.com/v1/me/albums';

/**
 * Get Several Albums
 * @param {string} accessToken auth token
 */
export function fetchAlbums(accessToken) {
  const request = axios({
    method: 'GET',
    url: ROOT_URL,
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });

  return (dispatch) => {
    request.then(res => {
      console.log('albums: ', res);
      dispatch(fetchAlbumsSuccess(res.data.items));
    }).catch(error => {
      dispatch(fetchAlbumsFailed(error));
    });
  };
}

export function fetchAlbumsSuccess(albums) {
  return {
    type: FETCH_ALBUMS_SUCCESS,
    payload: albums
  }
}

export function fetchAlbumsFailed(error) {
  return {
    type: FETCH_ALBUMS_FAILED
  };
}
