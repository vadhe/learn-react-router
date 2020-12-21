import React from "react";
import { useHistory } from "react-router-dom";

const AddFaq = () => {
  const history = useHistory();
  const goBack = () => {
  history.goBack();
};
  return(
    <div>
    <p>
      <button onClick={goBack}>Go back</button>
    </p>
    <h5>Add faq form comes here</h5>
  </div>
  );
};

export default AddFaq;
