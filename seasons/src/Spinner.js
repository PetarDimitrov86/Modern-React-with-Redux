import React from 'react';

const Spinner = props => {
  return (
    <div className='ui active dimmer'>
      <div className='ui big text loader'>{props.message}</div> 
      {/* Alternate version:
      <div className='ui big text loader'>{props.message || 'Loading...'}</div> */}
    </div>
  );
};

Spinner.defaultProps = {
  message: 'Loading...'
}

export default Spinner;