import React from 'react';
import './ProjectCard.scss'

function ProjectCard(props) {
  return (
    <a href={props.link}>
      <div className="project-card">
        <img src={props.src} alt={props.alt} className="project-card__promo" />
        <h3 className="project-card__title">{props.title}</h3>
      </div>
    </a>
  )
}

export default ProjectCard