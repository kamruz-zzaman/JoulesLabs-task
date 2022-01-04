import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Footer/Footer';
import Navbar from '../Header/Navbar';
import Login from '../Login/Login';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const { total, user } = useAuth();
    const [clientSecret, setClientSecret] = useState('');
    const [error, setError] = useState('');
    // const [success, setSuccess] = useState('');



    useEffect(() => {
        fetch('https://dark-tomb-38660.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ total })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret));
    }, []);

    console.log(clientSecret);
    const handleSubmit = async (e) => {
        e.preventDefault();
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
            setError(error.message);
            // setSuccess('');

        } else {
            setError('');
            swal({
                title: "Payment Success!",
                icon: "success",
                button: "OK!",
            });
        }
        // payment intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user.displayName,
                        email: user.email
                    },
                },
            },
        );

        if (intentError) {
            setError(intentError.message);
            setSuccess('');
        }
        else {
            setError('');
        }


    }
    return (
        <>
            {
                user.email ? <>

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
                            {
                                total === 0 ? <button type="submit" className='px-3 py-2 bg-red-200 text-black border rounded' disabled={true}>
                                    Pay
                                </button> : <button type="submit" className='px-3 py-2 bg-red-700 rounded' disabled={!stripe}>
                                    Pay
                                </button>
                            }

                        </div>
                        {
                            error && <p className='text-center mt-5' style={{ color: 'red' }}>{error}</p>
                        }
                    </form>

                    {/* {
                success && <p style={{ color: 'green' }}>{success}</p>
            } */}
                    <Footer></Footer>
                </> : <Login></Login>
            }
        </>
    );
};

export default CheckoutForm;