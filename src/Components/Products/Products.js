import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect( ()=>{
        fetch('https://powerful-journey-89859.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])

    return (
        <div id="services" className='container'>
        <div className="">
        <h1 className='text-primary text-center mt-5'> Sports Bikes</h1>
        <div className="products-container">
        {
            products.slice(0,3).map(product => <Product
                key={product._id}
                product={product}
            >
            </Product>)
        }
        </div>
        </div>
    </div>
    );
};

export default Products;