import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="text-gray-400 bg-gray-200 border-t dark:border-gray-800 dark:bg-gray-900 drop-shadow-2xl  body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap md:text-left text-center order-first">
                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <span className="title-font font-medium text-black tracking-widest text- mb-3 dark:text-gray-50">JoulesLabs</span>
                            <nav className="list-none my-10">
                                <li>
                                    <a className="text-gray-700 dark:text-gray-50">Home Page</a>
                                </li>
                                <li>
                                    <a className="text-gray-700 dark:text-gray-50">About</a>
                                </li>
                                <li>
                                    <a className="text-gray-700 dark:text-gray-50">Contact</a>
                                </li>
                                <li>
                                    <a className="text-gray-700 dark:text-gray-50">Article Page</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2  w-full px-4">
                            <h2 className="title-font font-medium text-black tracking-widest text-sm mb-3 dark:text-gray-50">CATEGORIES</h2>
                            <nav className="list-none my-10">
                                <li>
                                    <a className="text-gray-700 dark:text-gray-50">Style Guide</a>
                                </li>
                                <li>
                                    <a className="text-gray-700 dark:text-gray-50">Getting Started</a>
                                </li>
                                <li>
                                    <a className="text-gray-700 dark:text-gray-50">Changelog</a>
                                </li>
                            </nav>
                        </div>

                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-black dark:text-gray-50 tracking-widest text-md mb-3">Join the news later and read the new post first</h2>
                            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                                    <label htmlFor="footer-field" className="leading-7 text-sm text-gray-700 dark:text-gray-50">Lorem ipsum dolor sit amet consectetur adipisicing elit.</label>
                                    <input type="text" id="footer-field" name="footer-field" placeholder='Email' className="w-full rounded border bg-opacity-40 border-gray-700 bg-transparent focus:ring-2 focus:ring-indigo-900 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" bg-opacity-75">
                    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                        <p className="text-sm text-gray-700 dark:text-gray-50 sm:ml-6 sm:mt-0 mt-4">© 2022 JoulesLabs —
                            <a href="https://twitter.com/knyttneve" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@kamruzzaman</a>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                            <a className="text-gray-700 dark:text-gray-50">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-700 dark:text-gray-50">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-700 dark:text-gray-50">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-700 dark:text-gray-50">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;