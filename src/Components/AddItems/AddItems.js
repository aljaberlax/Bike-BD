import React from 'react';
import { useForm } from 'react-hook-form';
import './AddItem.css'

const AddItems = () => {

    const { register, handleSubmit } = useForm();
    
    const onSubmit = data => {
        console.log(data);
        const url = `https://powerful-journey-89859.herokuapp.com/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
            window.alert('data added successfully')
        } )
    };
    return (
        <div className='w-50 mx-auto additem'>
        <h2>Add Item</h2>
        <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
            
            <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
            <br />
            <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
            <br />
            <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
            <br />
            <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
            <br />
            <input className='mb-2' placeholder='Seller' type="text" {...register("seller")} />
            <br />
            <textarea className='mb-2' placeholder='Description' {...register("description")} />
            <br />
            <input type="submit" value="Add Product" />
        </form>
    </div>
    );
};

export default AddItems;