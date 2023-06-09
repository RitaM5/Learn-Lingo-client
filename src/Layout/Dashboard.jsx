import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers, FaSchlix, FaSchool, FaBookOpen, FaChalkboardTeacher } from 'react-icons/fa';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
//import NavBar from '../pages/Shared/NavBar/NavBar';
//import useCart from "../hooks/useCart";


const Dashboard = () => {
    //const [cart] = useCart();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    return (
        <div className="flex  overflow-x-auto">
            <div className="w-full md:w-1/4 h-screen bg-pink-500 p-4">
                <ul className="menu font-poppins p-4 w-full">
                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/manageusers"><FaUsers></FaUsers> Manage Users</NavLink></li>

                        </> : isInstructor ? <>
                            <li><NavLink to="/dashboard/instructorhome" className='inline-flex items-center gap-2 text-2xl font-semibold'><FaHome></FaHome> Instructor Home</NavLink></li>
                        </> :
                            <>
                                <li><NavLink to="/dashboard/userhome"><FaHome></FaHome> User Home</NavLink></li>
                            </>
                    }
                    <div className="divider"></div>
                    <li><NavLink to="/" className='text-lg font-semibold text-white'><FaHome className='text-black'></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/classes" className='text-lg font-semibold text-white'><FaBookOpen className='text-black'></FaBookOpen> Classes</NavLink></li>
                    <li><NavLink to="/instructor" className='text-lg font-semibold text-white'><FaChalkboardTeacher className='text-black'></FaChalkboardTeacher> Instructor</NavLink></li>
                </ul>
            </div>
            <div className="w-full md:w-3/4 p-4">
                <h1 className="text-2xl font-bold mb-4">Main Content</h1>
                <div className='font-poppins'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
        // <div className="drawer drawer-mobile">
        //     <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        //     <div className="drawer-content">
        //         <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button ">Open drawer</label>
        //         <Outlet></Outlet>
        //     </div>
        //     <div className="drawer-side ">
        //         <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        //         <ul className="menu p-4 w-80 bg-green-100">
        //             {
        //                 isAdmin ? <>
        //                     <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome> Admin Home</NavLink></li>
        //                     <li><NavLink to="/dashboard/manageusers"><FaUsers></FaUsers> Manage Users</NavLink></li>

        //                 </> : isInstructor ? <>
        //                     <li><NavLink to="/dashboard/instructorhome"><FaHome></FaHome> Instructor Home</NavLink></li>
        //                 </> :
        //                     <>
        //                         <li><NavLink to="/dashboard/userhome"><FaHome></FaHome> User Home</NavLink></li>
        //                     </>
        //             }

        //             <div className="divider"></div>
        //             <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
        //             <li><NavLink to="/classes"> Classes</NavLink></li>
        //             <li><NavLink to="/instructor">Instructor</NavLink></li>
        //         </ul>

        //     </div>
        // </div>
    );
};

export default Dashboard;
{/* <li><NavLink to="/dashboard/addItem"> <FaUtensils></FaUtensils> Add an Item</NavLink></li>
                            <li><NavLink to="/dashboard/manageitems"><FaWallet></FaWallet> Manage Items</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaBook></FaBook> Manage Bookings</NavLink></li>
                            <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li> */}
{/* <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                            <li>
                                <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                                    <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
                                </NavLink>

                            </li> */}