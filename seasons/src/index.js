import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  state = { latitude: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude, errorMessage: '' }),
      err => this.setState({ errorMessage: err.message, latitude: null })
    );
  }

  // react component classes should always have a render method
  render() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.latitude) {
      return <div>Latitude: {this.state.latitude}</div>;
    }

    return <div>Loading...</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));