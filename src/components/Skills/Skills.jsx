import uniqid from 'uniqid'
import { PowerGlitch } from 'powerglitch'
import { skills } from '../../portfolio'
import './Skills.css'

function Skills() {
  if (!skills.length) return null
  PowerGlitch.glitch('.skills__list', {
    playMode: 'hover',
    pulse: true,
    shake: true,
  })
  return (
    <section className='section skills center' id='skills'>
      <h2 className='section__title faulty-letter glowing-txt'>Skills</h2>
      <h3>Technologies I've worked with</h3>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
