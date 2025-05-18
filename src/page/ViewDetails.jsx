import React from 'react';
import { useNavigate } from 'react-router';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const coffee = useLoaderData();
    const { name, photo, taste, supplier, category } = coffee;
    const navigate= useNavigate();

    return (
        <div className="max-w-md mx-auto bg-white p-4 rounded shadow">
            <img src={photo} alt={name} className="w-full h-64 object-cover rounded mb-4" />
            <h2 className="text-2xl font-bold">{name}</h2>
            <p><strong>Taste:</strong> {taste}</p>
            <p><strong>Supplier:</strong> {supplier}</p>
            <p><strong>Category:</strong> {category}</p>
            <button onClick={()=>navigate(-1) }>go back</button>
        </div>
    );
};

export default ViewDetails;
