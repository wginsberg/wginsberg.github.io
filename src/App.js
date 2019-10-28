import React from 'react';
import './App.css';
import classes from './App.module.css';

import { authorize, topArtists } from './SpotifyApiService';
import { tabs } from './SongsterrApiService';
// import Track from './Track';
import Tab from './Tab/Tab';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      artists: [],
    };
  }

  componentDidMount() {
    if (this.props.state) {
      this.setState(this.props.state);
    } else {
      this.fetchData().then(data => this.setState(data));

      // fetchData(data => this.setState(data));

      // authorize();
      // playlists()
      //   .then(response => response.data.items.map(item => item.track))

      //   // .then(tracks => this.setState({tracks}));

      //   .then(tracks => tracks.map(track => ({track})))

      //   // .then(tracks => tracks.map(track => track.artists[0].name))

      //   .then(items => items.map(({ track }) => track.artists[0].name))

      //   // .then(artists => [...new Set(artists)])
      //   // .then(artists => artists.map(
      //   //   artist =>
      //   //       tabs(artist)
      //   //         .then(response => response.data)
      //   //         .then(tabs => this.setState(state => ({ tabs: [...state.tabs, ...tabs] }))))
      //   // )
    }
  }


  async fetchData() {
    await authorize();
    const artists = await topArtists(this.state.artists.length)
      .then(response => response.data.items);

    return { artists };

    // const tracks = playlists.data.items.map(item => item.track);

    // const artistsWithDuplicates = tracks.map(track => track.artists[0].name);
    // // const artists = [...new Set(artistsWithDuplicates)];
    // const artist = artistsWithDuplicates[0];

    // const tabs = await tabs(artist).then(response => response.data);


    // const items = tabs.map((tab, i) => ({track, }))
    // this.setState({})

    // // const openGraphData = await unfurl(tabs)
  }

  render() {
    return (
      <div className="App">
        <div className={classes.TabList}>
          {this.state.items.map(({ track, tab, url }, i) => (
            <Tab
              track={track}
              tab={tab}
              url={url}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
