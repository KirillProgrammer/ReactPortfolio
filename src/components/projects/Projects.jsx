import React from 'react';
import './Projects.scss';
import ProjectCard from '../projectCard/ProjectCard';


function Projects() {
  return (
    <div className='projects-wrapper'>
      <ProjectCard src='/Projects/Screeno/screeno.jpg' title="Screeno" link="/Projects/Screeno/screeno.html" />
      <ProjectCard src='/Projects/FreeLance/freelance.png' title="Freelance Site" link="/Projects/FreeLance/index.html" />
    </div>
  );
}

export default Projects;