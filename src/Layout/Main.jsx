import React, { useEffect, useState } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import NavBar from '../pages/Shared/NavBar/NavBar';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    const [theme, setTheme] = useState("light");
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);
    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }
    return (
        <div className='overflow-hidden bg-white dark:bg-black'>
            <NavBar handleThemeSwitch={handleThemeSwitch}></NavBar>
            <Outlet></Outlet>
            <ScrollRestoration />
            <Footer></Footer>
        </div>
    );
};

export default Main;