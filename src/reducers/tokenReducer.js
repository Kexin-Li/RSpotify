import { SET_TOKEN } from "../actions/types";

export default function(state = {}, action) {
  switch(action.type) {
    case SET_TOKEN:
      return { ...state, token: action.payload };
    default:
      return state;
  }
}
