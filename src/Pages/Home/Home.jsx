import React from 'react';
import Hero from '../../Components/Hero/Hero';
import About from '../../Components/About/About';
import OurImpact from '../../Components/Our Impact/OurImpact';
import BloodRequestsPage from '../Dashboard/Admin/BloodRequests';

const Home = () => {
    return (
        <div className=''>
            <Hero></Hero>
            <About></About>
            <OurImpact></OurImpact>
            <BloodRequestsPage></BloodRequestsPage>
        </div>
    );
};

export default Home; 