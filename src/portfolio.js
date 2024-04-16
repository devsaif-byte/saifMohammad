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
// import bankistImage from './images/bankist_mock.png'
// import domBankist from './images/domBankist.png'
import ageCalc from './images/age_calc.png'
// import mapty from './images/mapty.png'
// import pizzaCart from './images/pizza-cart.png'
import tarbiyah from './images/tarbiyah.png'
import vivaHaus from './images/vivaHaus.png'
import minimalCart from './images/minimal-cart.png'
import nebula from './images/nebula.png'
import jobApp from './images/jobApp.png'

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://portfolio-saif3.vercel.app/',
  title: 'Portfolio',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Mohammad Saif',
  role: 'Front End Developer',
  description: `Hello! 👋 I'm your friendly Frontend Expert! 🌟 I create and manage the look of websites and web apps.💻 I use things like HTML, CSS, JavaScript, and React to make them awesome! 🚀 I'm good at fixing problems, talking to people, and paying attention to details. 🧩 Plus, I love learning new stuff! 📚`,
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
  // {
  //   name: 'Pizza Cart',
  //   description: 'Pizza order cart.',
  //   image: pizzaCart,
  //   stack: ['React', 'Tailwind', 'Redux'],
  //   sourceCode: {
  //     frontEnd: 'https://github.com/devsaif-byte/fast-react-pizza/',
  //   },
  //   livePreview: 'https://fast-react-pizza-sable.vercel.app/',
  // },
  {
    name: 'Tarbiyah Ideal School',
    description: 'Client Project.',
    image: tarbiyah,
    stack: ['React', 'Tailwind'],
    sourceCode: {
      frontEnd: null,
    },
    livePreview: 'https://tarbiyah.info/',
  },
  // {
  //   name: 'Mapty',
  //   description: 'Geolocation app using vanilla js.',
  //   image: mapty,
  //   stack: ['HTML', 'SCSS', 'Javascript', 'DOM'],
  //   sourceCode: { frontEnd: 'https://github.com/devsaif-byte/mapty-extended' },
  //   livePreview: 'https://mapty-extended.vercel.app/',
  // },
  // {
  //   name: 'Bankist Transaction',
  //   description:
  //     'Bank transaction app that shows up current account balance after logged in. User can transfer money, request loan and delete account.',
  //   image: bankistImage,
  //   stack: ['HTML', 'CSS', 'JavaScript'],
  //   sourceCode: 'https://github.com/devsaif-byte/bankist-arr',
  //   livePreview: 'https://my-repo-gzgbdzura-devsaif-byte.vercel.app/',
  // },
  // {
  //   name: 'DOM Bankist',
  //   description: 'Webpage with beautiful css animation and effects.',
  //   image: domBankist,
  //   stack: ['HTML', 'CSS', 'Vanilla Js'],
  //   sourceCode: 'https://github.com/devsaif-byte/dom-bankist',
  //   livePreview: 'https://dom-bankist.vercel.app/',
  // },
  // {
  //   name: 'Age Calculator',
  //   description:
  //     'Age calculator using vanilla.js and pico.css, challenge by Frontend Mentor.',
  //   image: ageCalc,
  //   stack: ['HTML', 'PicoCSS', 'CSS', 'Javascript', 'DOM'],
  //   sourceCode: { frontEnd: 'https://github.com/devsaif-byte/age-calculator' },
  //   livePreview: 'https://age-calculator3.netlify.app/',
  // },
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
