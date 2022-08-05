import React from 'react';
import Part from './Part';
import { useQuery } from "react-query";
import Loading from '../Shared/Loading';
const Parts = () => {
    const { isLoading, data: parts } = useQuery("part", () => fetch("https://whispering-shelf-61857.herokuapp.com/parts").then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div className="p-5">
            <h2 className='text-center text-3xl font-bold'>Our Products</h2>
            <div className="grid my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    parts?.map(part => <Part key={part._id} part={part}></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;
