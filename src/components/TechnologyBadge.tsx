import React, { ReactNode } from 'react';

interface Props {
  label: string,
  icon: ReactNode
}

export const TechnologyBadge = ({ label, icon }: Props) => {
  return (
    <div className='flex gap-1 items-center text-sm px-2 py-1 rounded-xl ring-1 ring-inset ring-gray-600 bg-gray-900'>
      <div> { icon } </div>
      <span>{ label }</span>
    </div>
  )
}