import React from "react";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import vamshi_madgula_resume  from "../../assets/vamshi_madgula_resume.pdf";

const Media = () => {
  const handleDownload = () => {
    // Open the document in a new tab
    window.open(vamshi_madgula_resume, "_blank");

    // Create a temporary link to trigger download with filename
    const link = document.createElement("a");
    link.href = vamshi_madgula_resume ;
    link.download = "vamshi-madgula-resume.pdf"; // Specify the filename with extension
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
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
      <div>
        <h2 className="text-base text-designColor uppercase font-bold Font mb-4">
          Download Resume
        </h2>
        <div className="flex gap-4">
          <button onClick={handleDownload} className="flex items-center">
            <span className="bannerIcon mr-2">
              <IoMdDownload />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Media;
