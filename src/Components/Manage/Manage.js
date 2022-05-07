import React from 'react';
import UseProduct from '../../Hooks/UseProduct';
import Product from '../Product/Product';

const Manage = () => {
    const [products, setProducts] = UseProduct();

    return (
        <div id="services" className='container'>
        <div className="row">
        <h1 className='text-primary text-center mt-5'>manage items</h1>
        <div className="products-container">
        {
            products.map(product => <Product
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

export default Manage;