import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail'
import faker from 'faker'

const App = () => {
  return (
    <div className="ui container comments">
      <h3 className="ui dividing header">Comments</h3>
      <CommentDetail author={`${faker.name.firstName()} ${faker.name.lastName()}`} />
      <CommentDetail author={`${faker.name.firstName()} ${faker.name.lastName()}`} />
      <CommentDetail author={`${faker.name.firstName()} ${faker.name.lastName()}`} />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)