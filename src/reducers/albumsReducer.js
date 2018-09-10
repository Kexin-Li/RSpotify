import { FETCH_ALBUMS_SUCCESS, FETCH_ALBUMS_FAILED } from "../actions/types";

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_ALBUMS_SUCCESS:
      return { ...state, albums: action.payload, fetchAlbumsFailed: false };
    case FETCH_ALBUMS_FAILED:
      return { ...state, fetchAlbumsFailed: false };
    default:
      return state;
  }
}
