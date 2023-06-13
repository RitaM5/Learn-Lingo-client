import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';

const MyEnrolledClasses = () => {
    const {user} = useAuth()
    const [axiosSecure] = useAxiosSecure();
    const { data: enrolledClasses = [], refetch } = useQuery(['enrolledClasses'], async () => {
        const res = await axiosSecure.get(`/payments/${user.email}`)
        return res.data;
    });

    return (
        <div className="w-full">
        <Helmet>
            <title>Learn Lingo | My Enrolled Classes</title>
        </Helmet>     
        <p className='text-center lg:hidden py-4 text-pink-500 text-2xl font-poppins font-semibold'>My Enrolled Classes</p>
        <div className="bg-base-100 shadow-lg rounded overflow-x-auto ">   
            <table className="table w-full">
                {/* head */}
                <thead className='bg-blue-800'>
                    <tr className='font-poppins text-white text-lg font-semibold'>
                        <th>#</th>
                        <th>Class Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className=' font-poppins'>
                    {
                        enrolledClasses.map((item, index) => <tr
                            key={item._id}
                        >
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                {item?.itemNames}
                            </td>
                            <td className="">{item?.price}</td>
                            <td>
                                <button onClick={() => handleDelete(item)} className="px-4 py-2 rounded-lg bg-red-600  text-white">Delete</button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyEnrolledClasses;