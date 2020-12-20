import React from 'react';
import { Link } from 'react-router-dom';


const Topic = ({ title, description, _id }) => {
  return (
    <div>
       <Link to={`/topics/${_id}`}>
        <h2>{title}</h2>
      </Link>
      <p>{description}</p>
      <hr />
    </div>
  );
};

export default Topic;