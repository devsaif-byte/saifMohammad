const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://saif-mohammad.vercel.app/',
  title: 'Portfolio',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Saif Mohammad',
  role: 'MERN Stack Developer',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume:
    'https://docs.google.com/document/d/e/2PACX-1vToUg3hwgCP38feN6iUTuHQ6VYYHWIWYbubTLFVq-pM2-W00WVBytCOEpkYsr9e1A/pub',
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
