import React from 'react';

const Contact = () => {
    return (
        <div class="hero min-h-screen bg-primary">
            <div class="hero-content flex-col lg:flex-row-reverse mx-5">
                <div class="text-center lg:text-left ml-5">
                <h1 class="text-4xl font-bold">Contact Us</h1>
                <p class="py-6">Do not hesitate to send us any questions, feedbacks or suggestions. We are
                here to improve as much as possible and provide world class service.</p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <div class="form-control">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="email" class="input input-bordered" />
                    </div>
                    <label class="label">
                        <span class="label-text">Any Message</span>
                    </label>
                    <textarea class="textarea textarea-bordered" placeholder="message"></textarea>
                    <div class="form-control mt-6">
                    <button class="btn btn-primary bg-gradient-to-r from-neutral to-accent text-white border-none normal-case rounded-3xl">Submit</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;