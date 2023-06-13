import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaUsers, FaSchool, FaBookOpen, FaChalkboardTeacher, FaAddressBook, FaBookReader } from 'react-icons/fa';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
import { Helmet } from 'react-helmet-async';
import useAuth from '../hooks/useAuth';

const Dashboard = () => {
    const { user } = useAuth();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    return (
        <div>
            <Helmet>
                Learn Lingo | Dashboard
            </Helmet>
            <div className="lg:flex grid grid-cols-1 gap-2 lg:gap-0">
                <div className="w-full lg:w-1/4 lg:min-h-screen bg-pink-500 p-4">
                    <div className='my-2 text-center'>
                        <img src={user?.photoURL} className='mx-auto w-[250px] h-[250px] rounded-full' alt="" srcset="" />
                        <div className='my-4'>
                            <p className='text-3xl font-poppins text-white font-semibold'>{user?.displayName}</p>
                            <p className='text-[14px] text-black font-semibold'>{user?.email}</p>
                        </div>
                    </div>
                    <ul className="menu font-poppins p-4 w-full">
                        {
                            isAdmin ? <>
                                <li><NavLink to="/dashboard/adminhome" className='text-[20px] font-semibold text-white'><FaHome className='text-black'></FaHome> Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/manageusers" className='text-[16px] font-semibold text-white mt-4'><FaUsers className='text-black'></FaUsers> Manage Users</NavLink></li>
                                <li><NavLink to="/dashboard/manageclasses" className='mt-2 text-[16px] font-semibold text-white my-1'><FaBookReader className='text-black'></FaBookReader> Manage Classes</NavLink></li>
                            </> : isInstructor ? <>
                                <li><NavLink to="/dashboard/instructorhome" className='text-[20px] font-semibold text-white'><FaHome className='text-black'></FaHome> Instructor Home</NavLink></li>
                                <li><NavLink to="/dashboard/addclasses" className='text-[16px] font-semibold text-white mt-4'><FaAddressBook className='text-black'></FaAddressBook> Add Classes</NavLink> </li>
                                <li><NavLink to="/dashboard/myclasses" className='text-[16px] font-semibold text-white'><FaSchool className='text-black'></FaSchool> My Classes</NavLink> </li>
                            </> :
                                <>
                                    <li><NavLink to="/dashboard/userhome" className='text-[20px] font-semibold text-white'><FaHome className='text-black'></FaHome> User Home</NavLink></li>
                                    <li><NavLink to="/dashboard/myselectedclasses" className='text-[16px] font-semibold text-white'><FaSchool className='text-black'></FaSchool> My Selected Classes</NavLink> </li>
                                    <li><NavLink to="/dashboard/myenrolledclasses" className='text-[16px] my-2 font-semibold text-white'><FaSchool className='text-black'></FaSchool> My Enrolled Classes</NavLink> </li>
                                    <li><NavLink to="/dashboard/paymenthistory" className='text-[16px] my-2 font-semibold text-white'><FaSchool className='text-black'></FaSchool> Payment History</NavLink> </li>
                                </>
                        }
                        <div className="divider"></div>
                        <li><NavLink to="/" className='text-[16px] font-semibold text-white'><FaHome className='text-black'></FaHome> Home</NavLink> </li>
                        <li><NavLink to="/classes" className='text-[16px] font-semibold text-white'><FaBookOpen className='text-black'></FaBookOpen> Classes</NavLink></li>
                        <li><NavLink to="/instructor" className='text-[16px] font-semibold text-white'><FaChalkboardTeacher className='text-black'></FaChalkboardTeacher> Instructor</NavLink></li>
                    </ul>
                </div>
                <div className="w-full lg:w-3/4 lg:overflow-hidden">
                    <div className='font-poppins'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Dashboard;
