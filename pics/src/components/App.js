import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends Component {
  onSearchSubmit(term) {
    axios
      .get(`https://api.unsplash.com/search/photos`, {
        params: {
          query: term
        },
        headers: {
          Authorization:
            'Client-ID 1fd7b73165210f90c272fbc7a23c22479da7254e2ae144dc29c39f1dca294565'
        }
      })
      .then(response => {
        console.log(response.data.results.length);
      });
  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        {/* The onSubmit is a name that we chose. It can be any name we want */}
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;