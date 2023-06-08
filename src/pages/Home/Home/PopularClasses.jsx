import React, { useEffect, useState } from 'react';

const PopularClasses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('https://summer-camp-server-dusky.vercel.app/classes')
            .then(res => res.json())
            .then(data => {
                setCourses(data)
                console.log(data);
            })
    }, []);
    return (
        <div>
            <h1>Popular Classes</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {courses.map((course) => (
                    <div className="card w-full bg-base-100 shadow-xl">
                        <figure><img src={course?.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {course?.className}
                                <div className="badge badge-secondary">popular</div>
                            </h2>
                            <p>{course.instructorName}</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">{course.enrolled}</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularClasses;