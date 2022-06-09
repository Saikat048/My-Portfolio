import React from 'react';
import {FaPaintBrush} from 'react-icons/fa';
import {BsCodeSlash} from 'react-icons/bs';
import {AiFillBug} from 'react-icons/ai';
import {FaFillDrip} from 'react-icons/fa';
import Service from './Service';

const Services = () => {
    const datas = [
        {
            id: 1,
            name: "Web Design",
            icon: {FaPaintBrush},
            detail: "A beautiful responsive website you can design through me in a very short time. My previous experience in this regard is also good"
        },
        {
            id: 2,
            name: "Web Development",
            icon: <BsCodeSlash></BsCodeSlash>,
            detail: "I can develop Web application very nicely using React.js, you can create it through me if you want in a very short time."
        },
        {
            id: 3,
            name: "Website Bug Fixing",
            icon: <AiFillBug></AiFillBug>,
            detail: "A beautiful responsive website you can design through me in a very short time. My previous experience in this regard is also good"
        },
        {
            id: 4,
            name: "Website Bug Fixing",
            icon: <FaFillDrip></FaFillDrip>,
            detail: "A beautiful responsive website you can design through me in a very short time. My previous experience in this regard is also good"
        }
    ]
    return (
        <div id='services' className='px-20'>
            <h3 className='text-center text-3xl font-bold text-primary'>My Services</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'> 
                {/* <Service title="Web Design" detail="A beautiful responsive website you can design through me in a very short time. My previous experience in this regard is also good" icon={FaPaintBrush}></Service>
                <Service title="Web Development" detail="I can develop Web application very nicely using React.js, you can create it through me if you want in a very short time." icon={BsCodeSlash}></Service>
                <Service title="Website Bug Fixing" detail="If your website under too bugs and doesn't work properly, you can fix it through me if you want in a very short time." icon={AiFillBug}></Service>
                <Service title="Website Re-Design" detail="If your existing design isn't userfriendly or look like not so good so i can do it marvelous design in a very short time." icon={FaFillDrip}></Service> */}
                {
                    datas.map(data => <Service key={data.id} data={data}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;