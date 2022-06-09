import React from 'react';
import TypeAnimation from 'react-type-animation';

const Navbar = () => {
    const manu = <>
        <li><a href='#banner'>Home</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#projects'>Skills</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#contact'>Contact</a></li>
    </>
    return (
        <div class="navbar bg-base-100 top-0 sticky px-20 z-10">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {manu}
                    </ul>
                </div>
                <div className='text-4xl font-bold text-primary'>
                    <TypeAnimation
                        cursor={false}
                        sequence={['SAIKAT HOSSAIN', 2000, '']} 
                        repeat={Infinity}
                    />
                </div>
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {manu}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;