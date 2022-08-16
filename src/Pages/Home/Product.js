import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
    const { _id, name, desc, price, img, min_order, quantity } = product;
    return (
        <div class="card w-96">
        <figure class="px-10 pt-10">
            <img src={img} alt="products" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">{name}</h2>
            <p>
            {desc.slice(0, 70)}
            <span className="text-blue-700"> ...more</span>
            </p>
            <p className="text-xl">${price}</p>
            <p className="font-bold">Minimum: {min_order} orders</p>
            <p>Available Quantity: {quantity}</p>
            <div class="card-actions">
            <Link to={`/product/${_id}`}>
                <button class="btn btn-neutral text-white">Purchase</button>
            </Link>
            </div>
        </div>
        </div>
    );
};

export default Product;
