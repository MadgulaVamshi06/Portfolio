import React from 'react'
import { FaGithub } from "react-icons/fa";
import {  FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Madgula Vamshi</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        A passionate MERN Full Stack Web Developer with a robust technical skill set
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 9491485536</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">vamshimadgula@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
        <a
            href="https://www.linkedin.com/in/vamshi-madgula-395b82280"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          <a
            href="https://github.com/MadgulaVamshi06"
            target="_blank"
            rel="noopener noreferrer"
          >
              <span className="bannerIcon">
            <FaGithub />
          </span>
          </a>
          <a
            href="https://x.com/VamshiMadgula"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
            <FaTwitter />
          </span>
          </a>  
        </div>
      </div>
    </div>
  );
}

export default ContactLeft