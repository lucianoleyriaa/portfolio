import React from 'react'

export const Experience = () => {
  return (
    <div id='experience' className='w-1/2 m-auto px-12 pb-24'>
      <h3 className='text-4xl text-center'>Experience</h3>
      <span className='my-10 block m-auto w-max rounded-xl px-4 py-1 border-2 text-green-600 font-light border-green-600 text-center'>Open to work</span>

      <div className='w-2/2 p-6 my-10 ring-1 ring-inset ring-gray-600 rounded-xl bg-gray-900'>
        <div>
          <h3 className='text-2xl text-amber-400'><span className='font-bold'>Postcron</span> - <span className='font-light text-white'>Full Stack Developer</span></h3>
          <span className='text-sm font-light'>October 2021 - Today</span>
        </div>

        <div className='p-4'>
          <ul className='p-4 list-disc text-base font-light'>
            <li><span className='text-amber-400 font-semibold'>Development</span> of new <span className='text-amber-400 font-semibold'>features</span> and general maintenance of the platform.</li>
            <li><span className='text-amber-400 font-semibold'>Integration</span> of third-party <span className='text-amber-400 font-semibold'>APIs</span> such as Facebook, LinkedIn, Stripe, among others.</li>
            <li><span className='text-amber-400 font-semibold'>Implementation</span> of <span className='text-amber-400 font-semibold'>artificial intelligence </span> (OpenAI).</li>
            <li>Planning, development, and implementation of a new backend based on <span className='text-amber-400 font-semibold'>microservices architecture</span> (NestJS).</li>
            <li><span className='text-amber-400 font-semibold'>Maintenance</span> and updating of Linux <span className='text-amber-400 font-semibold'>servers</span>.</li>
            <li>Development and maintenance of the <span className='text-amber-400 font-semibold'>Postcron mobile application</span> (Flutter).</li>
            <li><span className='text-amber-400 font-semibold'>Documentation</span> of features.</li>
          </ul>
        </div>
      </div>

    </div>
  )
}
