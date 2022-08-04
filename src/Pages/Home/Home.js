import React from 'react';
import Products from '../Home/Products';
import ExtraOne from './ExtraOne';
import ExtraTwo from './ExtraTwo';
import Reviews from './Reviews';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            {/* banner section */}
            <div
                class="hero min-h-screen"
                style={{
                    backgroundImage: `url("https://i.ibb.co/prV58Yg/photo-1562408590-e32931084e23-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-MXxh.jpg")`,
                }}
                >
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold text-white">Hello there</h1>
                    <p class="mb-5 text-white text-sm">
                        As the world's leading tech innovator, we push the boundaries of
                        what's possible to enable next-gen experiences and drive digital
                        transformation to help create a smarter, connected future for
                        all. Our road map of breakthrough technologies expands our
                        innovations and solutions to support virtually every connected
                        device. With our leadership in high-performance computer parts,
                        we are powering the connected intelligent edge.
                    </p>
                    <button class="btn btn-primary bg-gradient-to-r from-neutral to-accent text-white border-none normal-case rounded-3xl px-12 mt-5">
                        Learn More
                    </button>
                    </div>
                </div>
            </div>
            {/* products section */}
            <Products></Products>
            {/* business summary section */}
            <Summary></Summary>
            {/* extra section one */}
            <ExtraOne></ExtraOne>
            {/* customer reviews section */}
            <Reviews></Reviews>
            {/* extra section two */}
            <ExtraTwo></ExtraTwo>
            
        </div>
    );
};

export default Home;