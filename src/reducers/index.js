import { combineReducers } from 'redux';
import tokenReducer from './tokenReducer';
import userReducer from './userReducer';
import uiReducer from './uiReducer';
import browseReducer from './browseReducer';

export default combineReducers({
  tokenReducer,
  userReducer,
  uiReducer,
  browseReducer
});
