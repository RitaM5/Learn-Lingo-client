import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const PopularInstructor = () => {
    const [instructors, setInstructors] = useState([]);
    const [axiosSecure] = useAxiosSecure()
    useEffect(() => {
        axiosSecure.get('/popular-instructors')
            .then(res => {
                setInstructors(res.data)
            })
    }, []);
    return (
        <div className='my-16'>
            <h1 className='text-center text-3xl font-poppins font-semibold text-pink-500 my-12'>Popular Instructors</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5'>
                {instructors.map((instructor) => (
                    <div className="card w-full bg-blue-100 shadow-xl font-poppins">
                        <figure><img className='w-full h-60' src={instructor?.instructorImage} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {instructor?.instructorName}
                                <div className="badge badge-secondary">popular</div>
                            </h2>
                            <p><span className='text-lg font-semibold'>Instructor Email:</span> {instructor?.instructorEmail}</p>
                            <p><span className='text-lg font-semibold'>Class Name:</span> {instructor?.className}</p>
                            <p className=""><span className='text-lg font-semibold'>Students:</span> {instructor?.enrolled}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularInstructor;