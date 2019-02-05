import React, { Component } from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../context/LanguageContext';

class App extends Component {
  state = { language: 'english' };

  onLanguageChange = language => {
    this.setState({ language });
  }

  render() {
    return (
      <div className='ui container'>
        <div>
          Select a language:
          <i className='flag us' onClick={() => this.onLanguageChange('english')} />
          <i className='flag nl' onClick={() => this.onLanguageChange('dutch')} />
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
        
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