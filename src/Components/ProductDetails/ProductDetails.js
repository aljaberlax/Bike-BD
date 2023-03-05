import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './ProductDetails.css'

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, SetProduct] = useState([])
    const [reload, setReload] = useState(false)
    useEffect(() => {
        const url = `https://bike-bd-server.onrender.com/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => SetProduct(data));

    }, [productId, reload]);


    const handleUpdateQuantity = async event => {
        event.preventDefault();
        const newQuantity = event.target.quantity.value;
        const quantity = parseInt(product.quantity) + parseInt(newQuantity)
        await axios.put(`https://bike-bd-server.onrender.com/product/${productId}`,
            {
                quantity
            })
            .then(response => {
                setReload(!reload)
                console.log(response);
            })

    }
    const handleDeliver = () => {

        const quantity = parseInt(product.quantity) - 1;
        axios.put(`https://bike-bd-server.onrender.com/product/${productId}`,
            {
                quantity
            })
            .then(response => {
                setReload(!reload)
                window.alert('Delivered Successfull');
            })
    }
console.log(product)
    return (
        <div className='product-details'>
            <h2>Selected Product : {product.name}</h2>
            <br />
            <h2> Quantity : {product?.quantity}</h2>
            <img style={{ height: '200px' }} src={product.img} alt="" />
            <br />
            <form onSubmit={handleUpdateQuantity} >
                <input type="number" name="quantity" placeholder='Update quantity' id="" />
                <button>Update </button>
            </form>
            <button onClick={handleDeliver}>Deliver </button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ProductDetails;