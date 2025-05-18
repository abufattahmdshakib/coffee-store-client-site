import React from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from '../page/coffeeCard';

const Home = () => {
    const coffeeData = useLoaderData();
    
    return (
        <div>
            <h1>--- Sip & Savor ---</h1>
            <h1>Our Popular Products</h1>
            <h1>Add Coffee</h1>
            <div className='grid grid-cols-2 gap-4'>
                {
                   coffeeData.map( coffee => <CoffeeCard key={coffee._id} coffee ={coffee}></CoffeeCard>) 
                }
            </div>
        </div>
    );
};

export default Home;