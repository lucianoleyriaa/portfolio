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
    <div className='flex flex-col md:flex-row gap-6 m-auto'>
      <div className='w-1/2'>
        <Image 
          className='rounded-xl m-auto'
          src={ projectPoster }
          alt='Project poster'
          width={600}
          height={0}
        />
      </div>
      <div className='w-1/2'>
        <h3 className='text-2xl font-bold'>{ title }</h3>

        <div className='flex flex-wrap gap-3 my-3'>
          { children }
        </div>

        <p className='my-2 font-light text-gray-400'>{ description }</p>

        <div className='my-4'>
          <div className="flex items-center gap-4">
            <a href={ githubLink } target='_blank' className='py-2 px-4 rounded-3xl ring-1 ring-inset ring-gray-600 bg-indigo-600'>View code</a>
            <a href={ pageLink } target='_blank' className='py-2 px-4 rounded-3xl ring-1 ring-inset ring-gray-600 bg-indigo-600'>Visit site</a>
          </div>
        </div>
      </div>
    </div>
  )
}
