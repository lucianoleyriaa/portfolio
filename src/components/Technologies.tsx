import React from 'react'
import { TechnologyCard } from './TechnologyCard'

const frontendTechnologies = [
  { icon: '/svg/html.svg', name: 'Html' },
  { icon: '/svg/css.svg', name: 'Css' },
  { icon: '/svg/tailwind.svg', name: 'Tailwind' },
  { icon: '/svg/javascript.svg', name: 'Javascript' },
  { icon: '/svg/typescript.svg', name: 'Typescript' },
  { icon: '/svg/angular.svg', name: 'Angular' },
  { icon: '/svg/react.svg', name: 'React', styles: { height: '50px' } },
  { icon: '/svg/redux.svg', name: 'Redux' },
]

const backendtechnologies = [
  { icon: '/svg/php.svg', name: 'PHP' },
  { icon: '/svg/node.svg', name: 'Node' },
  { icon: '/svg/express.svg', name: 'Express' },
  { icon: '/svg/nest.svg', name: 'NestJS' },
  { icon: '/svg/next.svg', name: 'NextJS' },
  { icon: '/svg/mysql.svg', name: 'MySQL' },
  { icon: '/svg/mongo.svg', name: 'MongoDB', styles: { height: '50px' } },
  { icon: '/svg/prisma.svg', name: 'Prisma' },
  { icon: '/svg/nginx.svg', name: 'Nginx' },
  { icon: '/svg/docker.svg', name: 'Docker' },
  { icon: '/svg/kubernetes.svg', name: 'Kubernetes' },
]

const mobileTechnologies = [
  { icon: '/svg/dart.svg', name: 'Dart' },
  { icon: '/svg/flutter.svg', name: 'Flutter', styles: { height: '50px' } },
]

const tools = [
  { icon: '/svg/postman.svg', name: 'Postman' },
  { icon: '/svg/git.svg', name: 'Git' },
  { icon: '/svg/github.svg', name: 'Github' },
  { icon: '/svg/term.svg', name: 'Term' },
];

export const Technologies = () => {
  return (
    <div id='technologies' className='w-9/12 m-auto p-3 sm:px-6 md:px-12 pt-12 pb-24'>
      <h3 className='text-4xl text-center'>Technologies</h3>

      <div className='px-20'>
        <p className='my-10 text-gray-400'>
          En estos años como <span className='text-amber-400 font-bold'>programador</span> he trabajado 
          con varias <span className='text-amber-400 font-bold'>tecnologias, frameworks, librerias y herramientas</span>.
        </p>

        <div className='grid grid-cols-4 gap-8'>
          <TechnologyCard title='Frontend' technologies={ frontendTechnologies } />
          <TechnologyCard title='Backend' technologies={ backendtechnologies } />
          <TechnologyCard title='Mobile' technologies={ mobileTechnologies } />
          <TechnologyCard title='Herramientas' technologies={ tools } />
        </div>
      </div>
    </div>
  )
}
