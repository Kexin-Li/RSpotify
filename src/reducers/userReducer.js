import { FETCH_USER_SUCCESS, FETCH_USER_FAILED } from "../actions/types";

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_USER_SUCCESS:
      return { ...state, user: action.payload, fetchUserError: false };
    case FETCH_USER_FAILED:
      return { ...state, fetchUserError: true };
    default:
      return state;
  }
}
