import React from 'react';
import { Link } from 'react-router-dom';


const Faq = ({ question, answer, _id,  topicId }) => {
    return (
      <div>
        <Link to={`/topics/${topicId}/faqs/${_id}`}>
          <h4>{question}</h4>
        </Link>;
        <p>{answer}</p>
        <hr />
      </div>
    );
  };
export default Faq;