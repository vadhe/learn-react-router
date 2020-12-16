import React from 'react';

const Topic = ({ title, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <hr />
    </div>
  );
};

export default Topic;