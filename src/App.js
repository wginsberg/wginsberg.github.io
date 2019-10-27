import React from 'react';
import logo from './logo.svg';
import './App.css';
import classes from './App.module.css';

import { authorize, playlists } from './SpotifyApiService';
import { tabs } from './SongsterrApiService';
import { unfurl } from './OpenGraphService';
// import Track from './Track';
import Tab from './Tab/Tab';

class App extends React.Component {
  state = {
    items: [],
    //
    tracks: [],
    tabs: []
  }

  componentDidMount() {
    if (this.props.state) {
      this.setState(this.props.state);
    } else {
      authorize();
      playlists()
        // .then(response => response.data.items.map(item => item.track))

        // .then(tracks => tracks.map(track => track.artists[0].name))
        // .then(artists => [...new Set(artists)])
        // .then(artists => artists.map(
        //   artist => 
        //       tabs(artist)
        //         .then(response => response.data)
        //         .then(tabs => this.setState(state => ({ tabs: [...state.tabs, ...tabs] }))))
        // )
    }
  }

  render() {
    return (
      <div className="App">
        <div className={classes.TabList}>
          {this.state.items.map(({ track, tab, openGraphData }, i) =>
            (<Tab 
              track={track}
              tab={tab}
              openGraphData={openGraphData}
            />))}
        </div>
      </div>
    );
  }
}

export default App;
