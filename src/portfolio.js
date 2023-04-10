const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://saif-mohammad.vercel.app/',
  title: 'Saif Portfolio',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Saif',
  role: 'Front End Developer (React)',
  description:
    "As a Junior Frontend Developer, I engage in building and managing website and web application user interfaces. I'm familiar with front-end web development technologies like HTML, CSS, JavaScript, and React, as well as version control systems and web development tools. I rely on my problem-solving, communication skills, attention to detail, and passion for learning.",
  resume:
    'https://docs.google.com/document/d/1MspPp0arw7JDjlGrnpZnh9tkoujb_TecCWz9FdAl-60/edit?usp=sharing',
  social: {
    Facebook: 'https://www.facebook.com/saifmohammad2020/',
    linkedin: 'https://www.linkedin.com/in/saif-mohammad-9995801a2/',
    github: 'https://github.com/devsaif-byte',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Bankist Transaction',
    description:
      'A basic transaction app that shows up current accout balance after logged in. User can transfar money, request loan and delete account. All actions are a demonstration purpose.',
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
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'Bootstrap',
  'Tailwind Css',
  'JavaScript',
  'React',
  'Material UI',
  'Git',
  'Node',
  'Express',
  'MongoDB',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'codeorigin3@gmail.com',
}

export { header, about, projects, skills, contact }
