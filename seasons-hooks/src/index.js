import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

const App = () => {
  const [latitude, setLatitude] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLatitude(position.coords.latitude),
      err => setErrorMessage(err.message)
    );
  }, []);

  let content;
  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>;
  } else if (latitude) {
    content = <SeasonDisplay latitute={latitude} />;
  } else {
    content = <Spinner message='Please accept location request' />;
  }

  return (
    <div className='border red'>{content}</div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));