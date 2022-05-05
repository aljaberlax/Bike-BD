import React from 'react';
import bnr from './Banner.PNG';
import './Banner.css';
const Banner = () => {
    return (
        <div className='banner'>
            <img src={bnr} alt="banner" />
        </div>
    );
};

export default Banner;