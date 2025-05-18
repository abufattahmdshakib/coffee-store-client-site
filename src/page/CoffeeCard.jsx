import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee ,coffeeData ,setCoffeeData }) => {
    const { _id, photo, name, taste } = coffee;

    const handleDelete = (_id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:4000/coffees/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                            //remove the coffee card to display
                            const remainingCard = coffeeData.filter(card => card._id !== _id);
                            setCoffeeData(remainingCard);
                        }
                    })
                    

            }
        });
    };
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm">
                <figure>
                    <img
                        src={photo}
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{taste}</p>
                    <div className="card-actions justify-end">
                        <div className="join join-vertical">
                            <Link to={`/coffees/${_id}`}><button className="btn join-item">view</button></Link>
                           <Link to={`/UpdateCoffee/${_id}`}> <button className="btn join-item">Edit</button></Link>
                            <button onClick={() => handleDelete(_id)} className="btn join-item">X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;