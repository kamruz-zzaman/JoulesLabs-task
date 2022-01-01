import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Footer/Footer';
import Navbar from '../Header/Navbar';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const { total } = useAuth();
    const handleSubmit = async (e) => {
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }
        e.preventDefault();
    }
    return (
        <>
            <Navbar></Navbar>
            <form onSubmit={handleSubmit} className='w-1/2 border mx-auto text-white my-10 p-10'>
                <h1 className='text-black text-center mb-5 text-2xl font-bold'>Pay: ${total}</h1>
                <CardElement className="border py-2 rounded px-5"
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: 'black',
                                '::placeholder': {
                                    color: 'black',
                                },
                            },
                            invalid: {
                                color: 'red',
                            },
                        },
                    }}
                />
                <div className='flex justify-center items-center mt-20'>
                    <button type="submit" className='px-3 py-2 bg-red-700 rounded' disabled={!stripe}>
                        Pay
                    </button>
                </div>
            </form>
            <Footer></Footer>
        </>
    );
};

export default CheckoutForm;