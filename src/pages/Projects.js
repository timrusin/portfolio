import React from 'react'
import ProjectCard from '../components/ProjectCard';
import Data from '../data/ProjectData'
import './Project.css'

const Projects = () => {
  return (
    <>
      <h1 className='projects-title'>software and web development projects:</h1>
    <div className="project-page-container">
      {Data.map(item => {
        return <ProjectCard 
        {...item}
        />
      })}
    </div>
    </>
  );
}

export default Projects