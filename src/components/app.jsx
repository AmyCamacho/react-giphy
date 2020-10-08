import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "jUwpNzg9IcyrK"
    }

    this.search ("disney");
  }

  search = (query) => {
    // TODO: API call
    giphy('pA4QfJ2QZz6OFb33Dwu42YCrvEQRQrqt').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
        // Res contains gif data!
        this.setState ({
          gifs: result.data
        });
    });
  }

  render() {
    const gifs = [
      { id: "LbOm2qGo91bZ6"},
      { id: "jUwpNzg9IcyrK"},
      { id: "oWjyixDbWuAk8"}
    ]
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction = {this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs = {this.state.gifs}/>
        </div>
      </div>
      );
  }
}

export default App;
