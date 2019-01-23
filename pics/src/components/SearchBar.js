import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term: '' };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type='text' 
            value={this.state.term} 
            onChange={(e) => this.setState({ term: e.target.value })} 
            />
            {/* // Alternative version
          <input type='text' onChange={(e) => console.log(e.target.value)} /> */}
          </div>
        </form>
      </div>
    );
  };
}

export default SearchBar;