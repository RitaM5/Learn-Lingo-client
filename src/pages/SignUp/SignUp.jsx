import React, { useState } from 'react';
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { FaRegEye } from 'react-icons/fa';

const SignUp = () => {

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [show, setShow] = useState(false)
    const navigate = useNavigate();

    const onSubmit = data => {
        createUser(data.email, data.password, data.confirmPassword)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })

                    })
                    .catch(error => console.log(error))
            })
    };
    const password = watch('password', '');
    return (
        <>
            <Helmet>
                <title>Learn Lingo | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200 my-container">
                <div className='my-28'>
                <h1 className="text-3xl font-bold text-pink-500 font-poppins mb-3">Signup now!</h1>
                    <div className="shadow-2xl rounded-3xl card w-full md:w-[550px] bg-base-100 mx-auto">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control font-poppins">
                                <label className="label">
                                    <span className="label-text text-lg">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control font-poppins">
                                <label className="label">
                                    <span className="label-text text-lg">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control font-poppins">
                                <label className="label">
                                    <span className="label-text text-lg">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control font-poppins relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={show ? "text" : "password"}  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 15,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered" />
                                <p className=' absolute right-0 mt-12 mr-3 text-lg' onClick={() => setShow(!show)}>
                                    <FaRegEye />
                                </p>
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 15 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                            </div>
                            <div className="form-control font-poppins">
                                <label className="label">
                                    <span className="label-text text-lg">Confirm Password</span>
                                </label>
                                <input type={show ? "text" : "password"}  {...register("confirmPassword", {
                                    required: true,
                                    validate: (value) =>
                                        value === password || 'The passwords do not match',
                                })} placeholder="confirm password" className="input input-bordered" />
                                <p className=' absolute right-0 mt-12 mr-11 text-lg' onClick={() => setShow(!show)}>
                                    <FaRegEye />
                                </p>
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.confirmPassword && <p className="text-red-600">{errors.confirmPassword.message}</p>}
                            </div>
                            <div className="form-control mt-3 font-poppins">
                                <input className="btn bg-pink-500 text-white" type="submit" value="Sign Up" />
                            </div>
                            <p className='font-poppins'><small className=''>Already have an account ? <Link to="/login">Login</Link></small></p>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;