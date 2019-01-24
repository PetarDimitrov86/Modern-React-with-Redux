import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { query: '' };
  }

  onInputChange = event => {
    this.setState({ query: event.target.value });
  };

  onFormSubmit = event  => {
    event.preventDefault();

    // TODO: make sure we call callback from parent component
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search:</label>
            <input type="text"
              value={this.state.query}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;