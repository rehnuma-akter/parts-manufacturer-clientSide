import React from 'react';

const Reviews = () => {
    return (
        <div className='h-screen bg-primary'>
            <h2 className='pt-12'>Customer Reviews</h2>
            <h3 className='text-3xl mt-2'>WHAT OUR CUSTOMERS SAY ABOUT US</h3>
            <div className='grid gird-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-14 mx-5'>
                <div className='border p-4 bg-neutral text-white'>
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://i.ibb.co/q0VrKyT/ppl1.jpg" alt='pp'/>
                        </div>
                    </div>
                    <h2 className='text-2xl'>Alicia kremble</h2>
                    <h3>California</h3>
                    <p className='text-sm'>
                        "as a new user I am very happy with what this application provides, after using it for a long time I can't let go and continue to use this application."
                    </p>
                </div>
                <div className='border p-4 bg-neutral text-white'>
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://i.ibb.co/5hcwKY1/ppl2.jpg" alt='pp'/>
                        </div>
                    </div>
                    <h2 className='text-2xl'>Finto Rahaso</h2>
                    <h3>Berlin</h3>
                    <p className='text-sm'>
                        "as a new user I am very happy with what this application provides, after using it for a long time I can't let go and continue to use this application."
                    </p>
                </div>
                <div className='border p-4 bg-neutral text-white'>
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://i.ibb.co/DwJ5Yn1/ppl3.jpg" alt='pp'/>
                        </div>
                    </div>
                    <h2 className='text-2xl'>Mark Shim Lee</h2>
                    <h3>Beijing</h3>
                    <p className='text-sm'>
                        "as a new user I am very happy with what this application provides, after using it for a long time I can't let go and continue to use this application."
                    </p>
                </div>
            </div>
            
        </div>
    );
};

export default Reviews;