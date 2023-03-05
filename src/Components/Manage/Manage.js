import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UseProduct from '../../Hooks/UseProduct';
import Product from '../Product/Product';

const Manage = () => {
    const [products, setProducts] = useState([]);
    const navigate=useNavigate();
    useEffect(() => {
        fetch('https://bike-bd-server.onrender.com/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('want to delete?')
        if (proceed) {
            const url = `https://bike-bd-server.onrender.com/product/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = products.filter(product => product._id !== id)
                    setProducts(remaining)
                })
        }
    }
const navigateToAddItem=()=>{
  navigate('/additems')
}
    return (
        <div id="services" className='container'>
            <div className="">
                <h1 className=' text-center mt-5'>Manage items</h1>
                <br />
                <button className='btn btn-primary' onClick={navigateToAddItem}>Add New Item</button>
                <div className="products-container">
                    {
                        products.map(product => <div key={product._id} >
                            <h1>{product.name}</h1>

                            <p>Seller: {product.seller}</p>
                            <img style={{ width: '200px' }} src={product.img} alt="" />
                            <h2>Price: {product.price}</h2>
                            <p>{product.description}</p>
                            <button className='btn btn-primary' onClick={() => handleDelete(product._id)}>delete</button>

                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Manage;