import React, { Component } from 'react';

class LanguageSelector extends Component {
  render() {
    return (
      <div>
        Select a language:
          <i className='flag us' onClick={() => this.props.onLanguageChange('english')} />
        <i className='flag nl' onClick={() => this.props.onLanguageChange('dutch')} />
      </div>
    );
  }
}

export default LanguageSelector;