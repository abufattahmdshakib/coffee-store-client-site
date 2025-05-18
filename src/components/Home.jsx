import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from '../page/coffeeCard';

const Home = () => {
    const initalcoffeeData = useLoaderData();
    //delete korar por reload na diye display theke soranor jonno
    const [coffeeData , setCoffeeData] = useState(initalcoffeeData);
    
    return (
        <div>
            <h1>--- Sip & Savor ---</h1>
            <h1>Our Popular Products</h1>
            <h1>Add Coffee</h1>
            <div className='grid grid-cols-2 gap-4'>
                {
                   coffeeData.map( coffee => <CoffeeCard key={coffee._id} coffeeData = {coffeeData} setCoffeeData = {setCoffeeData}  coffee ={coffee}></CoffeeCard>) 
                }
            </div>
        </div>
    );
};

export default Home;