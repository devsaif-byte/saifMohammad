import uniqid from 'uniqid'
import { AiFillGithub } from 'react-icons/ai'
import { MdLaunch } from 'react-icons/md'
import './ProjectContainer.css'

function ProjectContainer({ project }) {
  return (
    <div className='project'>
      <img className='project__image' alt='project' src={project.image} />
      <h3>{project.name}</h3>

      <p className='project__description'>{project.description}</p>
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
    </div>
  )
}

export default ProjectContainer
