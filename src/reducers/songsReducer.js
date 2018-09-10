import { 
  FETCH_SONGS_SUCCESS, FETCH_SONGS_FAILED, 
  FETCH_RECENTLY_PLAYED_SUCCESS, FETCH_RECENTLY_PLAYED_FAILED
} from "../actions/types";

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_SONGS_SUCCESS:
      return { ...state, songs: action.payload, fetchSongsFailed: false };
    case FETCH_SONGS_FAILED:
      return { ...state, fetchSongsFailed: true };
    case FETCH_RECENTLY_PLAYED_SUCCESS:
      return { ...state, songs: action.payload, fetchRecentlyPlayedFailed: false };
    case FETCH_RECENTLY_PLAYED_FAILED:
      return { ...state, fetchRecentlyPlayedFailed: true };
    default:
      return state;
  }
}
