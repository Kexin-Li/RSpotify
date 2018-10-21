// see: https://developer.spotify.com/documentation/general/guides/authorization-guide/#implicit-grant-flow
const root_url = 'https://accounts.spotify.com/authorize';
const client_id_dev = '020b839817e645cfad615c22667ac2ff';
const client_id_prod = '88219f9b923d4361bcaf6f17741317e9';
const scope = 'playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state';
const response_type='token';

const redirect_uri_dev='http://localhost:3000/callback';
const redirect_uri_prod='https://kexin-li.github.io/RSpotify/callback';

export const authURL_dev = `${root_url}?client_id=${client_id_dev}&scope=${scope}&response_type=${response_type}&redirect_uri=${redirect_uri_dev}`;

export const authURL_prod = `${root_url}?client_id=${client_id_prod}&scope=${scope}&response_type=${response_type}&redirect_uri=${redirect_uri_prod}`;