import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import useLocation from './useLocation';

const App = () => {
  const [latitude, errorMessage] = useLocation();

  let content;
  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>;
  } else if (latitude) {
    content = <SeasonDisplay latitute={latitude} />;
  } else {
    content = <Spinner message='Please accept location request' />;
  }

  return <div className='border red'>{content}</div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));