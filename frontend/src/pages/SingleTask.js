import React from 'react';
import { useParams, Link } from 'react-router-dom'

function SingleTask() {

  const {id}=useParams();
  return (
    <div className="singleTask-container">
      Single task
    </div>
  );
}

export default SingleTask;
