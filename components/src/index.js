import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";

function getDaysAgo() {
  let timeDiff = Math.round((new Date().getTime() - faker.date.past().getTime()) / 1000);
  let days = Math.floor(timeDiff / 86400);
  timeDiff -= days * 86400;

  let hours = Math.floor(timeDiff / 3600) % 24;
  timeDiff -= hours * 3600;

  let minutes = Math.floor(timeDiff / 60) % 60;

  return `${days} days, ${hours} hours and ${minutes} minutes ago`;
}

function getRandomFullName() {
  return `${faker.name.firstName()} ${faker.name.lastName()}`;
}

const App = () => {
  return (
    <div className="ui container comments">
      <h3 className="ui dividing header">Comments</h3>
      <CommentDetail
        author={getRandomFullName()}
        timeAgo={getDaysAgo()}
        content={faker.lorem.sentences()}
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author={getRandomFullName()}
        timeAgo={getDaysAgo()}
        content={faker.lorem.sentences()}
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author={getRandomFullName()}
        timeAgo={getDaysAgo()}
        content={faker.lorem.sentences()}
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
