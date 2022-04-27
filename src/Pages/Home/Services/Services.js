import React from 'react';

const Services = ({ service }) => {
    const { picture, info } = service;
    return (
        <div className='single-service-container'>
            <div className='inf-container'>
                <img src={picture} alt="" />
                <button className='service-btn'>{info}</button>
            </div>
        </div>
    );
};

export default Services;