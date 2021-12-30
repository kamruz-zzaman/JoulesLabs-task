import Image from 'next/image';
import React from 'react';
import useAuth from '../../Hooks/useAuth';
import logo from '../../Images/company_logo.png'
const Navbar = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <header className="text-gray-400 bg-gray-900 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-xl text-white mb-4 md:mb-0">
                        <Image width='50px' height="50px" src={logo} alt="" />JoulesLabs</a>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-white">Home</a>
                        <a className="mr-5 hover:text-white">Blog</a>
                        <a className="mr-5 hover:text-white">Post</a>
                        <a className="mr-5 hover:text-white">Shop</a>
                    </nav>
                    {
                        user.email ? <div className='flex'>
                            <p className='mx-10'>{user.displayName}</p>
                            <button onClick={logOut} className='py-1 px-4 rounde hover:text-rose-800 border-2'>LogOut</button>
                        </div> : null
                    }
                </div>
            </header>
        </>
    );
};

export default Navbar;