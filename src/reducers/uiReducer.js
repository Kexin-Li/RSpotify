import { UPDATE_PREVIEW_TITLE } from '../actions/types';

const defaultState = {
  title: 'Favorite Songs'
};

export default function(state = defaultState, action) {
  switch(action.type) {
    case UPDATE_PREVIEW_TITLE:
      return { ...state, title: action.payload };
    default:
      return state;
  }
}