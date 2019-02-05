import React, { Component } from 'react';
import UserCreate from './UserCreate';
import LanguageSelector from './LanguageSelector';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class App extends Component {
  state = { language: 'english', color: 'primary' };

  onLanguageChange = language => {
    this.setState({ language });
  }

  onColorChange = color => {
    this.setState({ color });
  }

  render() {
    return (
      <div className='ui container'>
        <LanguageSelector onLanguageChange={this.onLanguageChange} />
        <div>
          Select a color:
          <i className='tint icon red' onClick={() => this.onColorChange('red')} />
          <i className='tint icon blue' onClick={() => this.onColorChange('primary')} />
        </div>
        <ColorContext.Provider value={this.state.color}>
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>

        {/* 
        Always gets the hardcoded value from here
        <LanguageContext.Provider value='dutch'>
          <UserCreate />
        </LanguageContext.Provider>

        Always gets the default value set in the LanguageContext.js file
        <UserCreate /> 
        */}
      </div>
    )
  }
}

export default App;