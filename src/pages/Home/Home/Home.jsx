import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import SiteDetails from './SiteDetails';
import PopularClasses from './PopularClasses';
import PopularInstructor from './PopularInstructor';

const Home = () => {
    return (
        <div className='my-container'>
            <Helmet>
                <title>Learn Lingo | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
            <SiteDetails></SiteDetails>
        </div>
    );
};

export default Home;