import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaBootstrap,
  FaReact,
  FaGit,
  FaNodeJs,
} from 'react-icons/fa'
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si'
import bankistImage from './images/bankist_mock.png'

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://saif-mohammad.vercel.app/',
  title: 'Portfolio',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Saif',
  role: 'Front End Developer',
  description:
    "As a Frontend Developer, I engage in building and managing website and web application user interfaces. I'm familiar with front-end web development technologies like HTML, CSS, JavaScript, and React, as well as version control systems and web development tools. I rely on my problem-solving, communication skills, attention to detail, and passion for learning.",
  resume: 'https://1drv.ms/w/s!AqmKfDMkDkich0fFQt7dokn3zhpd?e=xkxp4O',
  social: {
    Facebook: 'https://www.facebook.com/saifmohammad2020/',
    linkedin: 'https://www.linkedin.com/in/md-saif-bd/',
    github: 'https://github.com/devsaif-byte',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Bankist Transaction',
    description:
      'A basic transaction app that shows up current account balance after logged in. User can transfer money, request loan and delete account. All actions are a demonstration purpose.',
    image: bankistImage,
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/devsaif-byte/bankist-arr',
    livePreview: 'https://my-repo-gzgbdzura-devsaif-byte.vercel.app/',
  },
  {
    name: 'DOM Bankist',
    description:
      'A clean minimalist banking website with beautiful transition effects.',
    stack: ['HTML', 'CSS', 'Vanilla Js'],
    sourceCode: 'https://github.com/devsaif-byte/dom-bankist',
    livePreview: 'https://dom-bankist.vercel.app/',
  },
  {
    name: 'Age Calculator',
    description:
      'A simple age calculator using pico.css, challenge by Frontend Mentor.',
    stack: ['HTML', 'PicoCSS', 'CSS', 'Javascript', 'DOM'],
    sourceCode: 'https://github.com/devsaif-byte/age-calculator',
    livePreview: 'https://age-calculator3.netlify.app/',
  },
  {
    name: 'Mapty',
    description:
      'A Workout listing location app using vanilla js.',
    stack: ['HTML', 'SCSS', 'Javascript', 'DOM'],
    sourceCode: 'https://github.com/devsaif-byte/mapty-extended',
    livePreview: 'https://mapty-extended.vercel.app/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  <FaHtml5 color='darkorange' />,
  <FaCss3 color='#3db7ff' />,
  <FaBootstrap color='#7f0fff' />,
  <SiTailwindcss color='#16BBB7' />,
  <FaJs color='orange' />,
  <FaReact color='#00D5FD' />,
  <FaGit color='#EE5132' />,
  <FaNodeJs color='#529A4A' />,
  <SiExpress color='grey' />,
  <SiMongodb color='#58A846' />,
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'codeorigin3@gmail.com',
}

export { header, about, projects, skills, contact }
