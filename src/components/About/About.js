import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import Typewriter from 'typewriter-effect'
import { motion } from 'framer-motion'
import { about } from '../../portfolio'
import './About.css'

function About() {
  const { name, role, description, resume, social } = about

  return (
    <motion.div
      animate={{ y: -30 }}
      transition={{ duration: 1.3 }}
      className='about'
    >
      {name && (
        <h1>
          <span className='about__name'> {name}</span>
        </h1>
      )}

      {role && (
        <h2 className='about__role'>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString()
                .callFunction(() => {
                  console.log('String typed out!')
                })
                .pauseFor(1000)
                .deleteAll()
                .callFunction(() => {
                  console.log('All strings were deleted')
                })
                .start()
                .stop()
            }}
            options={{
              strings: [
                'Frontend Developer',
                'Elegant Designer',
                'Efficient Collaborator',
                'Adaptable Team Player',
              ],
              wrapperClassName: 'about__role',
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
      )}

      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <FaGithub />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <FaLinkedin />
              </a>
            )}

            {social.Facebook && (
              <a
                href={social.Facebook}
                aria-label='facebook'
                className='link link--icon'
              >
                <FaFacebook />
              </a>
            )}
          </>
        )}
      </div>
    </motion.div>
  )
}

export default About
