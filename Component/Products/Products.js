import React from 'react';

const Products = ({ product, AddHandler }) => {
    const { title, price } = product;
    return (
        <div className='border w-1/2 mx-auto flex justify-between px-5'>
            <span className='mr-10'>{title}</span><br />
            <span className='mr-10'>{price}</span>
        </div>
    );
};

export default Products;