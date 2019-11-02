import axios from 'axios';

const clientId = '3680b1abca094e458e2a9f190f5607d1';
const redirectURI = 'http://localhost:3000';

let authToken;

const authorize = () => {
  const hashFragment = document.location.hash.split('&').find((s) => s.match(/#?access_token=/));
  const accessToken = hashFragment ? hashFragment.split('=')[1] : '';

  if (accessToken) {
    authToken = accessToken;
    axios.defaults.headers.common.Authorization = `Bearer ${authToken}`;
  } else {
    let url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += `&scope=${encodeURIComponent('user-top-read')}`;
    url += `&client_id=${encodeURIComponent(clientId)}`;
    url += `&redirect_uri=${encodeURIComponent(redirectURI)}`;

    window.location = url;
  }
};

const topTracks = page => {
  const pageSize = 25;
  const baseApiUrl = 'https://api.spotify.com/v1/me/top/tracks';
  return axios.get(`${baseApiUrl}?limit=${pageSize}&offset=${page * pageSize}&time_range=short_term`);
};

export { authorize, topTracks };
