import React from 'react';
import './Projects.scss';
import ProjectCard from '../projectCard/ProjectCard';


function Projects() {
  return (
    <div className='projects-wrapper'>
      <ProjectCard src='/Projects/Screeno/screeno.jpg' title="Screeno" link="/Projects/Screeno/screeno.html" />
      <ProjectCard src='https://images.unsplash.com/photo-1649000942866-e89fd06ab3d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' title="Foody" link="#" />
      <ProjectCard src='https://images.unsplash.com/photo-1649000942866-e89fd06ab3d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' title="Foody" link="#" />
      <ProjectCard src='https://images.unsplash.com/photo-1649000942866-e89fd06ab3d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' title="Foody" link="#" />
    </div>
  );
}

export default Projects;