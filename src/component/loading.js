import React from 'react';
import img from '../styling/load.png';
import '../styling/load.css';

function Loading() {
  return (
    <div className="loading-container">
      <img src={img} alt="loading" className="loading" />
      <p>Loading data...</p>
    </div>
  );
}

export default Loading;