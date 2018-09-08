// see: https://developer.spotify.com/documentation/general/guides/authorization-guide/#implicit-grant-flow
const root_url = 'https://accounts.spotify.com/authorize';
const client_id = '020b839817e645cfad615c22667ac2ff';
const scope = 'playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state';
const response_type='token';
const redirect_uri='http://localhost:3000/callback';

export const authURL = `${root_url}?client_id=${client_id}&scope=${scope}&response_type=${response_type}&redirect_uri=${redirect_uri}`;