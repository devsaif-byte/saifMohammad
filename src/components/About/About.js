import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import Typewriter from 'typewriter-effect'
import { about } from '../../portfolio'
import './About.css'

function About() {
  const { name, role, description, resume, social } = about

  return (
    <div className='about'>
      {name && (
        <h1>
          Hi👋, I am
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
                'They call me a virtuoso',
                'I Work well both individually and as part of a group',
                'Diligent worker',
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
    </div>
  )
}

export default About
