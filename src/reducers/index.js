import { combineReducers } from 'redux';
import tokenReducer from './tokenReducer';
import userReducer from './userReducer';
import uiReducer from './uiReducer';
import browseReducer from './browseReducer';
import songsReducer from './songsReducer';
import albumsReducer from './albumsReducer';
import artistsReducer from './artistsReducer';

export default combineReducers({
  tokenReducer,
  userReducer,
  uiReducer,
  browseReducer,
  songsReducer,
  albumsReducer,
  artistsReducer
});
