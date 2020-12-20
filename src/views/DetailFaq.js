import React from 'react';
import { useParams } from 'react-router-dom';
import topics from '../data/topics.json';
import faqs from '../data/faqs.json';

// Get FAQ by ID
const faqById = id => {
  return faqs.find(({ _id }) => id === _id);
};

// Get topic by ID
const topicById = id => {
  return topics.find(({ _id }) => id === _id);
};

const DetailFaq = () => {
  const { id, topicId } = useParams();

  // Get the topic
  const topic = topicById(topicId);
  // Get the FAQ
  const faq = faqById(id);

  if (!topic) {
    return <div>Topic not found for topicId `{topicId}`</div>;
  }

  if (!faq) {
    return <div>Faq not found for ID `{id}`</div>;
  }

  return (
    <div>
      <h2>{faq.question}</h2>
      <p>{faq.answer}</p>
      <hr />
      <p>
        This FAQ is under topic <strong>"{topic.title}"</strong>
      </p>
    </div>
  );
};

export default DetailFaq;