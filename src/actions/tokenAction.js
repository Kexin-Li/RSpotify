import { SET_TOKEN } from './types';

export const setToken = (token) => {
  return {
    type: SET_TOKEN,
    payload: token
  };
};
