import React, { useEffect, useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    const handleMakeInstructor = user => {

        fetch(`https://summer-camp-server-dusky.vercel.app/users/constructor/${user._id}`, {
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
    const handleMakeAdmin = user => {

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
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }

    return (
        <div className="w-full">
            <Helmet>
                <title>Learn Lingo | Manage users</title>
            </Helmet>
            <p className='text-center lg:hidden py-4 text-pink-500 text-2xl font-poppins font-semibold'>Manage Users</p>
            <div className=" overflow-x-auto bg-base-100 shadow-lg">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr className='font-poppins text-lg text-white bg-blue-800 font-semibold'>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id} className='font-poppins'>
                                <th>{index + 1}</th>
                                <td><img src={user?.photoURL} alt={user?.name} className="w-10 h-10 rounded-full" /></td>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{user?.role === 'admin' ? 'admin' : user?.role === 'instructor' ? 'instructor' : 'user'}
                                </td>
                                <td className='inline-flex gap-3'>
                                    <button disabled={user?.role === 'instructor' || user?.role === 'admin' && true} onClick={() => handleMakeInstructor(user)} className="px-4 py-2 rounded-3xl bg-pink-500 text-sm text-white">Instructor</button>
                                    <button disabled={user?.role === 'admin' || user?.role === 'instructor' && true} onClick={() => handleMakeAdmin(user)} className="px-4 py-2 rounded-3xl bg-green-500 text-sm text-white">Admin</button>
                                </td>
                            </tr>
                            )}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;