import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Footer from '../../Component/Footer/Footer';
import Navbar from '../../Component/Header/Navbar';

const id = ({ data }) => {
    return (
        <>
            <Navbar></Navbar>
            <div className='w-1/2 mx-auto my-10'>
                <img src="https://i.ibb.co/7ShKJWZ/Concept-of-an-open-magic-book-open-pages-with-water-and-land-and-small-child-Fantasy-nature-or-learn.jpg" alt="" />
                <h1 className='text-center font-bold text-2xl m-5'>{data.title}</h1>
                <p>{data.body}</p>
            </div>
            <Footer></Footer>
        </>
    );
};

export default id;

export async function getStaticPaths() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
    const data = await res.json();
    const paths = data.map((curElm) => {
        return {
            params: { id: curElm.id.toString() },
        }
    })
    return {
        paths,
        fallback: false,
    }
}
export async function getStaticProps(context) {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json();
    return {
        props: { data }
    }
}