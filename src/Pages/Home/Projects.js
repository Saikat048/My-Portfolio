import React, { useEffect, useState } from 'react';
import Project from './Project';

const Projects = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        fetch('fake-data.json')
            .then(res => res.json())
            .then(data => setImages(data))
    }, [])


    return (
        <div id='projects' className='px-20 bg-gradient-to-b from-indigo-100 via-orange-100 to-purple-100'>
            <h3 className='text-center text-3xl font-bold text-primary'>My Projects</h3>
            <hr style={{ border: '3px solid red' }} className='mt-2 w-36 mx-auto rounded-lg' />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-16 pb-24'>
                
                    {
                        images.map(image => <Project key={image.id} image={image}></Project>)
                    }
              
            </div>
        </div>
    );
};

export default Projects;