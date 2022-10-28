import React from 'react';
import './Home.css'
import Carousel from 'react-bootstrap/Carousel';

import bg from '../../assets/bg.jpg';
import bg1 from '../../assets/bg4.jpg';
import bg2 from '../../assets/bg3.jpg'
import Figure from 'react-bootstrap/Figure';

const Home = () => {
    return (
      <section className='bg-secondary pt-5 ' >
            <Figure>
            <Figure.Caption className='fs-4 mb-3 text-center text-white w-75 m-auto'>
Welcom to our Skill developing world.We are help you to improve your skill.So if you want to develop your skill,knowledge then you can admit here.      </Figure.Caption>
      <Figure.Image
    
     className="rounded mx-auto img-fluid ps-5"
      
      
        alt="400x180"
        src={bg1}
      >
        
      </Figure.Image>

    </Figure>


      </section>
    );
};

export default Home;