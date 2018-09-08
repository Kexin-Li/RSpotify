import axios from 'axios';
import { 
  FETCH_FEATURED_FAILED, FETCH_FEATURED_SUCCESS, 
  FETCH_NEW_RELEASES_SUCCESS, FETCH_NEW_RELEASES_FAILED,
  FETCH_GENRES_SUCCESS, FETCH_GENRES_FAILED, 
} from './types';

const ROOT_URL = 'https://api.spotify.com/v1/browse';

/**
 * Get a List of Featured Playlists
 * @param {string} accessToken auth token
 */
export function fetchFeatured(accessToken) {
  const request = axios({
    method: 'GET',
    url: `${ROOT_URL}/featured-playlists`,
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });

  return (dispatch) => {
    request.then(res => {
      console.log('featured: ', res);
      dispatch(fetchFeaturedSuccess(res.data.playlists.items));
    }).catch(error => {
      console.log(error);
      dispatch(fetchFeaturedFailed(error));
    });
  };
}

export function fetchFeaturedSuccess(playlist) {
  return {
    type: FETCH_FEATURED_SUCCESS,
    payload: playlist
  }
}

export function fetchFeaturedFailed() {
  return {
    type: FETCH_FEATURED_FAILED
  }
}


/**
 * Get a List of New Releases
 * @param {string} accessToken auth token
 */
export function fetchNewReleases(accessToken) {
  const request = axios({
    method: 'GET',
    url: `${ROOT_URL}/new-releases`,
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });

  return (dispatch) => {
    request.then(res => {
      console.log('newReleases: ',res);
      dispatch(fetchNewReleasesSuccess(res.data.albums.items));
    }).catch(error => {
      console.log(error);
      dispatch(fetchNewReleasesFailed());
    });
  };
}

export function fetchNewReleasesSuccess(newReleases) {
  return {
    type: FETCH_NEW_RELEASES_SUCCESS,
    payload: newReleases
  }
}

export function fetchNewReleasesFailed() {
  return {
    type: FETCH_NEW_RELEASES_FAILED,
  }
}


/**
 * Get a List of Browse Categories
 * @param {string} accessToken auth token
 */
export function fetchGenres(accessToken) {
  const request = axios({
    method: 'GET',
    url: `${ROOT_URL}/categories`,
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });

  return (dispatch) => {
    request.then(res => {
      console.log('genres: ',res);
      dispatch(fetchGenresSuccess(res.data.categories.items));
    }).catch(error => {
      console.log(error);
      dispatch(fetchGenresFailed());
    });
  };
}

export function fetchGenresSuccess(geners) {
  return {
    type: FETCH_GENRES_SUCCESS,
    payload: geners
  }
}

export function fetchGenresFailed() {
  return {
    type: FETCH_GENRES_FAILED
  }
}
