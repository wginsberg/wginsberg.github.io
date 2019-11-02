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
      page: 0
    };
  }

  loadNextPage = () => {
    // Test mode
    if (this.props.state) {
      return;
    }
    topTracks(this.state.page)
      .then(response => 
        this.setState(state => 
          ({ 
            page: state.page + 1, 
            items: [...state.items, ...response.data.items]
          })
          )
      )
  }

  componentDidMount() {
    // Test mode
    if (this.props.state) {
      this.setState(this.props.state);
    } else {
      authorize();
      this.loadNextPage();
    }
  }

  render() {
    return (
      <div className="App">
        <div className={classes.TabList}>
          {this.state.items.map((track, i) => (<Tab key={i} track={track} />))}
        </div>
        <button onClick={this.loadNextPage} className="m-8">Load more</button>
      </div>
    );
  }
}

export default App;
