import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term: '' };

  // alternative way of setting up the this in the function
  // constructor(props) {
  //   super(props);
  //   this.onFormSubmit = this.onFormSubmit.bind(this);
  // }

  // Preferred method to point to the correct this. Important to use an arrow function here
  onFormSubmit = event => {
    event.preventDefault();
    
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
        {/* Third way to point to the correct this
        <form className="ui form" onSubmit={(e) => this.onFormSubmit(e)}> */}
          <div className="field">
            <label>Image Search</label>
            <input type='text'
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  };
}

export default SearchBar;