import React from 'react';

import { useContext } from "react";
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
// import useCart from "../../../hooks/useCart";
// import useAdmin from "../../../hooks/useAdmin";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    // const [cart] = useCart();
    // const [isAdmin] = useAdmin();
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/instructor">Instructor</Link></li>
        <li><Link to="/classes">Classes</Link></li>
        {/* {
            isAdmin ? <li><Link to="/dashboard/adminhome">Dashboard</Link></li> :
            <li><Link to="/dashboard/userhome">Dashboard</Link></li> 
        } */}
        <li>
            {/* <Link to="/dashboard/mycart">
                <button className="btn gap-2">
                    <FaShoppingCart></FaShoppingCart>
                     <div className="badge badge-secondary">+{cart?.length || 0}</div>
                </button>
            </Link> */}
        </li>
        {
            user ? <>
                <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        }
        {
            user && <p className='tooltip' data-tip={user.displayName} >
                <img className='w-10 rounded-full md:hidden hidden lg:block' src={user.photoURL
                } alt='user image' ></img>
            </p>
        }
    </>

    return (
        <div className='my-container mx-auto'>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-poppins text-pink-500">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case font-cinzel text-3xl">Learn<span className='text-pink-500'>lingo</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu text-lg menu-horizontal px-1 font-poppins">
                        {navOptions}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;