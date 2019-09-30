import axios from 'axios';
import { setupCache } from 'axios-cache-adapter'
 
// Create `axios-cache-adapter` instance
const cache = setupCache({
  maxAge:  365 * 24 * 60 * 60 * 1000
})

// Create `axios` instance passing the newly created `cache.adapter`
const api = axios.create({
    adapter: cache.adapter
  })

const tabs = pattern => {
    const baseUrl = 'http://www.songsterr.com/a/ra/songs.json';
    return api.get(`${baseUrl}?pattern=${encodeURIComponent(pattern)}`);
}

export { tabs };
