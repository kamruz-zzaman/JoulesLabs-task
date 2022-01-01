import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from '../Component/CheckoutForm/CheckoutForm';
import useAuth from '../Hooks/useAuth';


const stripePromise = loadStripe('pk_test_51KDBwVI5bUWtiLxyxOwAmeCNxX3uc66diDq21e5gvEHiq1rfxOnyuAUmSNlX0LIRpwwuf6Fsoh82qtV85qgMGzUZ001ptvLGk3')

const checkout = () => {


    return (
        <>
            <Elements stripe={stripePromise}>


                <CheckoutForm></CheckoutForm>


            </Elements>
        </>
    );
};

export default checkout;