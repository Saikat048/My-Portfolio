// import React, { useEffect, useState } from 'react';
// import Project from './Project';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Rotate from 'react-reveal/Rotate';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"; 

const Projects = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        fetch('fake-data.json')
            .then(res => res.json())
            .then(data => setImages(data))
    }, [])
    const navigate = useNavigate();

    const handleDetail = id => {
         navigate(`/projects/${id}`);
    }


    return (
        <div id='projects' className='px-20 bg-gradient-to-b from-indigo-100 via-orange-100 to-purple-100'>
            <h3 className='text-center text-3xl font-bold text-primary'>My Projects</h3>
            <hr style={{ border: '3px solid red' }} className='mt-2 w-36 mx-auto rounded-lg' />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-16 pb-24'>

                <div class="card card-compact w-lg bg-base-100 px-6 pb-4 shadow-xl">
                    <Rotate top right>
                        <figure><Carousel>
                            <div>
                                <img src="https://i.ibb.co/LN2FHxF/img1.png" />
                                <p className="legend">Legend 1</p>
                            </div>
                            <div>
                                <img src="https://i.ibb.co/84sjt07/img2.png" />
                                <p className="legend">Legend 2</p>
                            </div>
                            <div>
                                <img src="https://i.ibb.co/52F3hBN/img3.png" />
                                <p className="legend">Legend 3</p>
                            </div>
                            <div>
                                <img src="https://i.ibb.co/HTP9txQ/img4.png" />
                                <p className="legend">Legend 4</p>
                            </div>
                        </Carousel></figure>
                        <div class="card-body">
                            <h2 class="text-2xl font-bold mb-8"></h2>
                            <div class="card-actions justify-end">
                                <a target="_blank" href="https://my-assignment-12-a79f4.web.app/" class="btn btn-accent">Demo</a>
                                <a target="_blank" href='https://github.com/Saikat048/C-A-Hardware-Tools-Client' class="btn btn-secondary">Code</a>
                                
                                <button onClick={()=> handleDetail(images.id)} class="btn btn-primary">Detail</button>
                            </div>
                        </div>
                    </Rotate>
                </div>
                <div class="card card-compact w-lg bg-base-100 px-6 pb-4 shadow-xl">
                    <Rotate top right>
                        <figure><Carousel showArrows={true}>
                            <div>
                                <img src="https://i.ibb.co/cD7v1v2/img1.png" />
                                <p className="legend">Legend 1</p>
                            </div>
                            <div>
                                <img src="https://i.ibb.co/D8wVCf3/img2.png" />
                                <p className="legend">Legend 2</p>
                            </div>
                            <div>
                                <img src="https://i.ibb.co/YQC2C15/img3.png" />
                                <p className="legend">Legend 3</p>
                            </div>
                            <div>
                                <img src="https://i.ibb.co/q5fgJW0/img4.png" />
                                <p className="legend">Legend 4</p>
                            </div>
                        </Carousel></figure>
                        <div class="card-body">
                            <h2 class="text-2xl font-bold mb-8"></h2>
                            <div class="card-actions justify-end">
                                <a target="_blank" href="https://assignment-11-894b0.web.app/" class="btn btn-accent">Demo</a>
                                <a target="_blank" href='https://github.com/Saikat048/Stanford-Bike' class="btn btn-secondary">Code</a>
                                <button class="btn btn-primary">Detail</button>
                            </div>
                        </div>
                    </Rotate>
                </div>
                <div class="card card-compact w-lg bg-base-100 px-6 pb-4 shadow-xl">
                    <Rotate top right>
                        <figure><Carousel showArrows={true}>
                            <div>
                                <img src="https://i.ibb.co/VvbvB2w/img1.png" />
                                <p className="legend">Legend 1</p>
                            </div>
                            <div>
                                <img src="https://i.ibb.co/4JdMfj4/img5.png" />
                                <p className="legend">Legend 2</p>
                            </div>
                            <div>
                                <img src="https://i.ibb.co/Z1gTXpj/img3.png" />
                                <p className="legend">Legend 3</p>
                            </div>
                            <div>
                                <img src="https://i.ibb.co/fHk1jTD/img4.png" />
                                <p className="legend">Legend 4</p>
                            </div>
                        </Carousel></figure>
                        <div class="card-body">
                            <h2 class="text-2xl font-bold mb-8"></h2>
                            <div class="card-actions justify-end">
                                <a target="_blank" href="https://my-assignment-10-27082.web.app/signup" class="btn btn-accent">Demo</a>
                                <a target="_blank"  href='https://github.com/Saikat048/Alaska-Private-Touring' class="btn btn-secondary">Code</a>
                                <button class="btn btn-primary">Detail</button>
                            </div>
                        </div>
                    </Rotate>
                </div>
            </div>
        </div>
    );
};

export default Projects;