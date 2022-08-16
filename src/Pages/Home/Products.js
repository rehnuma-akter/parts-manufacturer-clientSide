import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('https://whispering-shelf-61857.herokuapp.com/parts')
        .then((res)=> res.json())
        .then((data)=> setProducts(data));
    },[]);
    return (
        <div>
            <h2 className='text-4xl my-12'>Our Products</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-7 justify-center items-center mx-7 my-14'>
                {products.map((product) => (
                <Product key={product._id} product={product}></Product>
                ))}
            </div>
        </div>
    );
};

export default Products;