import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductDetails.css'

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, SetProduct] = useState([])
    const [quantity, setQuantity] = useState({});
    const [reload, setReload] = useState(false)
    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => SetProduct(data));

    }, [productId, reload]);
    console.log(product)
    const handleUpdateQuantity = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
        console.log(quantity)
        // const updateQuantity = {quantity};

        // send data to the server
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(quantity)
        })
            .then(res => res.json())
            .then(data => {
                setReload(!reload)
                alert('updated successfully!!!');
                event.target.reset();
            })
    }

    return (
        <div className='product-details'>
            <h2>Selected Product : {product.name}</h2>
            <br />
            <h2> Quantity : {product.quantity}</h2>
            <img style={{ height: '200px' }} src={product.img} alt="" />
            <br />
            <form onSubmit={handleUpdateQuantity} >
                <input type="number" name="quantity" placeholder='Update quantity' id="" />
                <button>Update </button>
            </form>
            <div className='text-center'>
                <button className='btn btn-primary'>Deliver</button>
                <Link to={`/checkout/${productId}`}>

                </Link>
            </div>
        </div>
    );
};

export default ProductDetails;