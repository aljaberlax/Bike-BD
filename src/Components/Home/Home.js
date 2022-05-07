import React from 'react';
import { useNavigate } from 'react-router-dom';
import Products from '../Products/Products';
import Banner from './Banner/Banner';

const Home = () => {
    const navigate=useNavigate()
    const handleToManage =()=>{
        navigate('/manage')
    }
    return (
        <div>
           <Banner></Banner>
           <Products></Products>
           <button onClick={handleToManage}>Manage</button>
        </div>
    );
};

export default Home;