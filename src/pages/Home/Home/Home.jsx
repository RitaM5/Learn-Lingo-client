import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import SiteDetails from './SiteDetails';

const Home = () => {
    return (
        <div className='my-container'>
            <Helmet>
                <title>Learn Lingo | Home</title>
            </Helmet>
            <Banner></Banner>
            <SiteDetails></SiteDetails>
        </div>
    );
};

export default Home;