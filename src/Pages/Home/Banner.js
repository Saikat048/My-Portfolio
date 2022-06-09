import React from 'react';
import Saikat from "../../images/Saikat.jpg";
import Bounce from 'react-reveal/Bounce';

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-200 px-20">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img className="w-full" src={Saikat} />
                <div>
                    <h3 className='text-3xl'>Hello, My Name is</h3> 
                    <Bounce left>
                        <h1 className='text-5xl font-bold mt-2'>Md <span className='text-primary'>Saikat</span> Hossain</h1> 
                    </Bounce> 

                <p class="py-6 text-xl">I am a front-end web developer. I count myself as a hardworking person. I love to use my creativity and make something new.</p>
                <a target="_blank" href="https://drive.google.com/file/d/1PKMcJbbtvKf643FIK7ZMxXTmcpaftYTh/view" class="btn btn-primary">My Resume</a> 
            </div>
        </div>
        </div >
    );
};

export default Banner;