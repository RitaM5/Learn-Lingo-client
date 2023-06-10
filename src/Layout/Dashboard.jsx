import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers, FaSchlix, FaSchool, FaBookOpen, FaChalkboardTeacher, FaAddressBook } from 'react-icons/fa';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
import { Helmet } from 'react-helmet-async';
//import NavBar from '../pages/Shared/NavBar/NavBar';
//import useCart from "../hooks/useCart";


const Dashboard = () => {
    //const [cart] = useCart();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    return (
        <>
        <Helmet>
            Learn Lingo | Dashboard
        </Helmet>
            <div className="flex  overflow-x-auto">
                <div className="w-full md:w-1/4 h-screen bg-pink-500 p-4">
                    <ul className="menu font-poppins p-4 w-full">
                        {
                            isAdmin ? <>
                                <li><NavLink to="/dashboard/adminhome" className='text-2xl font-semibold text-white'><FaHome className='text-black'></FaHome> Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/manageusers" className='text-lg font-semibold text-white my-4'><FaUsers className='text-black'></FaUsers> Manage Users</NavLink></li>

                            </> : isInstructor ? <>
                                <li><NavLink to="/dashboard/instructorhome" className='text-2xl font-semibold text-white'><FaHome className='text-black'></FaHome> Instructor Home</NavLink></li>
                                <li><NavLink to="/dashboard/addclasses" className='text-lg font-semibold text-white my-4'><FaAddressBook className='text-black'></FaAddressBook> Add Classes</NavLink> </li>
                            </> :
                                <>
                                    <li><NavLink to="/dashboard/userhome" className='text-2xl font-semibold text-white'><FaHome className='text-black'></FaHome> User Home</NavLink></li>
                                </>
                        }
                        <div className="divider"></div>
                        <li><NavLink to="/" className='text-lg font-semibold text-white'><FaHome className='text-black'></FaHome> Home</NavLink> </li>
                        <li><NavLink to="/classes" className='text-lg font-semibold text-white'><FaBookOpen className='text-black'></FaBookOpen> Classes</NavLink></li>
                        <li><NavLink to="/instructor" className='text-lg font-semibold text-white'><FaChalkboardTeacher className='text-black'></FaChalkboardTeacher> Instructor</NavLink></li>
                    </ul>
                </div>
                <div className="w-full md:w-3/4 p-4">
                    <div className='font-poppins'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Dashboard;
