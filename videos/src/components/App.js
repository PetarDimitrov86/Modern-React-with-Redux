import React, { Component } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../apis/youtube'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };
  }

  onQuerySubmit = async query => {
    let response = await youtube.get('/search', {
      params: {
        q: query
      }
    });

    this.setState({ videos: response.data.items} );
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onQuerySubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;