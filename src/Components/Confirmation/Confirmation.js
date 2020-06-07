import React, {useState} from 'react';
import './Confirmation.scss';

import {loadStripe} from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
  } from '@stripe/react-stripe-js';
import CheckoutForm from '../Payment/Payment';

const Confirmation = () => {

    const [info, setInfo]= useState(null)

    const handlePlaceOrder=(payment)=>{
        const orderDetails={
            info: info,
            payment: payment
        }
        console.log(orderDetails)
    }

    const stripePromise = loadStripe('pk_test_9LdgoCBp8Incv69ExYHe6Z7700x0gmpujW');

    const onSubmit = data => {
        setInfo(data)
        // console.log(data) 
    }
    return (
        <div className="payment-form container">
            <h1>Payment</h1>
            <Elements stripe={stripePromise}>
                    <CheckoutForm handlePlaceOrder={handlePlaceOrder}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Confirmation;