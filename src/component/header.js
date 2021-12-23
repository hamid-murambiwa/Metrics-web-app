import React from 'react';
import img from '../styling/97691843-group-of-dog-breeds-holding-bone-front-view-pet-background-banner.webp';
import '../styling/header.css';

function Header() {
  return (
    <header>
      <img className="headerImg" src={img} alt="" />
      <div>
        <h1 className="h-text">Dog breeds</h1>
        <p>172 breeds</p>
      </div>
    </header>
  );
}

export default Header;
