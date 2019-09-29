import React from 'react';
import logo from './logo.svg';
import './App.css';

import { authorize, playlists } from './SpotifyApiService';
import Track from './Track';

class App extends React.Component {

  state = {
    tracks: []
  }

  componentDidMount() {
    authorize();
    playlists()
      .then(response =>
        response.data.items.map(item => item.track)
      )
      .then(tracks => this.setState({ tracks }));
  }

  render() {
    return (
      <div className="App">
        {this.state.tracks.map((track, i) =>
          <Track track={track} key={i} />)}
      </div>
    );
  }
}

export default App;
