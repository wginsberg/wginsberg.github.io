import React from 'react';
import './App.css';
import classes from './App.module.css';

import { authorize, topTracks } from './SpotifyApiService';

import Tab from './Tab/Tab';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }


  async fetchData() {
    await authorize();
    const tracks = await topTracks().then(response => response.data.items);   
    return { items: tracks };
  }

  componentDidMount() {
    if (this.props.state) {
      this.setState(this.props.state);
    } else {
      this.fetchData().then(data => this.setState(data));
    }
  }

  render() {
    return (
      <div className="App">
        <div className={classes.TabList}>
          {this.state.items.map((track, i) => (<Tab key={i} track={track} />))}
        </div>
      </div>
    );
  }
}

export default App;
