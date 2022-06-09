import React from 'react';  
import Banner from './Banner';
import Contact from './Contact';
import Projects from './Projects';
import Services from './Services';

const Home = () => {
    return (
        <div> 
            <Banner></Banner>
            <Services></Services> 
            <Projects></Projects> 
            <Contact></Contact>
        </div>
    );
};

export default Home;