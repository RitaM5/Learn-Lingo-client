import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import NavBar from '../pages/Shared/NavBar/NavBar';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div className=''>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <ScrollRestoration/>
            <Footer></Footer>
        </div>
    );
};

export default Main;