import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import './MyItem.css'
const MyItems = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const getMyItems = async () => {


        }

    }, [])
    return (
        <div className='my-item'>
            <h1>my items</h1>
        </div>
    );
};

export default MyItems;