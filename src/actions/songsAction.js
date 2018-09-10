import _ from 'lodash';
import axios from 'axios';
import { 
  FETCH_SONGS_SUCCESS, FETCH_SONGS_FAILED,
  FETCH_RECENTLY_PLAYED_SUCCESS, FETCH_RECENTLY_PLAYED_FAILED 
} from './types';
import { setArtistIds } from './artistsAction';

const SONGS_URL = 'https://api.spotify.com/v1/me/tracks';
const PLAYER_URL = '	https://api.spotify.com/v1/me/player';

/**
 * Get a User's Saved Tracks
 * @param {string} accessToken auth token
 */
export function fetchSongs(accessToken) {
  const request = axios({
    method: 'GET',
    url: SONGS_URL,
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });

  return (dispatch) => {
    request.then(res => {
      console.log('favorite:', res);

      let artistIds = _.uniqBy(res.data.items, (item) => {
        return item.track.artists[0].name;
      }).map(item => {
        return item.track.artists[0].id;
      }).join(',');

      dispatch(setArtistIds(artistIds));
      dispatch(fetchSongsSuccess(res.data.items));
    }).catch(error => {
      dispatch(fetchSongsFailed(error));
    });
  };
}

export function fetchSongsSuccess(songs) {
  return {
    type: FETCH_SONGS_SUCCESS,
    payload: songs
  };
}

export function fetchSongsFailed(error) {
  return {
    type: FETCH_SONGS_FAILED,
  };
}

/**
 * Get the Current User's Recently Played Tracks
 * @param {string} accessToken auth token
 */
export function fetchRecentlyPlayed(accessToken) {
  const url = `${PLAYER_URL}/recently-played`;

  const request = axios({
    method: 'GET',
    url: url,
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });

  return (dispatch) => {
    request.then(res => {
      console.log('recently played:', res);
      dispatch(fetchRecentlyPlayedSuccess(res.data.items));
    }).catch(error => {
      dispatch(fetchRecentlyPlayedFailed(error));
    });
  };
}

export function fetchRecentlyPlayedSuccess(recentlyPlayed) {
  return {
    type: FETCH_RECENTLY_PLAYED_SUCCESS,
    payload: recentlyPlayed
  };
}

export function fetchRecentlyPlayedFailed(error) {
  return {
    type: FETCH_RECENTLY_PLAYED_FAILED,
  };
}
