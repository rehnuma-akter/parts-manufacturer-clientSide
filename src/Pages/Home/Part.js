import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    const { name, desc, min_order, quantity, price, img, _id } = part;
    const navigate = useNavigate()
    const navigatePurchase = (_id) => {
        navigate(`/purchase/${_id}`)
    }
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure><img src={img} className="rounded-xl w-2/3" alt="" /></figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{desc}</p>
                <p>$<small>{price}</small></p>
                <p>Available: {quantity} </p>
                <p>Minium Order: {min_order} </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={() => navigatePurchase(_id)}>Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Part;
