import React from 'react';
import logo from './logo.svg';
import './App.css';

import { authorize, playlists } from './SpotifyApiService';
import { tabs } from './SongsterrApiService';
import { unfurl } from './OpenGraphService';
// import Track from './Track';
import Tab from './Tab';

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
  }

  render() {
    return (
      <div className="App">
        {this.state.items.map(({ tab, openGraphData }, i) =>
          (<Tab 
            url={openGraphData.openGraph.url}
            name={openGraphData.openGraph.name}
            description={openGraphData.openGraph.description}
            imageURL={openGraphData.openGraph.image.url}
          />))}
      </div>
    );
  }
}

export default App;
