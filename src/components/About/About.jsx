import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileAlt,
} from 'react-icons/fa'
import { motion } from 'framer-motion'
import { PowerGlitch } from 'powerglitch'
import { Typewriter } from 'react-simple-typewriter'
import uniqid from 'uniqid'
import { about } from '../../portfolio'
import './About.css'

PowerGlitch.glitch('.about__name', {
  playMode: 'always',
  pulse: true,
})
function About() {
  const { name, role, description, resume, social } = about
  const socialLinks = [
    {
      icon: FaFacebook,
      href: social.Facebook,
      target: '_blank',
      rel: 'noreferrer',
    },
    {
      icon: FaEnvelope,
      href: social.email,
      target: '_blank',
      rel: 'noreferrer',
    },
    {
      icon: FaLinkedin,
      href: social.linkedin,
      target: '_blank',
      rel: 'noreferrer',
    },
    {
      icon: FaFileAlt,
      href: resume, // will open to "/resume"
      target: '_blank',
      rel: 'noreferrer',
    },
    {
      icon: FaGithub,
      href: social.github,
      target: '_blank',
      rel: 'noreferrer',
    },
  ]
  return (
    <motion.div
      animate={{ y: -30 }}
      transition={{ duration: 1.3 }}
      className='about'
    >
      {name && (
        <h1>
          <span className='about__name center'> {name}</span>
        </h1>
      )}

      {role && (
        <h2 className='about__role'>
          <Typewriter
            words={[
              'Frontend Developer ',
              'Elegant Designer ',
              'Efficient Collaborator ',
              'Adaptable Team Player ',
            ]}
            startDelay={300}
            loop
            cursor
            cursorStyle='_'
            cursorBlinking
            typeSpeed={50}
            deleteSpeed={30}
          />
        </h2>
      )}

      <p className='about__desc'>
        {description && (
          <Typewriter
            words={[description.toString()]}
            startDelay={1500}
            loop={false}
            cursor
            cursorStyle='_'
            cursorBlinking
            typeSpeed={30}
            deleteSpeed={9999999}
          />
        )}
        {/* {description && description} */}
      </p>

      {/* <button type='button' className='glowing-btn'>
        <span className='glowing-txt'>
          C<span className='faulty-letter'>L</span>ICK
        </span>
      </button> */}

      <div className='linkbar'>
        <ul>
          {socialLinks.map((link) => (
            <li key={uniqid()}>
              {/* <Fade delay={index * 200} triggerOnce={true}> */}
              <a
                href={link.href}
                target={link.target}
                rel={link.rel}
                className='social-icon'
              >
                <link.icon />
              </a>
              {/* </Fade> */}
            </li>
          ))}
        </ul>
      </div>

      {/* <div className='about__contact center'>
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
      </div> */}
    </motion.div>
  )
}

export default About
