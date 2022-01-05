import Image from "next/image";
import Footer from "../Component/Footer/Footer";
import Navbar from "../Component/Header/Navbar";
import Login from "../Component/Login/Login";
import Post from "../Component/Post/Post";
import useAuth from "../Hooks/useAuth";
import profile from '../Images/profile.png'

import React from 'react';
import Link from "next/link";
import RecentPost from "../Component/RecentPost/RecentPost";

const index = ({ data }) => {
  const { user, isLoading } = useAuth()

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

        <>
          {
            user.email ? <><Navbar></Navbar>
              {
                <div className="dark:bg-gray-900">
                  <div className='flex w-3/4 mx-auto  hero m-10 px-10 py-10'>
                    <div className='w-1/2 mt-28'>
                      <h4 className="text-blue-400">WELCOME TO MY BLOG</h4>
                      <h1 className="text-4xl font-extrabold my-5">We all owe <br /> death a life.</h1>
                      <p className="text-gray-700 dark:text-gray-300">Here is a place that i share my writings about design <br /> and photography. Read Write and Discuss With me.</p>
                      <div className="relative mt-5 w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                        <input type="text" id="footer-field" name="footer-field" className="w-1/2 bg-transparent border-2  text-base outline-none text-gray-900 dark:text-gray-50 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        <button className="mx-5  lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 ">Subscribe</button></div>
                    </div>
                    <div className='w-1/2 mt-10'>
                      <Image src={profile} className='mt-10 -mb-5' alt="" />
                    </div>
                  </div>
                </div>
              }

              {
                <section className="text-gray-600 body-font">
                  <div className="container px-5 py-24 mx-auto">
                    <div className="flex justify-between items-center">
                      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50  my-5">Featerd Post</h1>
                      <div>
                        <button><img className="bg-blue-500 rounded-full p-1 mx-1" src="https://i.ibb.co/v1zwLqs/Arrow-2-1.png" alt="" /></button>
                        <button><img className="bg-blue-500 rounded-full p-1 mx-1" src="https://i.ibb.co/gvNk8Gc/Arrow-2.png" alt="" /></button>
                      </div>
                    </div>
                    <div className="flex flex-wrap -m-4">
                      {
                        data.slice(0, 3).map(posts =>
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
              {
                <section className="text-gray-600 body-font">
                  <div className="container px-5 py-24 mx-auto">
                    <div className="flex justify-between items-center">
                      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50 my-5">Populer This Week</h1>
                      <div>
                        <button className="border py-2 px-4"><Link href="/blog" >See All</Link></button>
                      </div>
                    </div>
                    <div className="flex flex-wrap -m-4">
                      {
                        data.slice(7, 13).map(posts =>
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
              {
                <section>
                  <h1 className="container font-bold text-2xl w-11/12 mx-auto my-5">Recent Post</h1>
                  <div className="container w-11/12 mb-10 grid md:grid-cols-2 gap-4 mx-auto">
                    {
                      data.slice(14, 22).map(posts =>
                        <RecentPost
                          key={posts.id}
                          post={posts}
                        >
                        </RecentPost>)
                    }

                  </div>

                </section>
              }
              {
                <section className="flex justify-between items-center container w-11/12 mb-10 mx-auto px-20 py-10  bg-gray-200 border-t dark:border-gray-800 dark:bg-gray-900 border">
                  <div className="flex justify-center items-center">
                    <img height="75px" width="75px" className="border rounded-full mr-5" src="https://i.ibb.co/hRp0W87/istockphoto-1168518509-612x612-removebg-preview.png" alt="" />
                    <h1 className="text-xl font-bold" >Join the news later and read <br /> the news post first!</h1>

                  </div>
                  <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                    <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                      <input type="text" id="footer-field" name="footer-field" className="w-full rounded border bg-opacity-40 border-gray-700 bg-transparent focus:ring-2 focus:ring-indigo-900 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Email" />
                    </div>
                    <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Subscribe</button>
                  </div>
                </section>
              }

              <Footer></Footer></> : <Login></Login>
          }

        </>}
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