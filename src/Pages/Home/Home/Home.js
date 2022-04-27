import React, { useEffect, useState } from 'react';
import Services from '../Services/Services';

const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        const url = 'http://localhost:5000/services'
        fetch(url)
            .then(res => res.json())
            .then(result => setServices(result))
    }, [])
    return (
        <div className='text-center'>
            <h1>GROW PEOPLE BY HELPING</h1>

            <div >
                <input className="search-field" type="text" name="" placeholder='Search' />
            </div>
            <div className="services-container">
                {
                    services.map(service => <Services key={service._id} service={service} />)
                }
            </div>
        </div>
    );
};

export default Home;