import React from 'react';
import { useParams } from 'react-router-dom';
import topics from "../data/topics.json";
import faqs from "../data/faqs.json";
import Faq from "../components/Faq";

const topicById = (id) => {
  return topics.find(({ _id }) => id === _id);
};

const faqsByTopicId = id => {
  return faqs.filter(({ topicId }) => topicId === id);
};

const Topic = () => {
  const { id } = useParams();
  const topic = topicById(id);
  const topicFaqs = faqsByTopicId(id);
  if (!topic) {
    // Topic not found for this ID
    return <div>Topic not found for {id} ok</div>;
  }

  return (
    <>
    <section>
      <h2>{topic.title}</h2>
      <p>{topic.description}</p>
    </section>
    <hr />
    <section>
      <h1>FAQs</h1>
      {topicFaqs.map((faq) => (
        <Faq {...faq} key={faq._id} />
      ))}
    </section>
  </>
  );
};

export default Topic;