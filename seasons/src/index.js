import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor(props) {
    // never skip to pass the props to the super! ! !
    super(props);

    this.state = { latitude: null }

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ latitude: position.coords.latitude })
      },
      err => {
        this.setState({ latitude: 'Please allow your browser to access your location' })
      }
    )
  }

  // react component classes should always have a render method
  render() {
    return <div>Latitude: {this.state.latitude} </div>
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));