import React from "react";
import { Link, useHistory } from "react-router-dom"

// const goToAddFaqPage = () => {
//   return '';
// }
const Nav = () => {
  const history = useHistory();

  const goToAddFaqPage = () => {
    // Navigate to AddFaq page
    history.push(`/add-faq`);
  };
    return (
      <div className="w-full bg-yellow-800 py-4 px-4">
        <Link to="/">Home</Link>
        <Link to="/about" style={{ marginLeft: "10px" }}>About</Link>
        <Link to="/topics" style={{ marginLeft: '10px' }}>Topics</Link>
        <Link to="/delete-faq" style={{ marginLeft: "10px" }}>
          Delete FAQ (Redirect Example)
        </Link>
        <Link to="/non-existing-page" style={{ marginLeft: "10px" }}>
          Non existing page
        </Link>
        <button onClick={goToAddFaqPage} style={{ marginLeft: "10px" }}>
        Add FAQ
      </button>
     </div>
    )
}

export  default Nav;