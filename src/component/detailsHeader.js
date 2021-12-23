import React from 'react';
import { Link } from 'react-router-dom';
import img from '../styling/icons8-back-90.png';
import img2 from '../styling/icons8-microphone-90.png';
import img3 from '../styling/icons8-settings.svg';
import '../styling/detailsHeader.css';

function DetailsHeader() {
  return (
    <header>
      <Link to="/">
        <img src={img} className="h-img" alt="" />
      </Link>
      <div className="s-con">
        <Link to="/">
          <img src={img2} className="h-img s" alt="" />
        </Link>
        <Link to="/">
          <img src={img3} className="h-img" alt="" />
        </Link>
      </div>
    </header>
  );
}

export default DetailsHeader;
