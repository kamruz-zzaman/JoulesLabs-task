// import Image from 'next/image';
import React from 'react';
import Footer from '../Component/Footer/Footer';
import Navbar from '../Component/Header/Navbar';
import Login from '../Component/Login/Login';
import useAuth from '../Hooks/useAuth';

const profile = () => {
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
                user.email ? <>
                    <Navbar />
                    <div className='flex mx-auto justify-center py-20 my-36 border dark:border-black w-1/3'>
                        <div>
                            <img className='ml-20 border border-green-500 rounded-full' src={user.photoURL} alt="User profile" />
                            <div className='mt-10'>
                                <p className='text-xl'><span className='font-bold'>Name:</span> {user.displayName}</p>
                                <p className='text-xl'><span className='font-bold'>Email:</span> {user.email}</p>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </> : <Login></Login>
            }
        </>
    );
};

export default profile;