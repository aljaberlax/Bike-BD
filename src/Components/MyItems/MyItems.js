import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MyItem.css'
const MyItems = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://powerful-journey-89859.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('want to delete?')
        if (proceed) {
            const url = `https://powerful-journey-89859.herokuapp.com/product/${id}`
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

    return (
        <div id="services" className='container'>
            <div className="">
                <h1 className=' text-center mt-5'>My items</h1>
                <br />
                <div className="products-container">
                    {
                        products.map(product => <div key={product._id} >


                            <img style={{ width: '200px' }} src={product.img} alt="" />
                            <h4>{product.name}</h4>
                            <h6>Price: {product.price}</h6>
                            <button className='btn btn-primary' onClick={() => handleDelete(product._id)}>delete</button>

                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyItems;