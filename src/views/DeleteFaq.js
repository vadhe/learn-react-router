import React from 'react';
import { Redirect } from 'react-router-dom';

// Redirect to `/topics` page
const DeleteFaq = () => {
  const isAdmin = () => true; // Real condition check happens here;
  
  return (
    <>
      {
        isAdmin() ? (<Redirect to={'/topics'} />) : (<div>Only admin can delete FAQ</div>)
      }
    </>
  )
};

export default DeleteFaq;