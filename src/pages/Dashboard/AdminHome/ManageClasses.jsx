import React, { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import { Dialog } from '@headlessui/react';
const ManageClasses = () => {
    const [selectedClass, setSelectedClass] = useState(null);
    const [feedback, setFeedback] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['all-classes'], async () => {
        const res = await axiosSecure.get('/all-classes')
        return res.data;
    })
    const handleApprove = singleClass => {
        axiosSecure
            .put(`/classes/approve/${singleClass._id}`)
            .then((res) => {
                if (res.status === 200) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class approved successfully',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
            .catch((error) => {
                console.error('Error approving class:', error);
            })

    }
    const handleDeny = singleClass => {
        setSelectedClass(singleClass);
        axiosSecure
            .put(`/classes/deny/${singleClass._id}`)
            .then((res) => {
                if (res.status === 200) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class denied successfully',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
            .catch((error) => {
                console.error('Error approving class:', error);
            })
       
    }
    const handleSubmitFeedback = () => {
        axiosSecure
            .post(`/classes/feedback/${selectedClass._id}`, { feedback })
            .then((res) => {
                if (res.status === 200) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Feedback sent successfully',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    setFeedback('');
                    setSelectedClass(null);
                }
            })
            .catch((error) => {
                console.error('Error sending feedback:', error);
            })
    
    };

    const closeModal = () => {
        setSelectedClass(null);
        setFeedback('');
    };

    return (
        <div className="w-full">
            <Helmet>
                <title>Learn Lingo | Manage Classes</title>
            </Helmet>
            <p className='text-center lg:hidden py-4 text-pink-500 text-2xl font-poppins font-semibold'>Manage Classes</p>
            <div className=" overflow-x-auto bg-base-100 shadow-lg ">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr className='font-poppins text-lg text-white bg-blue-800 font-semibold'>
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class name</th>
                            <th>Instructor name</th>
                            <th>Instructor email</th>
                            <th>Available seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((singleClass, index) => <tr key={singleClass._id} className='font-poppins'>
                                <th>{index + 1}</th>
                                <td><img src={singleClass?.image} alt={singleClass?.className} className="w-10 h-10 rounded-full" /></td>
                                <td>{singleClass?.className}</td>
                                <td>{singleClass?.instructorName}</td>
                                <td>{singleClass?.instructorEmail}</td>
                                <td>{singleClass?.seats}</td>
                                <td>{singleClass?.price}</td>
                                <td>{singleClass?.status}</td>
                                <td className='inline-flex gap-3'>
                                    <button disabled={singleClass?.status === 'approve'|| singleClass?.status === 'denied' && true} onClick={() => handleApprove(singleClass)} className="px-4 py-2 rounded-3xl bg-green-500 text-sm text-white">Approve</button>
                                    <button disabled={singleClass?.status === 'denied' || singleClass?.status === 'approve' && true} onClick={() => handleDeny(singleClass)} className="px-4 py-2 rounded-3xl bg-red-500 text-sm text-white">Deny</button>
                                </td>
                            </tr>
                            )}
                    </tbody>
                </table>
            </div>
            <Dialog open={!!selectedClass} onClose={closeModal} className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-center justify-center min-h-screen px-4 text-center">
                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

                    <span className="inline-block h-screen align-middle" aria-hidden="true">
                        &#8203;
                    </span>

                    <div className="inline-block p-6 my-8 overflow-hidden text-left align-middle bg-white rounded-lg shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                    Provide Feedback
                                </Dialog.Title>

                                <div className="mt-2">
                                    <textarea
                                        rows="4"
                                        className="w-full p-2 mt-1 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                                        placeholder="Enter your feedback"
                                        value={feedback}
                                        onChange={(e) => setFeedback(e.target.value)}
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 sm:mt-5">
                            <button
                                onClick={handleSubmitFeedback}
                                className="inline-flex justify-center w-full px-4 py-2 mt-3 font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                            >
                                Submit Feedback
                            </button>
                            <button
                                onClick={closeModal}
                                className="inline-flex justify-center w-full px-4 py-2 mt-3 font-medium text-gray-700 bg-gray-100 border border-transparent rounded-md shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

export default ManageClasses;