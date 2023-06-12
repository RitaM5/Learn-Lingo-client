import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const MyEnrolledClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: enrolledClasses = [], refetch } = useQuery(['enrolledClasses'], async () => {
        const res = await axiosSecure.get('/payments/classes')
        return res.data;
    });
    return (
        <div className="w-full">
        <Helmet>
            <title>Learn Lingo | My Enrolled Classes</title>
        </Helmet>     
        <div className=" bg-base-100 shadow-lg rounded">   
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