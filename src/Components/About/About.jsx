// import React, { useEffect, useState } from "react";

// import sectionStar from "../../assets/img/about/section-star.png";
// import Experience from "./Experience";
// import Education from "./Education";
// import Skills from "./Skills";
// import AboutMe from "./AboutMe";

// import AOS from "aos";
// import "aos/dist/aos.css";

// const tabList = [
//   {
//     id: 1,
//     name: "About",
//     value: "about",
//   },
//   {
//     id: 2,
//     name: "Experience",
//     value: "experience",
//   },
//   {
//     id: 3,
//     name: "Education",
//     value: "education",
//   },
//   {
//     id: 4,
//     name: "Skills",
//     value: "skills",
//   },
// ];

// const About = () => {
//   const [isTabActive, setIsTabAative] = useState("about");
  
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   const handleTabClick = (e) => {
//     setIsTabAative(e);
//   };

//   return (
//     <>
//       <section className="about__section pt-120 pb-120" id="about">
//         <div className="container">
//           <div className="personal__head text-center">
//             <img
//               src={sectionStar}
//               className="mb-30"
//               alt="star"
//               data-aos="fade-up"
//               data-aos-duration="1000"
//             />
//             <p className="descrp" data-aos="fade-up" data-aos-duration="1500">
//               I'm Vatsa, a fitness coach dedicated to helping you build sustainable habits that lead to lasting results. 
//               My approach focuses on empowering you with the knowledge and tools to continue 
//               thriving long after our coaching ends. Through personalized guidance, I aim to make fitness a 
//               seamless part of your lifestyle, ensuring you don't need to return for repeat coaching.
//             </p>
//           </div>
//           <div className="singletab">
//             <ul className="tablinks">
//               {tabList.map(({ id, name, value }) => (
//                 <li
//                   key={id}
//                   className={`nav-links ${isTabActive === value ? "active" : ""} `}
//                 >
//                   <button onClick={() => handleTabClick(value)} className="tablink">
//                     {name}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//             <div className="tabcontents">
//               <AboutMe isTabActive={isTabActive} />
//               <Experience isTabActive={isTabActive} />
//               <Education isTabActive={isTabActive} />
//               <Skills isTabActive={isTabActive} />
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* <Awards /> */}
//     </>
//   );
// };

// export default About;

import React, { useState } from 'react';
import { Award } from 'lucide-react';
import vatsa from '../../assets/img/about/vatsa.jpg';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
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
        <span className="emphasis">No false promises. No BS.</span>
      </>
    ),
    email: 'vatsa@example.com',
    location: 'San Francisco, CA',
    experience: '8+ years experience',
    achievements: [
      'Helped 500+ clients achieve their fitness goals',
      'Certified Personal Trainer (NASM-CPT)',
      'Specialization in Nutrition and Weight Management'
    ],
    imageUrl:
      'https://images.pexels.com/photos/4498151/pexels-photo-4498151.jpeg'
  };

  return (
    <section className="about-section">
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