import { 
  FETCH_SONGS_SUCCESS, FETCH_SONGS_FAILED, 
  FETCH_RECENTLY_PLAYED_SUCCESS, FETCH_RECENTLY_PLAYED_FAILED, 
  PLAY_SONG, PAUSE_SONG, STOP_SONG, RESUME_SONG
} from "../actions/types";

const defaultState = {
  songPlaying: false,
  timeElapsed: 0,
  songId: 0,
  songPaused: true
};

export default function(state = defaultState, action) {
  switch(action.type) {
    case FETCH_SONGS_SUCCESS:
      return { ...state, songs: action.payload, fetchSongsFailed: false };
    case FETCH_SONGS_FAILED:
      return { ...state, fetchSongsFailed: true };
    case FETCH_RECENTLY_PLAYED_SUCCESS:
      return { ...state, songs: action.payload, fetchRecentlyPlayedFailed: false };
    case FETCH_RECENTLY_PLAYED_FAILED:
      return { ...state, fetchRecentlyPlayedFailed: true };
    case PLAY_SONG:
      return {
        ...state,
        songPlaying: true,
        songDetail: action.payload,
        songId: action.payload.id,
        timeElapsed: 0,
        songPaused: false
      };
    case STOP_SONG:
      return {
        ...state,
        songPlaying: false,
        songDetail: null,
        timeElapsed: 0,
        songPaused: true
      };
    case PAUSE_SONG:
      return { ...state, songPaused: true };
    case RESUME_SONG:
      return { ...state, songPaused: false };
    default:
      return state;
  }
}
