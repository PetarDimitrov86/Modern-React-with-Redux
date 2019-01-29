import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Page1} />
          <Route path="/pagetwo" component={Page2} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;