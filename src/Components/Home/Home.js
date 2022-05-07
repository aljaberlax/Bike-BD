import React from 'react';
import { useNavigate } from 'react-router-dom';
import Products from '../Products/Products';
import Banner from './Banner/Banner';
import './Home.css'

const Home = () => {
    const navigate=useNavigate()
    const handleToManage =()=>{
        navigate('/manage')
    }
    return (
        <div className='home-page'>
           <Banner></Banner>
           <Products></Products>
           <button onClick={handleToManage}>Manage</button>
        </div>
    );
};

export default Home;