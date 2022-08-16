import React from "react";
import { useParams } from "react-router-dom";



const SingleProduct = () => {
    const { id } = useParams();  
    return (
    <div>
        <h2 className="text-center my-4 text-3xl font-bold">You have clicked on: {id}</h2>
        </div>
    );
};

export default SingleProduct;
