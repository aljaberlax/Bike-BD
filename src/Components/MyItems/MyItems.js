import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';

const MyItems = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const getMyItems = async () => {


        }

    }, [])
    return (
        <div>
            <h1>my items</h1>
        </div>
    );
};

export default MyItems;