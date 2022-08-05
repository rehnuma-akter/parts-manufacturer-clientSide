import React from 'react';

const MyPortfolio = () => {
    return (
        <div className="bg-primary pb-8">
            <h2 className='text-center text-3xl pt-7'>A Short Portfolio </h2>
            <div className="p-5 flex my-10 flex-col justify-center items-center">
                <div className="w-2/4 text-center">
                    <p className="text-2xl"> Hello, there! this is 
                    <span className='text-secondary text-2xl'> ✨Rehnuma Akter Ruhi</span></p>
                    <p className="text-sm mb-4">Connect with me via email, <span className='font-bold text-xl'>✨rakterruhi@gmail.com</span></p>
                    <h2 className='pb-4 text-xl'>✨I am currently completing my graduation in Computer Science.</h2>
                    <p className='text-center text-xl mb-6'>✨The Skills or Technologies that I am familiar with as a developer are -</p>
                    <p className=''>Html, CSS, Bootstrap, Tailwind, JavaScript, React, Node.js, Java, MongoDB, Firebase</p>
                    <p className='text-center text-xl my-4'>✨Some of my works</p>
                    
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                        <p> <span className='font-bold'>Developer Portfolio </span>
                            <br /><span className='text-blue-700'>https://rehnuma-akter.github.io/developer-portfolio/</span>
                            <br /> This was my very 1st assignment of this course.</p>
                        <p><span className='font-bold'>InstaX Gallery </span>
                            <br /><span className='text-blue-700'>https://chic-choux-0fb7bf.netlify.app/</span>
                            <br />
                            Here I used my own data to load the reviews and used charts</p>
                        <p><span className='font-bold'>Spice Bustle </span>
                            <br /><span className='text-blue-700'> https://book-bustle.web.app/</span>
                            <br /> This is a spice warehouse management website where I got to learn a lot about how a complete website works.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;