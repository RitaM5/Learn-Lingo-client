import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../hooks/useAuth';

const PaymentHistory = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: paymentHistory = [], refetch } = useQuery(['paymentHistory'], async () => {
        const res = await axiosSecure.get(`/payments/history/${user.email}`)
        return res.data;
    });
    return (
        <div className="w-full text-center">
            <Helmet>
                <title>Learn Lingo | Payment History</title>
            </Helmet>
            <p className='text-center lg:hidden py-4 text-pink-500 text-2xl font-poppins font-semibold'>Payment History</p>
            <div className=" overflow-x-auto bg-base-100 shadow-lg rounded">
                <table className="table w-full">
                    {/* head */}
                    <thead className='bg-blue-800'>
                        <tr className='font-poppins text-white text-lg font-semibold'>
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Transaction Id</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className=' font-poppins'>
                        {
                            paymentHistory.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    {item?.itemNames}
                                </td>
                                <td className="">{item?.price}</td>
                                <td>{item?.transactionId}</td>
                                <td>{item?.date}</td>
                                <td>
                                    <button className="px-4 py-2 rounded-lg bg-red-600  text-white">Delete</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;