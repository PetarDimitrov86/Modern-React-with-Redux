import React from 'react';
import faker from 'faker';

const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a className="avatar" href="/">
        <img src={faker.image.avatar()} alt="avatar" />
      </a>
      <div className="content">
        <a className="author" href="/">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">Today at 5:42PM</span>
        </div>
        <div className="text">How artistic!</div>
      </div>
    </div>
  );
};

export default CommentDetail