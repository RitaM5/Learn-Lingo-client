import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { motion } from "framer-motion"
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
                {courses.map((course, i) => (
                    <motion.div initial={{opacity: 0, translateX: i % 2 === 0 ? -50 : 50, translateY: -50}} animate={{opacity:1, translateX:0, translateY:0}} transition={{duration:0.2, delay: i+0.2}} className="card w-full bg-base-100 shadow-xl font-poppins">
                        <figure><img src={course?.image} className='h-[300px]' alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {course?.className}
                                <div className="badge badge-secondary">popular</div>
                            </h2>
                            <p><span className='font-semibold'>Price:</span> {course.price}</p>
                            <p className=""><span className=' font-semibold'>Enrolled:</span> {course?.enrolled}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default PopularClasses;