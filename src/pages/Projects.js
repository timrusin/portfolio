import {useState} from 'react'
import ProjectCard from '../components/ProjectCard';
import Data from '../data/ProjectData'
import './Project.css'

const Projects = () => {
  const [selection, setSelection] = useState('')

  const selected = []
  Data.map(item => {
    return item.category === selection && selected.push(item) 
    
  })

  return (
    <>
    <h1 className="projects-title">SOFTWARE PROJECTS</h1>
      <div id="proj-btn-container">
        <button className="proj-btns" onClick={()=> setSelection('website')}>Web Sites</button>
        <button className="proj-btns" onClick={()=> setSelection('game')}>Game Dev</button>
        <button className="proj-btns" onClick={()=> setSelection('application')}>Applications</button>
      </div>
    <div className="project-page-container">
      {selected.map(item => {
        return <ProjectCard key={item.title}
        {...item}
        />
      })}
    </div>
    </>
  );
}

export default Projects