import Link from 'next/link';
import React from 'react';
import useAuth from '../../Hooks/useAuth';



const Cart = () => {
    const { cart, total } = useAuth();
    return (
        <>
            <h1 className='text-center text-2xl font-bold  '>Cart</h1>
            <div className='text-center text-xl mt-5'>
                <p className='font-bold'>Total Added Product: {cart.length}</p>
                <p className='font-bold'>Total: ${total}</p>
                <div className='flex justify-center items-center mt-2 '>
                    <Link href="/checkout" passHref><button className='bg-violet-600  text-white py-1 px-3 rounded hover:bg-violet-700'>CheckOut</button></Link>
                </div>
            </div>
        </>
    );
};

export default Cart;