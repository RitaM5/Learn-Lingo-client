
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const MyClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: instructorClass = [], refetch } = useQuery(['instructorClass'], async () => {
        const res = await axiosSecure.get('/my-classes')
        return res.data;
    })
    return (
        <div className='px-6 w-full mb-16'>
            <h3 className="text-2xl font-poppins text-center text-pink-500 underline underline-offset-8 font-semibold py-4">My Class: {instructorClass.length}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full'>
                {
                    instructorClass.map(classItem => <>
                        <div key={classItem._id} className="font-poppins card w-full bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={classItem.image} alt="" className="rounded-xl w-full md:h-[180px]" />
                            </figure>
                            <div className="card-body text-left">
                                <h2 className="md:text-[20px] text-pink-500 font-semibold">{classItem?.className}</h2>
                                <p className='font-semibold'>Instructor: {classItem?.instructorName}</p>
                                <p><span className='font-semibold'>Available Seats:</span> {classItem?.seats}</p>
                                <p><span className='font-semibold'>Price:</span> {classItem?.price}</p>
                                <p><span className='font-semibold'>Enrolled Students:</span> {classItem?.enrolled}</p>
                                <p ><span className='font-semibold'>Status: </span>{classItem?.status} </p>
                                <p><span className='font-semibold'>Feedback:</span> {classItem?.feedback}</p>
                                <div className="card-actions">
                                    <button className="bg-blue-800 text-white px-3 py-2 rounded-lg">Update</button>
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default MyClasses;