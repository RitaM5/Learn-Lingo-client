import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const AddClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {

        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { className, instructorName, instructorEmail, seats, price, } = data;
                    const newItem = { className, instructorName, instructorEmail, seats: parseInt(seats), price: parseFloat(price), status: "pending", feedback: "", enrolled: "", image: imgURL }
                    console.log(newItem)
                    axiosSecure.post('/classes', newItem)
                        .then(data => {
                            console.log('after posting new class', data.data)
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Class added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })

    };
    return (
        <div>
            <Helmet>
                Learn Lingo | Add New Class
            </Helmet>
            <p className='text-center my-8 text-2xl font-poppins font-semibold text-pink-500'>Add New Class</p>
            <form onSubmit={handleSubmit(onSubmit)} className='w-1/2 mx-auto px-4 py-10 rounded-lg bg-base-200'>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name</span>
                    </label>
                    <input type="text" placeholder="class name"
                        {...register("className", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text font-semibold">Classes Image</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
                <div className="flex gap-2 my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Name</span>
                        </label>
                        <input type="text" placeholder="instructor name"
                            {...register("instructorName", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Email</span>
                        </label>
                        <input type="email" placeholder="instructor email"
                            {...register("instructorEmail", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text font-semibold">Available Seats</span>
                    </label>
                    <input type="number" {...register("seats", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text font-semibold">Price</span>
                    </label>
                    <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <input className=" w-full rounded-lg  mt-4 bg-pink-500 py-2 text-white" type="submit" value="Add Class" />
            </form>
        </div>
    );
};

export default AddClasses;