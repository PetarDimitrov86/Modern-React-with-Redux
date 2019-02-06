import React, { useState } from 'react';

const App = () => {
  const [resource, setResource] = useState('posts');

  return (
    <div className='ui container'>
      <div>
        <button className='ui button primary'
          onClick={() => setResource('posts')}>
          Posts</button>
        <button className='ui button primary'
          onClick={() => setResource('todos')}>
          TODOs</button>
      </div>
      {resource}
    </div>
  );
}

export default App;