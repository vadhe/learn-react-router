import topics from '../data/topics.json';
import Topic from '../components/Topic';
const Topics = () => {
    return (
      <div>
        <h1>Topics List</h1>
        <hr />
        {topics.map(topic => (
          <Topic {...topic} key={topic._id} />
        ))}
      </div>
    );
  };
  
  export default Topics;