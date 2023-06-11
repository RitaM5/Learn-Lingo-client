import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const PopularClasses = () => {
    const [courses, setCourses] = useState([]);
    const [axiosSecure] = useAxiosSecure()
    useEffect(() => {
        axiosSecure.get('/popular-classes')
            .then(res => {
                setCourses(res.data)
            })
    }, []);
    return (
        <div className='my-16'>
            <h1 className='text-center text-3xl font-poppins font-semibold text-pink-500 my-12'>Popular Classes</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5'>
                {courses.map((course) => (
                    <div className="card w-full bg-base-100 shadow-xl font-poppins">
                        <figure><img src={course?.image} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {course?.className}
                                <div className="badge badge-secondary">popular</div>
                            </h2>
                            <p><span className='text-lg font-semibold'>Price:</span> {course.price}</p>
                            <p className=""><span className='text-lg font-semibold'>Enrolled:</span> {course?.enrolled}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularClasses;