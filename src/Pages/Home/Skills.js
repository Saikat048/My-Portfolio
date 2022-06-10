import React from 'react';
import skills from '../../images/skills.jpg'

const Skills = () => {
    return (
        <div id='skills' className='bg-gradient-to-b from-purple-100 via-indigo-100 to-orange-100 pb-20'>
            <h3 className='text-center text-3xl font-bold text-primary'>My Skills</h3>
            <hr style={{ border: '3px solid red' }} className='mb-16 mt-2 w-36 mx-auto rounded-lg' />
            <div className='flex justify-center'>
                <div class="card w-lg bg-base-100 shadow-xl image-full">
                    <figure><img src={skills} alt="Shoes" /></figure>
                    <div class="card-body">
                    <p className='text-wight font-bold'>HTML <progress class="progress progress-secondary w-100" value="95" max="100"></progress></p>
                    <p className='text-wight font-bold'>CSS <progress class="progress progress-secondary w-100" value="90" max="100"></progress></p>
                    <p className='text-wight font-bold'>Bootstrap <progress class="progress progress-secondary w-100" value="85" max="100"></progress></p>
                    <p className='text-wight font-bold'>Tailwind <progress class="progress progress-secondary w-100" value="85" max="100"></progress></p>
                    <p className='text-wight font-bold'>JavaScript <progress class="progress progress-secondary w-100" value="80" max="100"></progress></p>
                    <p className='text-wight font-bold'>React <progress class="progress progress-secondary w-100" value="80" max="100"></progress></p>
                    <p className='text-wight font-bold'>Node.js <progress class="progress progress-secondary w-100" value="70" max="100"></progress></p>
                    <p className='text-wight font-bold'>Express.js <progress class="progress progress-secondary w-100" value="75" max="100"></progress></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;