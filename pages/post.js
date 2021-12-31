import React from 'react';
import Footer from '../Component/Footer/Footer';
import Navbar from '../Component/Header/Navbar';
import Login from '../Component/Login/Login';
import Post from '../Component/Post/Post';
import useAuth from '../Hooks/useAuth';

const post = ({ data }) => {
    const { user } = useAuth();
    return (
        <>
            {
                user.email ? <>
                    <Navbar />
                    <h1>Featured Post</h1>
                    <section className="text-gray-600 body-font">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="flex flex-wrap -m-4">
                                {
                                    data.slice(0, 6).map(posts =>
                                        <Post
                                            key={posts.id}
                                            post={posts}
                                        >
                                        </Post>)
                                }
                            </div>
                        </div>
                    </section>
                    <Footer />
                </> : <Login />
            }

        </>

    );
};

export default post;

export async function getStaticProps() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
    const data = await res.json();
    return {
        props: { data }
    }
}