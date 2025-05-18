import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const navigate = useNavigate();
    const { _id, name, Quantity, supplier, taste, category, details, photo } = useLoaderData();
    const handleUpdateCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updateCoffee = Object.fromEntries(formData.entries());
        fetch(`http://localhost:4000/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "coffee updated successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            })
    }

    return (
        <div className='bg-orange-50 my-16 px-6 md:px-24 py-10 rounded-xl max-w-4xl mx-auto'>
            <div className='text-center mb-8'>
                <h1 className='text-4xl md:text-6xl font-bold text-[#374151] mb-3'> Update Coffee</h1>
            </div>
            <form onSubmit={handleUpdateCoffee}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                        <label className="block mb-1 font-medium">Name</label>
                        <input type="text" name='name' defaultValue={name} required className="input input-bordered w-full" placeholder="Enter coffee name" />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Quantity</label>
                        <input type="text" name='Quantity' defaultValue={Quantity} required className="input input-bordered w-full" placeholder="Enter coffee Quantity" />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Supplier</label>
                        <input type="text" name='supplier' defaultValue={supplier} required className="input input-bordered w-full" placeholder="Enter coffee supplier" />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Taste</label>
                        <input type="text" name='taste' defaultValue={taste} required className="input input-bordered w-full" placeholder="Enter coffee taste" />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Category</label>
                        <input type="text" name='category' defaultValue={category} required className="input input-bordered w-full" placeholder="Enter coffee category" />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Details</label>
                        <input type="text" name='details' defaultValue={details} required className="input input-bordered w-full" placeholder="Enter coffee details" />
                    </div>
                </div>
                <div className="mt-6">
                    <label className="block mb-1 font-medium">Photo URL</label>
                    <input type="text" name='photo' defaultValue={photo} required className="input input-bordered w-full" placeholder="Enter photo URL" />
                </div>
                <input
                    type="submit"
                    className="mt-6 btn w-full bg-[#D2B48C] text-[#374151] hover:bg-[#b49874]"
                    value="Update Coffee"
                />
            </form>
            <button onClick={() => navigate(-1)}>go back</button>
        </div>


    );
};

export default UpdateCoffee;