import React, { Component } from 'react';
import oAuth from '../apis/OAuth.json';

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: oAuth.clientId,
        scope: 'email'
      });
    });
  }

  render() {
    return (
      <div>Google Auth</div>
    );
  };
}

export default GoogleAuth;