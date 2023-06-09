import React, { useEffect } from 'react';
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserCheck, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    const handleMakeAdmin = user => {
        console.log(user);
        fetch(`https://summer-camp-server-dusky.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleDelete = user => {

    }

    return (
        <div className="w-full">
            <Helmet>
                <title>Learn Lingo | Manage users</title>
            </Helmet>
            <h3 className="text-3xl font-semibold my-4">Total Users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr className='font-poppins text-lg text-black font-semibold'>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id} className=' font-poppins'>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role === 'admin' ? 'admin' : user.role === 'instructor' ? 'instructor' : 'user'}
                                </td>
                                <td>
                                    <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-pink-500  text-white"><FaUserShield></FaUserShield></button>
                                </td>
                                <td><button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-500  text-white"><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;