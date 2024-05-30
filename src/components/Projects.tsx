import React from 'react'
import Image from 'next/image';

import { ProjectItem } from './ProjectItem';
import { TechnologyBadge } from './TechnologyBadge';

export const Projects = () => {
  return (
    <div id='projects' className='md:w-4/5 lg:w-2/3 xl:w-2/2 2xl:w-2/3 md:m-auto p-3 sm:px-6 md:px-12 pt-12 pb-24 dark:text-white text-gray-800'>
      <h3 className='text-2xl md:text-4xl text-center'>Proyectos</h3>

      <div className='my-8 md:my-20'>
        <ProjectItem 
          title='Budget App - Expense Tracker'
          description='
            Budget app es una aplicación que facilita el registro de todos los ingresos y gastos diarios en categorías, 
            ayudando en la administración financiera. También ofrece herramientas gráficas para visualizar el flujo monetario 
            a lo largo de los meses, facilitando la toma de decisiones para mejorar la situación financiera.
          '
          githubLink=''
          pageLink='https://budget-app.lucianoleyria.com'
          projectPoster='/images/budget.png'
        >
          <TechnologyBadge 
            label='Node'
            icon={ <Image src='/svg/node.svg' className='block' width={15} height={15} alt='' /> }
          />
          <TechnologyBadge 
            label='React'
            icon={ <Image src='/svg/react.svg' className='block' width={15} height={15} alt='' /> }
          />
          <TechnologyBadge 
            label='MySQL'
            icon={ <Image src='/svg/mysql.svg' width={15} height={15} alt='' /> }
          />
          <TechnologyBadge 
            label='Docker'
            icon={ <Image src='/svg/docker.svg' width={15} height={15} alt='' /> }
          />
          <TechnologyBadge 
            label='Redis'
            icon={ <Image src='/svg/redis.svg' width={15} height={15} alt='' /> }
          />
          
        </ProjectItem>
      </div>
      <div className='my-10'>
        <ProjectItem
          title='Image cropper'
          description='
            Image cropper es un herramienta sencilla que permite transformar tus imagenes. Con image cropper puedes
            desde cortar una imagen basada en un aspect ratio, hasta agregar tu propio marca de agua. Ademas puedes 
            redimensionar o descargar una imagen con tan solo un link.
          '
          githubLink=''
          pageLink='https://image-cropper-next.vercel.app/images/crop'
          projectPoster='/images/image-cropper.png'
        >
          <TechnologyBadge 
            label='NextJS'
            icon={ <Image src='/svg/next.svg' className='block' width={15} height={15} alt='' /> }
          />
          <TechnologyBadge 
            label='Tailwind'
            icon={ <Image src='/svg/tailwind.svg' className='block' width={15} height={15} alt='' /> }
          />
          <TechnologyBadge 
            label='NestJS'
            icon={ <Image src='/svg/nest.svg' className='block' width={15} height={15} alt='' /> }
          />
          <TechnologyBadge 
            label='Docker'
            icon={ <Image src='/svg/docker.svg' width={15} height={15} alt='' /> }
          />
        </ProjectItem>
      </div>
    </div>
  )
}
