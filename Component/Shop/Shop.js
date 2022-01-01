import React from 'react';

const Shop = ({ products, buttonHandle }) => {
    const { title, price, image, category, description } = products;
    return (
        <>

            <div className="p-4 w-1/2 cursor-pointer">
                <div className=" md:h-full p-4 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <div className='flex justify-center items-center'>
                        <img className="h-64 lg:h-48 md:h-36 w-48 object-cover object-center" src={image} alt="blog" />
                    </div>
                    <div className="py-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{category}</h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
                        {/* <p className="leading-relaxed mb-3">{description}</p> */}
                        <div className="flex items-center justify-between flex-wrap ">
                            <p className="text-gray-400 mr-3 inline-flex items-center  leading-none text-sm pr-3 py-1 ">
                                <p className='fon font-bold'>${price}</p>
                            </p>
                            <button onClick={() => buttonHandle(products)} className='border bg-violet-600 text-white py-1 px-3 rounded hover:bg-violet-700'>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Shop;