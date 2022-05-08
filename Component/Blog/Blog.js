import React from 'react';
import Navbar from '../Header/Navbar';
import Login from '../Login/Login';
import Post from '../Post/Post';
import Footer from '../Footer/Footer';
import useAuth from '../../Hooks/useAuth';

const Blog = ({ data }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return (
            <div className="h-screen text-center my-80">
                <p className="text-2xl">Loading.............</p>
            </div>
        )
    }
    return (
        <>{
            data.length === 0 ? <div className="h-screen text-center my-80">
                <p className="text-2xl">Loading.............</p>
            </div> :

                <> {
                    user.email ? <>
                        <Navbar />
                        <section className="text-gray-600 body-font">
                            <div className="container px-5 py-24 mx-auto">
                                <div className="flex flex-wrap -m-4">
                                    {
                                        data.map(posts =>
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
        }
        </>

    );
};

export default Blog;

export async function getStaticProps() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
    const data = await res.json();
    return {
        props: { data }
    }
}