import React from 'react';

const Reviews = () => {
    return (
        <div className='bg-accent pb-12'>
            <h2 className='pt-8 text-white'>Customer Reviews</h2>
            <h3 className='text-3xl mt-5 mb-12 text-white'>WHAT OUR CUSTOMERS SAY ABOUT US</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-5'>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="flex items-center">
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                <img src="https://i.ibb.co/q0VrKyT/ppl1.jpg" alt='pp'/>
                            </div>
                        </div>
                        <div>
                            <p className="text-2xl">Rating: 4⭐⭐⭐⭐</p>
                            <h4 className="text-1xl">Kuku sharma</h4>
                        </div>
                    </div>
                    <p>Very good products</p>
                </div>
            </div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="flex items-center">
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                <img src="https://i.ibb.co/5hcwKY1/ppl2.jpg" alt='pp'/>
                            </div>
                        </div>
                        <div>
                            <p className="text-2xl">Rating: 4 ⭐⭐⭐⭐</p>
                            <h4 className="text-1xl">Finto Rahaso</h4>
                        </div>
                    </div>
                    <p>Excellent</p>
                </div>
            </div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="flex items-center">
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                <img src="https://i.ibb.co/DwJ5Yn1/ppl3.jpg" alt='pp'/>
                            </div>
                        </div>
                        <div>
                            <p className="text-2xl">Rating: 3 ⭐⭐⭐</p>
                            <h4 className="text-1xl">Minka Chu</h4>
                        </div>
                    </div>
                    <p>Great Service</p>
                </div>
            </div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="flex items-center">
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                <img src="https://i.ibb.co/MhhbPHv/people1.png" alt='pp'/>
                            </div>
                        </div>
                        <div>
                            <p className="text-2xl">Rating: 3 ⭐⭐⭐</p>
                            <h4 className="text-1xl">Barud Mabuoq</h4>
                        </div>
                    </div>
                    <p>Loved their products</p>
                </div>
            </div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="flex items-center">
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                <img src="https://i.ibb.co/DWwQSFH/people2.png" alt='pp'/>
                            </div>
                        </div>
                        <div>
                            <p className="text-2xl">Rating: 3 ⭐⭐⭐⭐</p>
                            <h4 className="text-1xl">Alicia Christi</h4>
                        </div>
                    </div>
                    <p>Highly Recommended</p>
                </div>
            </div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="flex items-center">
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                <img src="https://i.ibb.co/cY25mXk/people3.png" alt='pp'/>
                            </div>
                        </div>
                        <div>
                            <p className="text-2xl">Rating: 3 ⭐⭐⭐</p>
                            <h4 className="text-1xl">Lucy Harris</h4>
                        </div>
                    </div>
                    <p>Awesome</p>
                </div>
            </div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="flex items-center">
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                <img src="https://i.ibb.co/f4xXNdZ/young-adult-man-blue-shirt-smiling.jpg" alt='pp'/>
                            </div>
                        </div>
                        <div>
                            <p className="text-2xl">Rating: 4 ⭐⭐⭐⭐</p>
                            <h4 className="text-1xl">Martin Shi</h4>
                        </div>
                    </div>
                    <p>Best purchase ever</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Reviews;