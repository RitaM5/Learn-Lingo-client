import React from 'react';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useAuth from '../../../../hooks/useAuth';

const CheckoutForm = ({ item, price}) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment', { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setCardError(error.message);
        }
        else {
            setCardError('');
            
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
        }

        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            // save payment information to the server
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: 1,
                selectItems: item._id,
                classItems: item.classItemId,
                status: 'service pending',
                itemNames: item?.className
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    if (res.data.insertResult.insertedId) {
                        // display confirm
                       // removeSelectedItem(item?._id)
                    }
                })
        }


    }

    return (
        <>
            <form className="w-2/3 m-8" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-primary btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-800 ml-6 font-semibold font-poppins">{cardError}</p>}
            {transactionId && <p className="text-green-900 ml-6 font-semibold font-poppins">Transaction complete with transactionId: {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;