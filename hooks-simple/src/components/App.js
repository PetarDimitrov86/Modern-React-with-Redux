import React, { useState } from 'react';
import ResourceList from './ResourceList';

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
      <ResourceList resource={resource}/>
    </div>
  );
}

export default App;