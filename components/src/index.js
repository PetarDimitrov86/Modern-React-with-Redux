import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div className="ui container comments">
      <h3 className="ui dividing header">Comments</h3>
      <div className="comment">
        <a className="avatar" href="/">
          <img src="" alt="avatar"/>
        </a>
        <div className="content">
          <a className="author" href="/">Pesho</a>
          <div className="metadata">
            <span className="date">Today at 5:42PM</span>
          </div>
          <div className="text">
            How artistic!
          </div>
          {/* <div className="actions">
            <a className="reply" href="/">Reply</a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)