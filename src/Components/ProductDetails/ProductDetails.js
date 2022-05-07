import React from 'react';
import { Link, useParams } from 'react-router-dom';
import UseProductDetails from '../../Hooks/UseProductDetails';
import './ProductDetails.css'

const ProductDetails = () => {
    const { productId } = useParams();
    const [product]=UseProductDetails(productId)
    return (
        <div className='product-details'>
             <h2>Selected Product : {product.name}</h2>
             <br />
             <h2> Quantity : {product.quantity}</h2>
             <img style={{height:'200px'}} src={product.img} alt="" />
             <br />
             <input type="number" name="quantity" placeholder='Update quantity' id="" />
             <button>Update </button>
            <div className='text-center'>
            <button className='btn btn-primary'>Deliver</button>
                <Link to={`/checkout/${productId}`}>
                   
                </Link>
            </div>
        </div>
    );
};

export default ProductDetails;