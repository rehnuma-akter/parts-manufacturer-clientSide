import React from 'react';
import { Link } from "react-router-dom";


const Summary = () => {
    return (
        <div className='bg-secondary mt-20 h-screen text-white'>
            <h2 className='text-4xl text-center pt-10 text-white'>You are in the right company</h2>
            <p className='text-sm mt-7'>We have served over millions of customers and provided satisfaction with our service.</p>
            <div class="stats shadow w-full mt-20 bg-primary text-secondary">
                <div class="stat">
                    <div class="stat-figure">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div class="stat-title">Sales</div>
                    <div class="stat-value">31M</div>
                    <div class="stat-desc">Jan 1st - Aug 1st</div>
                </div>
                
                <div class="stat">
                    <div class="stat-figure">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </div>
                    <div class="stat-title">Shipped Orders</div>
                    <div class="stat-value">4,200</div>
                    <div class="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div class="stat">
                    <div class="stat-figure">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                    </div>
                    <div class="stat-title">Pending Orders</div>
                    <div class="stat-value">1,200</div>
                    <div class="stat-desc">↘︎ 90 (14%)</div>
                </div>
            </div>
            <div class="mx-auto my-8">
                <div class="card-body">
                    <h2 class="card-title text-center justify-center">Do you have any questions or want to learn more?</h2>
                    <p>Do not hesitate to ask us</p>
                    <div class="card-actions justify-center">
                        <Link to='/contact' class="btn btn-primary bg-gradient-to-r from-neutral to-accent text-white border-none normal-case rounded-3xl px-12 mt-5">
                            Contact Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;