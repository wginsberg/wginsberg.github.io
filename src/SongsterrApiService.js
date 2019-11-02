import axios from 'axios';

const tabsByArtist = artist => {
  // const baseUrl = 'https://www.songsterr.com/a/ra/songs.json';
  // return axios.get(`${baseUrl}?pattern=${encodeURIComponent(artist)}`)
  return axios.get('https://www.songsterr.com/a/ra/songs/byartists.json?artists=metallica');
};

export { tabsByArtist };
