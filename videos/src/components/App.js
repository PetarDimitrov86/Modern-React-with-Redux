import React, { Component } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
  }

  onQuerySubmit = async query => {
    const response = await youtube.get('/search', {
      params: {
        q: query
      }
    });

    this.setState({ videos: response.data.items });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onQuerySubmit} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;