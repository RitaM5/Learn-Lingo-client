import React, { useEffect, useState } from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from './CheckoutForm';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
        <div>

            <div>
                <p>Payment</p>
                <p>please process</p>
            </div>
            <h2 className="text-3xl"> Teka o teka tumi uira uira aso...</h2>
            <div>
                <h3>Item: {item?.ClassName}</h3>
                <h4>Price: {item?.price}</h4>
                <Elements stripe={stripePromise}>
                    <CheckoutForm item={item} price={parseFloat(item?.price).toFixed(2)} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
