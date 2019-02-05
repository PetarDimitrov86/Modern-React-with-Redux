import React, { Component } from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';
import LanguageSelector from './LanguageSelector';

class App extends Component {
  state = { language: 'english', color: 'primary' };

  onColorChange = color => {
    this.setState({ color });
  };

  render() {
    return (
      <div className='ui container'>
        <LanguageStore>
          <LanguageSelector/>
          <div>
            Select a color:
            <i className='tint icon red' onClick={() => this.onColorChange('red')} />
            <i className='tint icon blue' onClick={() => this.onColorChange('primary')} />
          </div>
          <ColorContext.Provider value={this.state.color}>
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
        {/* 
        Always gets the hardcoded value from here
        <LanguageContext.Provider value='dutch'>
          <UserCreate />
        </LanguageContext.Provider>

        Always gets the default value set in the LanguageContext.js file
        <UserCreate /> 
        */}
      </div>
    );
  }
}

export default App;