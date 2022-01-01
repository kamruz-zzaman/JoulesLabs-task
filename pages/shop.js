import React, { useState } from 'react';
import Cart from '../Component/Cart/Cart';
import Footer from '../Component/Footer/Footer';
import Navbar from '../Component/Header/Navbar';
import Shop from '../Component/Shop/Shop';

const shop = ({ data }) => {

    const [cart, setCart] = useState([])
    const AddHandler = (teamBtn) => {
        const newCart = [...cart, teamBtn]
        setCart(newCart);
    }
    console.log(cart);
    return (
        <>
            <Navbar></Navbar>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <p className='text-2xl font-bold text-violet-800 text-center mb-5'>Shop</p>
                    <div className='grid grid-cols-3 gap-5'>
                        <div className="col-span-2 flex flex-wrap -m-4">
                            {
                                data.map(product =>
                                    <Shop
                                        key={product.id}
                                        products={product}
                                        buttonHandle={AddHandler}
                                    >

                                    </Shop>
                                )
                            }
                        </div>
                        <div className='w-1/4 h-72 border bg-blue-900 text-white fixed top-24 right-0' >
                            <Cart
                                // transfer cart data 
                                cart={cart}
                            ></Cart>
                        </div>
                        <div className='h-96'></div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    );
};

export default shop;

export async function getStaticProps() {
    const res = await fetch(`https://fakestoreapi.com/products`)
    const data = await res.json();
    return {
        props: { data }
    }
}