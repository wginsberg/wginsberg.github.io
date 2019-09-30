import React from 'react';
import logo from './logo.svg';
import './App.css';

import { authorize, playlists } from './SpotifyApiService';
import { tabs } from './SongsterrApiService';
// import Track from './Track';
import Tab from './Tab';

class App extends React.Component {

  state = {
    tracks: [],
    tabs: []
  }

  componentDidMount() {
    authorize();
    playlists()
      .then(response => response.data.items.map(item => item.track))
      .then(tracks => tracks.map(track => track.artists[0].name))
      .then(artists => [...new Set(artists)])
      .then(artists => artists.map(
        artist => 
            tabs(artist)
              .then(response => response.data)
              .then(tabs => this.setState(state => ({ tabs: [...state.tabs, ...tabs] }))))
      )
  }

  render() {
    return (
      <div className="App">
        {this.state.tabs.map((tab, i) =>
          <Tab tab={tab} key={i} />)}
      </div>
    );
  }
}

export default App;
