import uniqid from 'uniqid'
import { motion } from 'framer-motion'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

function Projects() {
  if (!projects.length) return null

  return (
    <motion.section
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.6 }}
      id='projects'
      className='section projects center'
    >
      <h2 className='section__title faulty-letter glowing-txt'>Projects</h2>

      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </motion.section>
  )
}

export default Projects
