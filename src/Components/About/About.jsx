import React, { useState } from 'react';
import { Award } from 'lucide-react';
import vatsa from '../../assets/img/about/vatsa.jpg';
import Title from '../Shared/Title/Title';

const tabList = [
  { id: 1, name: 'About', value: 'about' },
  { id: 2, name: 'Experience', value: 'experience' },
  { id: 3, name: 'Education', value: 'education' },
  { id: 4, name: 'Skills', value: 'skills' }
];

const About = () => {

  const aboutData = {
    name: 'Vatsa',
    title: 'Professional Fitness Coach',
    description: (
      <>
        Hello, I’m <span className="yellow"> Vatsa</span>! I help people build <span className="red">lasting</span> fitness habits.
        <br/><br/>
        I’m dedicated to simplifying fitness and helping Working  Professionals like you achieve your fitness goals without many sacrifices. 
        With a focus on sustainable habits seamlessly integrated into your busy lifestyle, together we’ll optimize your health and well-being for the long haul.
        <br/><br/>
        <span className="emphasis red">No False Promises. No BS.</span>
      </>
    ),
    imageUrl:
      'https://images.pexels.com/photos/4498151/pexels-photo-4498151.jpeg'
  };

  return (
    <section id="about-me" className="about-section">
      <div className="container">
        <div className="header">
          <div className="project__head text-center">
          <Title
            sortTitle={"About Me"}
          />
        </div>
          <div data-aos="fade-down" data-aos-duration="1000">
            <p className="description">{aboutData.description}</p>
          </div>
          
        </div>

        <div className="content">
          <img className="about-img"src={vatsa}  data-aos="fade-up" data-aos-duration="1000"></img>
        </div>
      </div>
    </section>
  );
};

export default About;