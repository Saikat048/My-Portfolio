// import React from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import Rotate from 'react-reveal/Rotate';
// import { useNavigate } from 'react-router-dom';

// const Project = ({ image }) => {
//     const {id, name, img, link } = image;
    // const navigate = useNavigate();

    // const handleDetail = id => {
    //      navigate(`/projectdetail/${id}`)
    // }

//     return (
//         <div class="card card-compact w-lg bg-base-100 px-6 pb-4 shadow-xl">
//             <Rotate top right>
//                 <figure><Carousel showArrows={true} >
//                     <div>
//                         <img src={img} />
//                         <p className="legend">Legend 1</p>
//                     </div>
//                     <div>
//                         <img src={img[1]} />
//                         <p className="legend">Legend 1</p>
//                     </div>
//                     <div>
//                         <img src={img[2]} />
//                         <p className="legend">Legend 1</p>
//                     </div>
//                     <div>
//                         <img src={img[3]} />
//                         <p className="legend">Legend 1</p>
//                     </div>
//                 </Carousel></figure>
//                 <div class="card-body">
//                     <h2 class="text-2xl font-bold mb-8">{name}</h2>
//                     <div class="card-actions justify-end">  
//                         <a target="_blank" href="https://my-assignment-10-27082.web.app/signup" class="btn btn-accent">Demo</a>
//                         <a href='' class="btn btn-secondary">Code</a>
//                         <button onClick={()=> handleDetail(id)} class="btn btn-primary">Detail</button>
//                     </div>
//                 </div>
//             </Rotate>
//         </div>
//     );
// };

// export default Project;