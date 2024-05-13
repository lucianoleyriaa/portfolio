import React from 'react'
import Image from 'next/image'

interface Props {
  title: string,
  technologies: any[],
  styles?: string
}

export const TechnologyCard = ({ title, technologies, styles }: Props) => {
  return (
    <div className={ `col-span-2 ${styles}`  }>
      <div className='text-center rounded-lg ring-1 ring-inset ring-gray-300 shadow-xl dark:shadow-none dark:ring-0 dark:bg-gray-900 py-2 px-3 md:py-4 md:px-6'>
        <h3 className='text-3xl my-2'>{ title }</h3>

        <div className='flex flex-wrap gap-8 justify-center items-center py-4 px-4'>

          {
            technologies.map((item, index) => {
              return (
                <div key={index} className='flex flex-col gap-4 items-center justify-between'>
                  <Image src={item.icon} width={50} height={50} style={{...item.styles}} alt='Technology icon' />
                  <span className=''>{ item.name }</span>
                </div>
              )
            })
          }

        </div>

      </div>
    </div>
  )
}
