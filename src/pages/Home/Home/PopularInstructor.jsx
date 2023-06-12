import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { motion } from "framer-motion"
const PopularInstructor = () => {
    const [instructors, setInstructors] = useState([]);
    const [axiosSecure] = useAxiosSecure()
    useEffect(() => {
        axiosSecure.get('/popular-instructors')
            .then(res => {
                setInstructors(res.data)
                //console.log(res.data);
            })
    }, []);

    return (
        <div className='my-16'>
            <h1 className='text-center text-3xl font-poppins font-semibold text-pink-500 my-12'>Popular Instructors</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5'>
                {instructors.map((instructor, i) => (
                    <motion.div  initial={{opacity: 0, translateX:  50, translateY: -50}} animate={{opacity:1, translateX:0, translateY:0}} transition={{duration:0.5, delay: i+0.5}} className="card w-full bg-blue-100 shadow-xl font-poppins">
                        <figure><img className='w-full h-60' src={instructor?.photoURL} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {instructor?.name}
                                <div className="badge badge-secondary">popular</div>
                            </h2>
                            <p><span className='text-lg font-semibold'></span> {instructor?.email}</p>
                            <p><span className=' font-semibold'>Class Name: </span>
                                {instructor?.courses[0].className}
                            </p>
                            <p className=""><span className='font-semibold'>Students:</span> {instructor?.courses[0].enrolled}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default PopularInstructor;