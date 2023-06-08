import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { FaRegEye } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { signIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [show, setShow] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                reset();
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            }).catch(error => setError(error))
    }
    /*     useEffect(() => {
            if (user) {
                navigate(from)
            }
        }, [user]); */
    return (
        <>
            <Helmet>
                <title>Learn Lingo | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200 my-container">
                <div className="hero-content flex-col gap-6 lg:flex-row-reverse mx-auto my-28 ">
                    <div className="text-center lg:text-left w-full mt-3">
                        <img className='rounded-3xl flex-shrink-0 ' src="https://media.tenor.com/p0G_bmA2vSYAAAAd/login.gif" alt="" srcset="" />
                    </div>
                    <div className='card flex-shrink-0 w-full max-w-md'>
                        <h1 className="text-3xl font-bold text-pink-500 font-poppins mb-3">Login now!</h1>
                        <div className="shadow-2xl bg-base-100 rounded-3xl">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control font-poppins">
                                    <label className="label">
                                        <span className="label-text text-lg">Email</span>
                                    </label>
                                    <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className="text-red-600">Email is required</span>}
                                </div>
                                <div className="form-control font-poppins relative">
                                    <label className="label">
                                        <span className="label-text text-lg">Password</span>
                                    </label>
                                    <input type={show ? "text" : "password"}  {...register("password", {
                                        required: true,
                                    })} placeholder="password" className="input input-bordered" />
                                    <p className=' absolute right-0 mt-12 mr-3 text-lg' onClick={() => setShow(!show)}>
                                        <FaRegEye />
                                    </p>
                                    {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                    <p className="text-red-600">{error.message}</p>
                                </div>
                                <div className="form-control mt-3 font-poppins">
                                    <input className="btn bg-pink-500 text-white" type="submit" value="Login" />
                                </div>
                                <p className='font-poppins'><small className=''>Don't have an account ? <Link to="/signup">Signup</Link></small></p>
                            </form>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;