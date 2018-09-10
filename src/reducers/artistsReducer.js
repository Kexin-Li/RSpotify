import { FETCH_ARTISTS_SUCCESS, FETCH_ARTISTS_FAILED, SET_ARTISTS_IDS } from "../actions/types";

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_ARTISTS_SUCCESS:
      return { ...state, artists: action.payload, fetchArtistsFailed: false };
    case FETCH_ARTISTS_FAILED:
      return { ...state, fetchArtistsFailed: true };
    case SET_ARTISTS_IDS:
      return { ...state, artistIds: action.payload };
    default:
      return state;
  }
}
