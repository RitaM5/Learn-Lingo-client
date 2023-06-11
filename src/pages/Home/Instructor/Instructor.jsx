import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from "../../../assets/constructor/instruc-banner-1.jpg"
import banner2 from "../../../assets/constructor/instruc-banner-2.jpg"
import banner3 from "../../../assets/constructor/instruc-banner-3.jpg"
const Instructor = () => {
    return (
        <div className='my-container'>
            <Carousel>
                <div>
                    <img src={banner1} />
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
        </div>
    );
};

export default Instructor;