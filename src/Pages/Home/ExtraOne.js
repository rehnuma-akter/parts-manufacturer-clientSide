import React from 'react';

const ExtraOne = () => {
    return (
        <div className='pb-12 mb-10'>
            <p className='text-xl mt-12 pt-8'> Working Processes</p>
            <h2 className='text-4xl font-bold mb-12 mt-5'>HOW IT WORKS</h2>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 mx-5 pt-5'>
                <div class="mockup-code">
                    <h2 className='mb-2'>Step-1</h2>
                    <pre data-prefix="1" class="bg-warning text-warning-content"><code>Sign Up For Free</code></pre>
                    <pre data-prefix="2"><code>Place Your Order</code></pre> 
                    <pre data-prefix="3"><code>Add Payment</code></pre>
                    <pre data-prefix="4"><code>Receive Your Order</code></pre> 
                </div>
                <div class="mockup-code">
                    <h2 className='mb-2'>Step-2</h2>
                    <pre data-prefix="1"><code>Sign Up For Free</code></pre>
                    <pre data-prefix="2" class="bg-warning text-warning-content"><code>Place Your Order</code></pre>
                    <pre data-prefix="3"><code>Add Payment</code></pre> 
                    <pre data-prefix="4"><code>Receive Your Order</code></pre> 
                </div>
                <div class="mockup-code">
                    <h2 className='mb-2'>Step-3</h2>
                    <pre data-prefix="1"><code>Sign Up For Free</code></pre> 
                    <pre data-prefix="2"><code>Place Your Order</code></pre> 
                    <pre data-prefix="3" class="bg-warning text-warning-content"><code>Add Payment</code></pre>
                    <pre data-prefix="4"><code>Receive Your Order</code></pre> 
                </div>
                <div class="mockup-code">
                    <h2 className='mb-2'>Step-4</h2>
                    <pre data-prefix="1"><code>Sign Up For Free</code></pre> 
                    <pre data-prefix="2"><code>Place Your Order</code></pre> 
                    <pre data-prefix="3"><code>Add Payment</code></pre> 
                    <pre data-prefix="4" class="bg-warning text-warning-content"><code>Receive Your Order</code></pre>
                </div>
            </div>
        </div>
    );
};

export default ExtraOne;