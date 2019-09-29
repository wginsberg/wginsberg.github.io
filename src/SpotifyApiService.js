import axios from 'axios';

const client_id = '3680b1abca094e458e2a9f190f5607d1';
const redirect_uri = 'http://localhost:3000';

let authToken;

const authorize = () => {
  console.log('authorizing...');

  const hashFragment = document.location.hash.split('&').find( s => s.match(/#?access_token=/))
  const accessToken = hashFragment ? hashFragment.split('=')[1] : '';

  if (accessToken) {
    authToken = accessToken;
    axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
  } else {
    var url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&scope=' + encodeURIComponent('user-read-recently-played');
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);

    window.location = url;
  }
}

const playlists = () => {
  console.log('fetching playlists...');

  return axios.get('https://api.spotify.com/v1/me/player/recently-played');
}

export { authorize, playlists };
