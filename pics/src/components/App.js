import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { images: [] };
    //this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  onSearchSubmit = async term => {
    const response = await axios
      .get(`https://api.unsplash.com/search/photos`, {
        params: {
          query: term
        },
        headers: {
          Authorization:
            'Client-ID 1fd7b73165210f90c272fbc7a23c22479da7254e2ae144dc29c39f1dca294565'
        }
      });
    
    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        {/* The onSubmit is a name that we chose. It can be any name we want */}
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found <strong>{this.state.images.length}</strong> images
      </div>
    );
  }
}

export default App;