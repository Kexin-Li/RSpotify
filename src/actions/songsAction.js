import axios from 'axios';

const ROOT_URL = 'https://api.spotify.com/v1/me/tracks';

export function fetchSongs(accessToken) {
  const request = axios({
    method: 'GET',
    url: ROOT_URL,
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });

  return (dispatch) => {

  };
}
