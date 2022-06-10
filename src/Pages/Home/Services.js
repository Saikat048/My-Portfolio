import React from 'react';
import Roll from 'react-reveal/Roll';
import Service from './Service';

const Services = () => {
    return (
        <div id='services' className='px-20 pb-24 bg-gradient-to-b from-orange-100 via-purple-200 to-indigo-100'>
            <h3 className='text-center text-3xl font-bold text-primary'>My Service</h3>
            <hr style={{ border: '3px solid red' }} className='mb-16 mt-2 w-36 mx-auto rounded-lg' />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <Roll left>
                    <Service title="Web Design" detail="A beautiful responsive website you can design through me in a very short time. My previous experience in this regard is also good" bgClass="bg-gradient-to-r from-lime-200 to-fuchsia-200"></Service>
                    <Service title="Web Development" detail="I can develop Web application very nicely using React.js, you can create it through me if you want in a very short time. Thank you." bgClass="bg-gradient-to-r from-cyan-200 to-violet-200"></Service>
                    <Service title="Website Bug Fixing" detail="If your website under too bugs and doesn't work properly, you can fix it through me if you want in a very short time." bgClass="bg-gradient-to-r from-green-200 to-red-200"></Service>
                </Roll>
                {/* {
                    datas.map(data => <Service key={data.id} data={data}></Service>)
                } */}
            </div>
        </div>
    );
};

export default Services;