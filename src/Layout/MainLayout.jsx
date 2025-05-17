import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import AddCoffee from '../components/AddCoffee';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <AddCoffee></AddCoffee>
            <div className='max-w-7xl mx-auto'>
                <Outlet>
                    
                </Outlet>

            </div>
        </div>
    );
};

export default MainLayout;