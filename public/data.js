const track = {
  album: {
    album_type: 'album',
    artists: [{
      external_urls: {
        spotify: 'https://open.spotify.com/artist/3EhbVgyfGd7HkpsagwL9GS',
      },
      href: 'https://api.spotify.com/v1/artists/3EhbVgyfGd7HkpsagwL9GS',
      id: '3EhbVgyfGd7HkpsagwL9GS',
      name: 'Alice Cooper',
      type: 'artist',
      uri: 'spotify:artist:3EhbVgyfGd7HkpsagwL9GS',
    }],
    available_markets: ['AD', 'AE', 'AR', 'AT', 'AU', 'BE', 'BG', 'BH', 'BO', 'BR', 'CA', 'CH', 'CL', 'CO', 'CR', 'CY', 'CZ', 'DE', 'DK', 'DO', 'DZ', 'EC', 'EE', 'EG', 'ES', 'FI', 'FR', 'GB', 'GR', 'GT', 'HK', 'HN', 'HU', 'ID', 'IE', 'IL', 'IN', 'IS', 'IT', 'JO', 'JP', 'KW', 'LB', 'LI', 'LT', 'LU', 'LV', 'MA', 'MC', 'MT', 'MX', 'MY', 'NI', 'NL', 'NO', 'NZ', 'OM', 'PA', 'PE', 'PH', 'PL', 'PS', 'PT', 'PY', 'QA', 'RO', 'SA', 'SE', 'SG', 'SK', 'SV', 'TH', 'TN', 'TR', 'TW', 'US', 'UY', 'VN', 'ZA'],
    external_urls: {
      spotify: 'https://open.spotify.com/album/0lhICEAy0rRGbhvWzlP0Ke',
    },
    href: 'https://api.spotify.com/v1/albums/0lhICEAy0rRGbhvWzlP0Ke',
    id: '0lhICEAy0rRGbhvWzlP0Ke',
    images: [{
      height: 640,
      url: 'https://i.scdn.co/image/ab67616d0000b2730dfeebaf5d196ff2638a3633',
      width: 640,
    }, {
      height: 300,
      url: 'https://i.scdn.co/image/ab67616d00001e020dfeebaf5d196ff2638a3633',
      width: 300,
    }, {
      height: 64,
      url: 'https://i.scdn.co/image/ab67616d000048510dfeebaf5d196ff2638a3633',
      width: 64,
    }],
    name: 'Hey Stoopid',
    release_date: '1991-07-02',
    release_date_precision: 'day',
    total_tracks: 12,
    type: 'album',
    uri: 'spotify:album:0lhICEAy0rRGbhvWzlP0Ke',
  },
  artists: [{
    external_urls: {
      spotify: 'https://open.spotify.com/artist/3EhbVgyfGd7HkpsagwL9GS',
    },
    href: 'https://api.spotify.com/v1/artists/3EhbVgyfGd7HkpsagwL9GS',
    id: '3EhbVgyfGd7HkpsagwL9GS',
    name: 'Alice Cooper',
    type: 'artist',
    uri: 'spotify:artist:3EhbVgyfGd7HkpsagwL9GS',
  }],
  available_markets: ['AD', 'AE', 'AR', 'AT', 'AU', 'BE', 'BG', 'BH', 'BO', 'BR', 'CA', 'CH', 'CL', 'CO', 'CR', 'CY', 'CZ', 'DE', 'DK', 'DO', 'DZ', 'EC', 'EE', 'EG', 'ES', 'FI', 'FR', 'GB', 'GR', 'GT', 'HK', 'HN', 'HU', 'ID', 'IE', 'IL', 'IN', 'IS', 'IT', 'JO', 'JP', 'KW', 'LB', 'LI', 'LT', 'LU', 'LV', 'MA', 'MC', 'MT', 'MX', 'MY', 'NI', 'NL', 'NO', 'NZ', 'OM', 'PA', 'PE', 'PH', 'PL', 'PS', 'PT', 'PY', 'QA', 'RO', 'SA', 'SE', 'SG', 'SK', 'SV', 'TH', 'TN', 'TR', 'TW', 'US', 'UY', 'VN', 'ZA'],
  disc_number: 1,
  duration_ms: 284693,
  explicit: false,
  external_ids: {
    isrc: 'USSM19100028',
  },
  external_urls: {
    spotify: 'https://open.spotify.com/track/7LDTB4kVmrLCU5TqKjZnzm',
  },
  href: 'https://api.spotify.com/v1/tracks/7LDTB4kVmrLCU5TqKjZnzm',
  id: '7LDTB4kVmrLCU5TqKjZnzm',
  is_local: false,
  name: 'Feed My Frankenstein',
  popularity: 59,
  preview_url: 'https://p.scdn.co/mp3-preview/ac7762e0d5067341311bf0bf9b5afe5241287998?cid=3680b1abca094e458e2a9f190f5607d1',
  track_number: 7,
  type: 'track',
  uri: 'spotify:track:7LDTB4kVmrLCU5TqKjZnzm',
};

const tab = {
  id: 24995,
  type: 'Song',
  title: 'Feed My Frankenstein',
  artist: {
    id: 383, type: 'Artist', nameWithoutThePrefix: 'Alice Cooper', useThePrefix: false, name: 'Alice Cooper',
  },
  chordsPresent: false,
  tabTypes: ['PLAYER', 'TEXT_GUITAR_TAB', 'TEXT_BASS_TAB'],
};

const item = { track, tab, url: 'https://www.songsterr.com/a/wsa/alice-cooper-feed-my-frankenstein-tab-s24995t0' };

const data = {
  items: [item],
};

window.data = data;
