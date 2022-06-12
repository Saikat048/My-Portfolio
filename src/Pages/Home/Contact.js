import React from 'react';

const Contact = () => {
    return (
        <div id='contact' className='bg-gradient-to-b from-orange-100 via-indigo-100 to-purple-100'>
            <h3 className='text-center text-3xl font-bold text-primary'>Contact Me</h3>
            <hr style={{border: '3px solid red'}} className='mt-2 w-36 mx-auto rounded-lg'/>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">Have an project in mind ? </h1>
                        <p class="py-6 text-4xl">Contact me.</p>
                        <p>Name: Md Saikat Hossain</p>
                        <p>Email: mdsaikathosan048@gmail.com</p>
                        <p>Phone: +8801871642745</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <h3>Message Me</h3>
                            <div class="form-control"> 
                                <input type="text" placeholder="Name" class="input input-bordered" />
                            </div>
                            <div class="form-control"> 
                                <input type="email" placeholder="Email" class="input input-bordered" /> 
                            </div>
                            <div class="form-control"> 
                                <input type="text" placeholder="Subject" class="input input-bordered" /> 
                            </div>
                            <div class="form-control"> 
                                <textarea type="text" placeholder="Type your Message" class="input input-bordered" /> 
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;