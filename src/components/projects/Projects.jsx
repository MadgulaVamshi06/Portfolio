import React from 'react';
import Title from '../layouts/Title';
import { mg, jumia, croma } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="TATA 1MG Clone"
          des="This project is a clone of the Tata 1mg website, an Indian online healthcare platform offering services like medicine delivery, diagnostic tests, and teleconsultations. It provides a seamless user experience"
          src={mg}
          githubLink="https://github.com/MadgulaVamshi06/1MG_Clone_website"
          liveDemoLink="https://1-mg-clone-website.vercel.app/"
        />
        <ProjectsCard
          title="Jumia Clone"
          des="This project is a clone of the Jumia website, replicating its extensive product range including electronics, fashion, and household items. It features user authentication, detailed product listings, and a responsive design for an optimal shopping experience."
          src={jumia}
          githubLink="https://github.com/MadgulaVamshi06/Jumia_Clone"
          liveDemoLink="https://jumia-clone-0.vercel.app/"
        />
        <ProjectsCard
          title="Croma clone"
          des="This project is a clone of the Croma website, replicating its features such as product listings, detailed product pages, and a responsive design. Built with React and TailwindCSS, it offers a smooth and modern user experience"
          src={croma}
          githubLink="https://github.com/MadgulaVamshi06/Croma-Clone"
          liveDemoLink="https://croma-clone-six.vercel.app/"
        />
      </div>
    </section>
  );
}

export default Projects;
