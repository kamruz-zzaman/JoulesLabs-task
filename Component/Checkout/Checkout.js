import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState } from 'react';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import Footer from '../Footer/Footer';
import Navbar from '../Header/Navbar';
import Products from '../Products/Products';
import useAuth from '../../Hooks/useAuth';


const stripePromise = loadStripe('pk_test_51KDBwVI5bUWtiLxyxOwAmeCNxX3uc66diDq21e5gvEHiq1rfxOnyuAUmSNlX0LIRpwwuf6Fsoh82qtV85qgMGzUZ001ptvLGk3')

const Checkout = () => {
    const { cart, total } = useAuth();
    return (
        <>
            <Navbar></Navbar>
            <div >
                <div className='text-center  my-10'>
                    <h1 className='text-2xl my-5'>Added Product</h1>
                    {
                        cart.map(product =>
                            <Products
                                key={product.id}
                                product={product}
                            ></Products>
                        )
                    }
                    <div className='border w-1/2 mx-auto flex justify-between px-5 font-bold text-md'>
                        <span className='mr-10'>Total=</span><br />
                        <span className='mr-10'>{total}</span>
                    </div>
                </div>
                <div>
                    <Elements stripe={stripePromise}>


                        <CheckoutForm></CheckoutForm>


                    </Elements>
                </div>
            </div>

            <Footer></Footer>
        </>
    );
};

export default Checkout;