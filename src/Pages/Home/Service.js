import React from 'react';

const Service = ({ data }) => {
    const {name, icon, detail} = data;
    return (
        <div class="card w-lg bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={icon} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="">{name}</h2>
                <p>{detail}</p> 
            </div>
        </div>
    );
};

export default Service;