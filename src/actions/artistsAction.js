import axios from 'axios';
import { FETCH_ARTISTS_SUCCESS, FETCH_ARTISTS_FAILED, SET_ARTISTS_IDS } from './types';

const ROOT_URL = 'https://api.spotify.com/v1/artists';

export function fetchArtists(accessToken, artistIds) {
  const request = axios({
    method: 'GET',
    url: `${ROOT_URL}?ids=${artistIds}`,
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });

  return (dispatch) => {
    request.then(res => {
      console.log('artists: ', res);
      dispatch(fetchArtistsSuccess(res.data.artists));
    }).catch(error => {
      dispatch(fetchArtistsFailed(error));
    })
  };
}

export function fetchArtistsSuccess(artists) {
  return {
    type: FETCH_ARTISTS_SUCCESS,
    payload: artists
  };
}

export function fetchArtistsFailed(error) {
  return {
    type: FETCH_ARTISTS_FAILED,
  };
}

export function setArtistIds(artistIds) {
  return {
    type: SET_ARTISTS_IDS,
    payload: artistIds
  }
}
