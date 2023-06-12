import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import useAdmin from '../../../hooks/useAdmin';
import useInstructor from '../../../hooks/useInstructor';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Helmet } from 'react-helmet-async';
const Classes = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const [classes, setClasses] = useState([]);
    const [disabledButtons, setDisabledButtons] = useState([]);
  //  const [selectedClassIds, setSelectedClassIds] = useState([]);
    const navigate = useNavigate();
    const { user } = useAuth();
    axios.get('https://summer-camp-server-dusky.vercel.app/classes')
        .then(res => {
            setClasses(res.data)
        });

    // useEffect(() => {
    //     const storedSelectedClassIds = localStorage.getItem('selectedClassIds');
    //     if (storedSelectedClassIds) {
    //         setSelectedClassIds(JSON.parse(storedSelectedClassIds));
    //     }
    // }, []);

    const handleSelect = classes => {
        if (disabledButtons.includes(classes._id)) {
            return; // Do nothing if the button has already been clicked
          }
        
          setDisabledButtons(prevDisabledButtons => [...prevDisabledButtons, classes._id]);
        
        const { className, image, price, _id } = classes;
        if (user && user.email) {
            const selectItem = { classItemId: _id, className, image, price, email: user.email }
            fetch('https://summer-camp-server-dusky.vercel.app/select', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectItem)
            })

                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        // refetch(); // refetch cart to update the number of items in the cart
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Course added on the selected page.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        // setSelectedClassIds(prevIds => [...prevIds, _id]);
                        // localStorage.setItem('selectedClassIds', JSON.stringify([...selectedClassIds, _id]));
                    }
                })

        }
        else {
            Swal.fire({
                title: 'Please login to select the Class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div className='my-container'>
            <Helmet>
               <title> Learn Lingo | Classes</title>
            </Helmet>
            <Banner></Banner>
            <div className='my-16'>
                <h1 className='text-center text-3xl font-poppins font-semibold text-pink-500'>All Classes</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-14'>
                    {
                        classes.map((classes) => <>
                            <div key={classes?._id} className={`card w-full bg-base-100 shadow-xl ${classes?.seats === 0 ? 'bg-red-500 text-white' : ''
                                }`}>
                                <figure className="">
                                    <img src={classes?.image} alt="" className="h-[300px]" />
                                </figure>
                                <div className="card-body font-poppins text-left">
                                    <h2 className="card-title text-left">{classes?.className}</h2>
                                    <p className='text-blue-600'><span>Instructor:</span> {classes?.instructorName}</p>
                                    <p><span className='font-semibold'>Available Seats:</span> {classes?.seats}</p>
                                    <p><span className='font-semibold'>Price:</span> {classes?.price}</p>
                                    <div className="card-actions flex justify-end mt-4">
                                        <button onClick={() => handleSelect(classes)} disabled={disabledButtons.includes(classes._id) || classes?.seats === 0 || isAdmin || isInstructor} className="btn btn-primary">{isAdmin || isInstructor ? 'Not Allowed' : 'Select'}</button>
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

export default Classes;