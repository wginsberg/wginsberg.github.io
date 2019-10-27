const openGraphData = {
  hybridGraph: {
    title: 'Dare Tab by Stan Bush - Lead Guitar - Overdriven Guitar', description: 'Dare by Stan Bush tab with free online tab player. One accurate version. Recommended by The Wall Street Journal', type: 'music.song', image: 'https://www.songsterr.com/static/media/large.bd3b940f.png', url: 'https://www.songsterr.com/a/wsa/stan-bush-dare-tab-s54352t0', favicon: 'https://www.songsterr.com/favicon.ico', site_name: 'Songsterr Tabs with Rhythm',
  },
  openGraph: {
    title: 'Dare Tab by Stan Bush - Lead Guitar - Overdriven Guitar', description: 'Dare by Stan Bush tab with free online tab player. One accurate version. Recommended by The Wall Street Journal', type: 'music.song', image: { url: 'https://www.songsterr.com/static/media/large.bd3b940f.png' }, url: 'https://www.songsterr.com/a/wsa/stan-bush-dare-tab-s54352t0', site_name: 'Songsterr Tabs with Rhythm',
  },
  htmlInferred: {
    title: 'Dare Tab by Stan Bush - Lead Guitar - Overdriven Guitar', description: 'Dare by Stan Bush tab with free online tab player. One accurate version. Recommended by The Wall Street Journal', type: 'site', image: 'https://www.songsterr.com/static/media/large.bd3b940f.png', url: 'https://www.songsterr.com/a/wsa/stan-bush-dare-tab-s54352t0', favicon: 'https://www.songsterr.com/favicon.ico', site_name: 'Dare Tab by Stan Bush', images: ['https://www.songsterr.com/static/media/get-ios.cae879b3.svg'],
  },
  requestInfo: {
    redirects: 0, host: 'https://www.songsterr.com/a/wsa/stan-bush-dare-tab-s54352t0', responseCode: 200, cache_ok: true, max_cache_age: 432000000, accept_lang: 'en-US,en;q=0.9', url: 'http://www.songsterr.com/a/wa/song?id=54352', full_render: false, use_proxy: false, responseContentType: 'text/html; charset=utf-8',
  },
  accept_lang: 'en-US,en;q=0.9',
  is_cache: false,
  url: 'http://www.songsterr.com/a/wa/song?id=54352',
};

const unfurl = encodedURI => {
    // TODO 
    // GET https://opengraph.io/api/1.1/site/<URL encoded site URL>?app_id=xxxxxxx
    return new Promise((resolve) => resolve(openGraphData));
}

export default unfurl;
