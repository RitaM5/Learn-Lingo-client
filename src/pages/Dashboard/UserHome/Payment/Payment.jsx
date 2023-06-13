import React, { useEffect, useState } from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from './CheckoutForm';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const { _id } = useParams();
    const [item, setItem] = useState();
    useEffect(() => {
        axios.get(`https://summer-camp-server-dusky.vercel.app/select/${_id}`)
            .then(res => {
                const itemData = res.data;
                setItem(itemData);
            })
            .catch(error => {
                console.error('Error fetching item:', error);
            });
    }, []);

    return (
        <div className='mb-16 mx-2'>
            <Helmet>
                <title>
                    Learn Lingo | Payment
                </title>
            </Helmet>
            <p className='text-center font-poppins text-2xl text-pink-500 font-semibold py-4'>Payment</p>
            <div className=' card w-full lg:w-1/2  mx-auto space-y-4 bg-blue-100'>
                <div className='pl-4 py-4 font-poppins'>
                    <div className='mb-4 font-bold'>
                        <p className='text-2xl font-semibold'>please process</p>
                        <h3><span className='text-lg font-semibold'>Class Name:</span> {item?.className}</h3>
                        <h4><span className='text-lg font-semibold'>Price:</span> {item?.price}</h4>
                    </div>
                    <div className='my-16'>
                        <Elements stripe={stripePromise} className=''>
                            <CheckoutForm item={item} price={parseFloat(item?.price).toFixed(2)} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
