import React from 'react';
import spinner from "../assets/spinner.gif"

function Spinner() {
  return (
    <div className="spinner-container">
      <div className="spinner">
      <img src={spinner} alt="Loading ..." style={{width: "150px", margin: "10rem auto", display: "block"}}>
      
      </img>
      </div>
    </div>
  );
}

export default Spinner;
