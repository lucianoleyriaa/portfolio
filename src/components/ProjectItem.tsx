import React from 'react'

import Image from 'next/image';

interface Props {
  title: string;
  description: string;
  githubLink: string;
  pageLink: string;
  projectPoster: string;
  children: React.ReactNode,
}

export const ProjectItem = ({ title, description, githubLink, pageLink, projectPoster, children }: Props) => {
  return (
    <div className='flex flex-col lg:flex-row gap-6 m-auto'>
      <div className='w-2/2 lg:w-1/2'>
        <Image 
          className='rounded-xl m-auto'
          src={ projectPoster }
          alt='Project poster'
          width={600}
          height={0}
        />
      </div>
      <div className='w-2/2 lg:w-1/2'>
        <h3 className='text-lg text-center lg:text-left md:text-2xl font-bold'>{ title }</h3>

        <div className='flex flex-wrap gap-3 my-3'>
          { children }
        </div>

        <p className='my-2 font-light text-sm md:text-base text-gray-400'>{ description }</p>

        <div className='my-4'>
          <div className="flex items-center justify-center md:justify-normal gap-4">
            {/* <a href={ githubLink } target='_blank' className='py-1 px-2 md:py-2 md:px-4 rounded-3xl bg-indigo-600 hover:bg-indigo-400 transition hover:scale-105 duration-300 ease-out'>
              <i className="fa-regular fa-eye mr-2"></i>
              <span>View code</span>
            </a> */}
            <a href={ pageLink } target='_blank' className='py-1 px-2 md:py-2 md:px-4 rounded-3xl bg-indigo-600 hover:bg-indigo-400 transition hover:scale-105 duration-300 ease-out'>
              <i className="fa-solid fa-link mr-2"></i>
              <span>Visit site</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
