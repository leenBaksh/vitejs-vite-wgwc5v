import React from 'react';


const Post = ({ title, content, author, date }) => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{content}</p>
        <div className="card-footer text-muted">
          <div className="row">
            <div className="col">
              <p className="mb-0">Author: {author}</p>
            </div>
            <div className="col text-right">
              <p className="mb-0">Date: {date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
