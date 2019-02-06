import React, { Component } from 'react';

class App extends Component {
  state = { resource: 'posts' };

  render() {
    return (
      <div className='ui container'>
        <div>
          <button className='ui button primary'
            onClick={() => this.setState({ resource: 'posts' })}>
            Posts</button>
          <button className='ui button primary'
            onClick={() => this.setState({ resource: 'todos' })}>
            TODOs</button>
        </div>
        {this.state.resource}
      </div>
    );
  }
}

export default App;