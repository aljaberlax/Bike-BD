import React, { useEffect, useState } from 'react';

const UseProductDetails = productId => {
    const [product, SetProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => SetProduct(data))
    }, [productId])


    return [product]
};

export default UseProductDetails;