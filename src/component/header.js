import React from 'react';

import img from '../97691843-group-of-dog-breeds-holding-bone-front-view-pet-background-banner.webp'

function Header() {
    return (
        <header>
            <img src={img} alt='' />
            <div>
                <h1>Dogbreeds</h1>
                <p>172 breeds</p>
            </div>
        </header>
    );
}

export default Header;
