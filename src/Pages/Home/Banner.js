import React from 'react';
import Saikat from '../../images/Saikat.jpg' 
import Roll from 'react-reveal/Roll';
import ReactTyped from 'react-typed';
import Wobble from 'react-reveal/Wobble'; 

const Banner = () => {
    return (
        <div id='banner' class="hero min-h-screen px-20 bg-gradient-to-b from-purple-100 via-indigo-100 to-orange-100">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <Roll right>
                    <img className="w-full" src={Saikat} />
                </Roll>

                <div>
                    <h3 className='text-3xl'>Hello, My Name is</h3>
                    <Wobble left>
                        <h1 className='text-5xl font-bold mt-2'>Md <span className='text-primary'>Saikat</span> Hossain</h1>
                    </Wobble>

                    <p class="py-6 text-xl"><span className='font-bold'>I'm a</span> <span className='text-3xl text-black font-bold'> 
                        <div>
                        <ReactTyped
                            loop
                            typeSpeed={150}
                            backSpeed={80}
                            strings={["Front-End Developer.", "React Developer.", "Professional Coder."]}
                        smartBackspace
                        shuffle={false}
                        backDelay={1}
                        fadeOut={false}
                        fadeOutDelay={100}
                        loopCount={0}
                        showCursor
                        cursorChar="|"
                    />
                        </div>
                    </span> I count myself as a hardworking person. I love to use my creativity and make something new.</p>

                    <a target="_blank" href="https://drive.google.com/file/d/1PKMcJbbtvKf643FIK7ZMxXTmcpaftYTh/view" class="btn btn-primary">My Resume</a>
                </div>
            </div>
        </div >
    );
};

export default Banner;