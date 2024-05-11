import React from 'react'

export const Experience = () => {
  return (
    <div id='experience' className='md:w-4/5 lg:w-2/3 xl:w-1/2 2xl:w-2/3 md:m-auto my-16 md:px-12 md:pt-12 md:pb-24'>
      <h3 className='text-2xl xs:w-full md:text-4xl text-center'>Experiencia</h3>
      <span className='text-sm md:text-base my-10 block m-auto w-max rounded-xl px-2 md:px-4 py-1 border-2 text-green-600 font-light border-green-600 text-center'>Open to work</span>

      <div className='px-6 md:w-2/2 md:p-6 md:my-10 md:ring-1 md:ring-inset md:ring-gray-600 md:rounded-xl md:bg-gray-900'>
        <div className='py-4 mb-2 md:mb-0 md:py-0'>
          <h3 className='text-lg md:text-2xl text-amber-400'><span className='font-bold'>Postcron</span> - <span className='font-light text-white'>Desarrollador Full Stack</span></h3>
          <span className='text-sm font-light'>Octubre 2021 - Actualidad</span>
        </div>

        <div className='md:p-4'>
          <ul className='md:p-4 list-disc text-sm text-gray-400 md:text-white md:text-base font-light'>
            <li className='my-2 md:my-0'><span className='text-amber-400 font-semibold'>Desarrollo</span> de nuevas <span className='text-amber-400 font-semibold'>features</span> y mantenimiento general de la plataforma.</li>
            <li className='my-2 md:my-0'><span className='text-amber-400 font-semibold'>Integración</span> de <span className='text-amber-400 font-semibold'>APIs</span> de terceros como Facebook, LinkedIn, Stripe, entre otros.</li>
            <li className='my-2 md:my-0'><span className='text-amber-400 font-semibold'>Implementación</span> de features con <span className='text-amber-400 font-semibold'>inteligencia artificial </span> (OpenAI).</li>
            <li className='my-2 md:my-0'>Planificación, desarrollo e implementación de un nuevo backend basado en <span className='text-amber-400 font-semibold'>arquitectura de microservicios</span> (NestJS).</li>
            <li className='my-2 md:my-0'><span className='text-amber-400 font-semibold'>Mantenimiento</span> y <span className='text-amber-400 font-semibold'>actualización</span> de servidores basados en <span className='text-amber-400 font-semibold'>Linux</span>.</li>
            <li className='my-2 md:my-0'>Desarrollo y mantenimiento de la <span className='text-amber-400 font-semibold'>aplicación móvil de Postcron</span> (Flutter).</li>
            <li className='my-2 md:my-0'><span className='text-amber-400 font-semibold'>Documentación</span> de features.</li>
          </ul>
        </div>

        {/* ENGLISH */}
        {/* <div className='md:p-4'>
          <ul className='md:p-4 list-disc text-sm text-gray-400 md:text-white md:text-base font-light'>
            <li className='my-2 md:my-0'><span className='text-amber-400 font-semibold'>Development</span> of new <span className='text-amber-400 font-semibold'>features</span> and general maintenance of the platform.</li>
            <li className='my-2 md:my-0'><span className='text-amber-400 font-semibold'>Integration</span> of third-party <span className='text-amber-400 font-semibold'>APIs</span> such as Facebook, LinkedIn, Stripe, among others.</li>
            <li className='my-2 md:my-0'><span className='text-amber-400 font-semibold'>Implementation</span> of <span className='text-amber-400 font-semibold'>artificial intelligence </span> (OpenAI).</li>
            <li className='my-2 md:my-0'>Planning, development, and implementation of a new backend based on <span className='text-amber-400 font-semibold'>microservices architecture</span> (NestJS).</li>
            <li className='my-2 md:my-0'><span className='text-amber-400 font-semibold'>Maintenance</span> and updating of Linux <span className='text-amber-400 font-semibold'>servers</span>.</li>
            <li className='my-2 md:my-0'>Development and maintenance of the <span className='text-amber-400 font-semibold'>Postcron mobile application</span> (Flutter).</li>
            <li className='my-2 md:my-0'><span className='text-amber-400 font-semibold'>Documentation</span> of features.</li>
          </ul>
        </div> */}
      </div>

    </div>
  )
}
