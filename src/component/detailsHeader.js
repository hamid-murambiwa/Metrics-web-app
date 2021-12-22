import React from 'react';
import { Link } from 'react-router-dom';

import img from '../icons8-back-90.png'
import img2 from '../icons8-microphone-90.png'
import img3 from '../icons8-settings.svg'

function DetailsHeader() {
    return (
        <header>

        <Link to='/'>
            <img src={img} alt='' />
        </Link>
            <div>
            <Link to='/'>
            <img src={img2} alt='' />
        </Link>
        <Link to='/'>
            <img src={img3} alt='' />
        </Link>
            </div>
        </header>
    );
}

export default DetailsHeader;