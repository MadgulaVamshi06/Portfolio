import React from 'react';
import Title from "../layouts/Title";

const About = () => {
  return (
    <section id="about" className="w-full py-20 bg-gradient-to-r from-[#1e2024] to-[#23272b]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className='flex justify-center items-center text-center'>
        <Title des="About"  />
        </div>
        
        <p className="mt-6 text-base text-white leading-7 sm:text-lg sm:leading-8 md:text-xl md:leading-9">
        My name is Vamshi Madgula. I'm a full stack web developer based in Hyderabad, India. I am a B.Tech graduate and love exploring new technologies in the field of web development and always try to adapt to them. I believe in the concept of continuous learning by regularly upgrading my skills and enhancing my knowledge. I have learned the MERN stack, data structures, algorithms, and soft skills at Prepleaf by Masai School. Besides coding, I love playing cricket and listening to music. As a developer, my hunger for learning has drastically increased. I want to centralize my skills and learning for the enhancement of an organization and, more importantly, to enhance my career.
        </p>
      </div>
    </section>
  );
};

export default About;
