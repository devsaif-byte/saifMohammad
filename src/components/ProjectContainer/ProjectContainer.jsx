import uniqid from 'uniqid'
import { motion } from 'framer-motion'
import { AiFillGithub } from 'react-icons/ai'
import { MdLaunch } from 'react-icons/md'
import './ProjectContainer.css'
import { Typewriter } from 'react-simple-typewriter'

function ProjectContainer({ project }) {
  return (
    <motion.div
      initial={{}}
      transition={{ duration: 2 }}
      className='project ne'
    >
      <h3>{project.name}</h3>
      <img className='project__image' alt='project' src={project.image} />

      <p className='project__description'>
        <Typewriter
          words={[project.description.toString()]}
          startDelay={1000}
          loop={false}
          cursor
          cursorStyle='_'
          cursorBlinking
          typeSpeed={30}
          delaySpeed={8000}
          deleteSpeed={10}
        />
      </p>
      {project.stack && (
        <ul className='project__stack'>
          {project.stack.map((item) => (
            <li key={uniqid()} className='project__stack-item'>
              {item}
            </li>
          ))}
        </ul>
      )}

      {project.sourceCode.frontEnd && (
        <a
          href={project.sourceCode.frontEnd}
          aria-label='source code'
          className='link link--icon'
        >
          <AiFillGithub />
        </a>
      )}
      {project.sourceCode.backEnd && (
        <a
          href={project.sourceCode.backEnd}
          aria-label='source code'
          className='link link--icon'
        >
          <AiFillGithub />
        </a>
      )}

      {project.livePreview && (
        <a
          href={project.livePreview}
          aria-label='live preview'
          className='link link--icon'
        >
          <MdLaunch />
        </a>
      )}
    </motion.div>
  )
}

export default ProjectContainer
