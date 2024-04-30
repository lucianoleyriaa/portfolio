import React from 'react'
import Image from 'next/image';

import { ProjectItem } from './ProjectItem';
import { TechnologyBadge } from './TechnologyBadge';

export const Projects = () => {
  return (
    <div id='projects' className='w-9/12 m-auto p-3 sm:px-6 md:px-12 pt-12 pb-24'>
      <h3 className='text-4xl text-center'>Projects</h3>

      <div className='my-20'>
        <ProjectItem 
          title='Budget App - Expense Tracker'
          description='
            Budget App is an application that allows you to track all your incomes and outcomes and show you statistics using charts.
          '
          githubLink=''
          pageLink=''
          projectPoster='/images/budget.png'
        >
          <TechnologyBadge 
            label='Node'
            icon={ <Image src='/svg/node.svg' className='block' width={15} height={15} alt='' /> }
          />
          <TechnologyBadge 
            label='Express'
            icon={ <Image src='/svg/express.svg' className='block' width={15} height={15} alt='' /> }
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
            Budget App is an application that allows you to track all your incomes and outcomes and show you statistics using charts.
          '
          githubLink=''
          pageLink=''
          projectPoster='/images/image-cropper.png'
        >
          <TechnologyBadge 
            label='Node'
            icon={ <Image src='/svg/node.svg' className='block' width={15} height={15} alt='' /> }
          />
          <TechnologyBadge 
            label='Express'
            icon={ <Image src='/svg/express.svg' className='block' width={15} height={15} alt='' /> }
          />
          <TechnologyBadge 
            label='React'
            icon={ <Image src='/svg/react.svg' className='block' width={15} height={15} alt='' /> }
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
