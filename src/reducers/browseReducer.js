import { 
  FETCH_FEATURED_FAILED, FETCH_FEATURED_SUCCESS, 
  FETCH_NEW_RELEASES_SUCCESS, FETCH_NEW_RELEASES_FAILED,
  FETCH_GENRES_SUCCESS, FETCH_GENRES_FAILED, 
} from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_FEATURED_SUCCESS:
      return { ...state, view: action.payload, fetchFeaturedFailed: false };
    case FETCH_FEATURED_FAILED:
      return { ...state, fetchFeaturedFailed: true };
    case FETCH_NEW_RELEASES_SUCCESS:
      return { ...state, view: action.payload, fetchNewReleasesFailed: false };
    case FETCH_NEW_RELEASES_FAILED:
      return { ...state, fetchNewReleasesFailed: true };
    case FETCH_GENRES_SUCCESS:
      return { ...state, view: action.payload, fetchGenresFailed: false };
    case FETCH_GENRES_FAILED:
      return { ...state, fetchGenresFailed: false };
    default:
      return state;
  }
}
