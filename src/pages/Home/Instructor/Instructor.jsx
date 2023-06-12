import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from "../../../assets/constructor/instruc-banner-1.jpg"
import banner2 from "../../../assets/constructor/instruc-banner-2.jpg"
import banner3 from "../../../assets/constructor/instruc-banner-3.jpg"
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
const Instructor = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: instructors = [], refetch } = useQuery(['all-instructors'], async () => {
        const res = await axiosSecure.get('/all-instructors')
        return res.data;
    })
    return (
        <div className='my-container'>
            <Helmet>
                <title> Learn Lingo | Instructors</title>
            </Helmet>
            <Carousel>
                <div>
                    <img src={banner1} />
                    <div className="flex text-center w-full items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute left-0 top-0 h-full">
                        <div className='text-center mx-auto'>
                            <div data-aos="zoom-in" data-aos-duration="2000" className='text-white ml-2  space-y-5 w-full p-4 '>
                                <h2 className='text-5xl font-semibold space-x-3 font-poppins'>
                                    Our Real Heroes
                                </h2>
                                <p className='w-1/2 font-poppins text-lg mx-auto'>
                                    All credit belongs to them, because they are very hardworking and educated. They constantly take care os the students and teach them different languages to take their future one step further towards succes.
                                </p>
                                <button className="bg-pink-600 px-3 py-2 rounded-md">Know More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={banner2} />
                    <div className="flex text-center w-full items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute left-0 top-0 h-full">
                        <div className='text-center mx-auto'>
                            <div className='text-white ml-2  space-y-5 w-full p-4 '>
                                <h2 className='text-5xl font-semibold space-x-3 font-poppins'>
                                    Our Real Heroes
                                </h2>
                                <p className='w-1/2 font-poppins text-lg mx-auto'>
                                    All credit belongs to them, because they are very hardworking and educated. They constantly take care os the students and teach them different languages to take their future one step further towards succes.
                                </p>
                                <button className="bg-pink-600 px-3 py-2 rounded-md">Know More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={banner3} />
                    <div className="flex text-center w-full items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute left-0 top-0 h-full">
                        <div className='text-center mx-auto'>
                            <div className='text-white ml-2  space-y-5 w-full p-4 '>
                                <h2 className='text-5xl font-semibold space-x-3 font-poppins'>
                                    Our Real Heroes
                                </h2>
                                <p className='w-1/2 font-poppins text-lg mx-auto'>
                                    All credit belongs to them, because they are very hardworking and educated. They constantly take care os the students and teach them different languages to take their future one step further towards succes.
                                </p>
                                <button className="bg-pink-600 px-3 py-2 rounded-md">Know More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
            <div className='my-16'>
                <h1 className='text-center text-3xl font-poppins font-semibold text-pink-500'>All Instructors</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-14'>
                    {
                        instructors.map(instructor => <>
                            <div data-aos="fade-up"
                                data-aos-duration="2000" className="card w-full bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={instructor?.instructorImage} alt="" className="rounded-full w-[200px] h-[200px]" />
                                </figure>
                                <div className="card-body font-poppins text-left">
                                    <h2 className="card-title text-left">{instructor?.courses[0].instructorName}</h2>
                                    <p className='text-blue-600'>{instructor?.courses[0].instructorEmail}</p>
                                    <p><span className='font-semibold'>Courses Number:</span> {instructor?.courses.length}</p>
                                    <div>
                                        <p className='font-semibold'>Class Name:</p>
                                        <ol>
                                            {
                                                instructor?.courses.map((course, index) => <li>{index + 1}. {course?.className}</li>)
                                            }
                                        </ol>
                                    </div>
                                    <div className="card-actions flex justify-end mt-4">
                                        <button className="btn btn-primary">View Details</button>
                                    </div>
                                </div>
                            </div>
                        </>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Instructor;