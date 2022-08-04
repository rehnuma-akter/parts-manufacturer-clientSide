import React from 'react';
import { Link } from "react-router-dom";

const ExtraTwo = () => {
    return (
        <div className='pt-12 mb-12'>
            <h2 className='text-3xl text-left ml-5 my-8'>Our Latest News</h2>
            <div className='grid grid-cols-1 lg:grid-cols-5 gap-5 mx-5'>
                <div class="card lg:max-w-lg bg-primary justify-center items-center">
                <figure>
                    <img src="https://i.ibb.co/hKQjjPB/female-on-beach-on-laptop.jpg" alt="Shoes" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">Controlling your account wherever you are.</h2>
                    <p>Take your time and read our latest news 
                        to improve your account.</p>
                    <div class="card-actions">
                        <Link to='' className='text-blue-700'>Read more...</Link>
                    </div>
                </div>
                </div>
                <div class="card lg:max-w-lg bg-primary  justify-center items-center">
                    <figure><img src="https://i.ibb.co/zZ9KwtD/6-850x500.jpg" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Make your system more secure with our new collection.</h2>
                        <p className='text-sm'> Take your time and read our latest news to improve your account.</p>
                        <div class="card-actions">
                        <Link to='' className='text-blue-700'>Read more...</Link>
                        </div>
                    </div>
                </div>
                <div class="card lg:max-w-lg bg-primary justify-center items-center">
                    <figure><img src="https://i.ibb.co/T4RfdGp/4-850x500.jpg" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Best strategy from our
                            successful user.</h2>
                        <p>Take your time and read our latest news 
                            to improve your account.</p>
                        <div class="card-actions">
                        <Link to='' className='text-blue-700'>Read more...</Link>
                        </div>
                    </div>
                </div>
                <div class="card lg:max-w-lg bg-primary justify-center items-center">
                    <figure><img src="https://i.ibb.co/sb5bY20/government-tech-insider.png" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Mind Blowing new release of the latest tech</h2>
                        <p>Take your time and read our latest news 
                            to improve your account.</p>
                        <div class="card-actions">
                        <Link to='' className='text-blue-700'>Read more...</Link>
                        </div>
                    </div>
                </div>
                <div class="card lg:max-w-lg bg-primary  justify-center items-center">
                    <figure><img src="https://i.ibb.co/dgKBwMW/5-850x500.jpg" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Fire up your whole set up game to next level</h2>
                        <p>Take your time and read our latest news 
                            to improve your account.</p>
                        <div class="card-actions">
                        <Link to='' className='text-blue-700'>Read more...</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraTwo;