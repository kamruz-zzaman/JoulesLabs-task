import Image from "next/image";
import Footer from "../Component/Footer/Footer";
import Navbar from "../Component/Header/Navbar";
import Login from "../Component/Login/Login";
import Post from "../Component/Post/Post";
import useAuth from "../Hooks/useAuth";
import profile from '../Images/profile.png'

import React from 'react';

const index = ({ data }) => {
  const { user } = useAuth()

  return (
    <>
      {
        user.email ? <><Navbar></Navbar>

          {
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl font-bold text-black my-5">Featerd Post</h1>
                  <div>
                    <button><img className="bg-blue-500 rounded-full p-1 mx-1" src="https://i.ibb.co/v1zwLqs/Arrow-2-1.png" alt="" /></button>
                    <button><img className="bg-blue-500 rounded-full p-1 mx-1" src="https://i.ibb.co/gvNk8Gc/Arrow-2.png" alt="" /></button>
                  </div>
                </div>
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
          }

          <Footer></Footer></> : <Login></Login>
      }
    </>
  );
};

export default index;
export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
  const data = await res.json();
  return {
    props: { data }
  }
}