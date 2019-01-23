import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { images: [] };
    //this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  onSearchSubmit = async term => {
    const response = await unsplash.get(`/search/photos`, {
      params: {
        query: term
      }
    });

    this.setState({ images: response.data.results });
  };

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