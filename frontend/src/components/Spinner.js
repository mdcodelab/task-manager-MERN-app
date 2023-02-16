import React from 'react';
import spinner from "../assets/spinner.gif"

function Spinner() {
  return (
    <img src={spinner} alt="Loading ..." style={{width: "150px", margin: "10rem auto", display: "block"}}>
      
    </img>
  );
}

export default Spinner;
