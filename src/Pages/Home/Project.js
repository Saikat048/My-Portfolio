import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Rotate from 'react-reveal/Rotate';

const Project = ({ image }) => {
    const { name, img } = image;

    return (
        <div class="card card-compact w-lg bg-base-100 shadow-xl">
            <Rotate top right>
                <figure><Carousel showArrows={true} >
                    <div>
                        <img src={img} />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src={img[1]} />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src={img[2]} />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src={img[3]} />
                        <p className="legend">Legend 1</p>
                    </div>
                </Carousel></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Detail</button>
                    </div>
                </div>
            </Rotate>
        </div>
    );
};

export default Project;