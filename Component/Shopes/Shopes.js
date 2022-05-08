import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Cart from '../Cart/Cart';
import Footer from '../Footer/Footer';
import Navbar from '../Header/Navbar';
import Login from '../Login/Login';
import Shop from '../Shop/Shop';

const Shopes = ({ data }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return (
            <div className="h-screen text-center my-80">
                <p className="text-2xl">Loading.............</p>
            </div>
        )
    }
    return (
        <>
            {
                user.email ? <> <Navbar></Navbar>
                    <section className="text-gray-600 body-font">
                        <div className="container px-5 py-24 mx-auto">
                            <p className='text-2xl font-bold text-violet-800 text-center mb-5'>Shop</p>
                            <div className='md:grid md:grid-cols-3 md:gap-5'>
                                <div className="col-span-2 flex flex-wrap -m-4">
                                    {
                                        data.map(product =>
                                            <Shop
                                                key={product.id}
                                                products={product}
                                            >

                                            </Shop>
                                        )
                                    }
                                </div>
                                <div className='w-1/4 h-44 border bg-blue-900 text-white fixed top-24 right-0' >
                                    <Cart></Cart>
                                </div>
                                <div className='h-96'></div>
                            </div>
                        </div>
                    </section>
                    <Footer></Footer>
                </> : <Login></Login>
            }

        </>
    );
};

export default Shopes;

export async function getStaticProps() {
    const res = await fetch(`https://fakestoreapi.com/products`)
    const data = await res.json();
    return {
        props: { data }
    }
}