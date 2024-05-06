import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si'
import ageCalc from './images/age_calc.png'
import tarbiyah from './images/tarbiyah.png'
import vivaHaus from './images/vivaHaus.png'
import minimalCart from './images/minimal-cart.png'
import nebula from './images/nebula.png'
import jobApp from './images/jobApp.png'

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://portfolio-saif3.vercel.app/',
  title: '$D3v_P0r7',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Hello, Saif here.',
  role: 'Front End Developer',
  description: `I use things like HTML, CSS, JavaScript, and React. I'm currently attending Islamic Arabic University, Majoring in Social Arts and minor in Islamic Studies. I have a profound interest in building staff with coding, full-stack development and cyber security. 🚀 `,
  resume: 'https://1drv.ms/w/s!AqmKfDMkDkickXpVIFucLtgW6gyj?e=wntN08',
  social: {
    Facebook: 'https://www.facebook.com/saifmohammad2015',
    linkedin: 'https://www.linkedin.com/in/md-saif-bd',
    github: 'https://github.com/devsaif-byte',
    email: 'codeorigin3@gmail.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up

  {
    name: 'Multi User Job Seeking Application',
    description:
      'Connect employers and job seekers with user-friendly Job Post Application.',
    image: jobApp,
    stack: [
      'React',
      'React-router',
      'Next UI',
      'Tailwind',
      'MongoDb',
      'Cloudinary',
    ],
    sourceCode: {
      frontEnd:
        'https://github.com/devsaif-byte/job-seeking-MERN-application-frontend',
    },
    livePreview: 'https://job-seeking-mern-application-frontend.vercel.app/',
  },
  {
    name: 'Nebula Bank',
    description: 'Cosmic bank using react',
    image: nebula,
    stack: [
      'React',
      'React-router',
      'Aceternity UI',
      'Next UI',
      'Tailwind',
      'Appwrite auth/database',
    ],
    sourceCode: {
      frontEnd: 'https://github.com/devsaif-byte/bank-nebula-app',
    },
    livePreview: 'https://bank-nebula-app.vercel.app/',
  },
  {
    name: 'Functional Shipping Cart',
    description:
      'Calculating products subtotal, tax, discount using redux toolkit',
    image: minimalCart,
    stack: ['React', 'Redux-toolkit', 'Geist UI', 'Tailwind', 'Fakestore API'],
    sourceCode: {
      frontEnd: 'https://github.com/devsaif-byte/shipping-cart-task',
    },
    livePreview: 'https://shipping-cart-task.vercel.app',
  },
  {
    name: 'VivaHaus',
    description: 'Real estate multi-user web app.',
    image: vivaHaus,
    stack: ['React', 'Express', 'MongoDb', 'Tailwind', 'Firebase'],
    sourceCode: {
      frontEnd: 'https://github.com/devsaif-byte/viva-hous-react',
      backEnd: 'https://github.com/devsaif-byte/viva-hous-server',
    },
    livePreview: 'https://viva3412a.web.app/',
  },

  {
    name: 'Tarbiyah Ideal School',
    description: 'A Reputed School Website with Multi user Dashboard.',
    image: tarbiyah,
    stack: [
      'React',
      'Tailwind',
      'Material-Tailwind',
      'Next-UI',
      'Express',
      'Mongoose',
    ],
    sourceCode: {
      frontEnd: null,
      backEnd: 'https://github.com/devsaif-byte/tarbiyah-backend',
    },
    livePreview: 'https://tarbiyah.info/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML5',
  'CSS3',
  'Bootstrap',
  'Tailwind CSS',
  'JavaScript',
  'React',
  'Next.js',
  'Git',
  'Node.js',
  'Express',
  'MongoDB',
  'Firebase',
  'Appwrite',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  // email: 'codeorigin3@gmail.com',
}

export { header, about, projects, skills, contact }
