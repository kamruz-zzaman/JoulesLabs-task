import Image from 'next/image';
import React from 'react';
import logo from '../../Images/company_logo.png'
import googleLogo from '../../Images/google-logo.png'
import useAuth from '../../Hooks/useAuth';
const Login = () => {
    const { signinWithGoogle, user } = useAuth();
    console.log(user);
    return (
        <>
            <div className='flex justify-center items-center' >
                <div className='border-2 px-10 py-16 m-10 rounded-lg'>
                    <div className='flex justify-center items-center mt-5'>
                        <Image width="120px" height="120px" className='' src={logo} alt="" />
                    </div>
                    <div>
                        <p className='font-bold text-3xl m-5 text-center'>Login With</p>
                        <button onClick={signinWithGoogle} className=' ml-8 my-5 border-2 py-1 text-center px-7 rounded-3xl'><Image width='20px' height='20px' className=' inline  ' src={googleLogo} alt="" /> Continue with Google </button>
                        <p>Don`t have an account? <a href="https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp" target='_blank' rel="noreferrer" className='text-blue-400 border-b  border-blue-300'>Create an account</a> </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;