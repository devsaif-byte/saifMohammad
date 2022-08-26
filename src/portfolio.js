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
  resume: 'https://shorturl.at/bchz1',
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
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
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
