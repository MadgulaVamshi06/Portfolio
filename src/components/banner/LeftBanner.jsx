import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Full  Stack Web Developer.", "Front End Developer.","Professional Coder."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
       
        <h1 className="text-4xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize font-bold">Madgula Vamshi</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        An enthusiastic MERN Stack Web Developer with a strong set of technical as well as non-technical skills and a dedication towards creating useful and interactive web applications.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner