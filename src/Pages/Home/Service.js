import React from 'react';

const Service = ({ title, detail, bgClass }) => {
    // const {name, icon, detail} = data;
    return (
        <div class={`card w-lg bg-base-100 shadow-xl ${bgClass}`}> 
            <div class="card-body items-center text-center">
                <h2 class="text-2xl font-bold">{title}</h2>
                <p>{detail}</p> 
            </div>
            {/* <figure class="px-10 pt-10">
                <img src={icon} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="">{name}</h2>
                <p>{detail}</p> 
            </div> */}
        </div>
    );
};

export default Service;