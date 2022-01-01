import React from 'react';

const Cart = ({ cart }) => {
    let total = 0;
    // looping card data
    for (const carts of cart) {
        const { price } = carts;
        total = total + price;
    }
    return (
        <>
            <h1 className='text-center text-2xl font-bold mt-5 '>Cart</h1>
            <div className='m-16 text-xl'>
                <p className='font-bold'>Total Added Product: {cart.length}</p>
                <p className='font-bold'>Total: ${total}</p>
                <div className='flex justify-center items-center mt-5 '>
                    <button className='bg-violet-600 text-sm text-white py-1 px-3 rounded hover:bg-violet-700'>Buy</button>
                </div>
            </div>
        </>
    );
};

export default Cart;