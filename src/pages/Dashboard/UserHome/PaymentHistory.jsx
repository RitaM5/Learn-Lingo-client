import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';

const PaymentHistory = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: paymentHistory = [], refetch } = useQuery(['paymentHistory'], async () => {
        const res = await axiosSecure.get('/payments/history')
        return res.data;
    });
    console.log(paymentHistory);
    return (
        <div className="w-full text-center">
            <Helmet>
                <title>Learn Lingo | Payment History</title>
            </Helmet>
            <div className=" bg-base-100 shadow-lg rounded">
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