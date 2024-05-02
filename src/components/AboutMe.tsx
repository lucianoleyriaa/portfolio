import React from 'react'
import Image from 'next/image';

export const AboutMe = () => {
  return (
    <div id='about-me' className='w-9/12 m-auto p-3 sm:px-6 md:px-12 pt-12 pb-24'>
      <h3 className='text-4xl text-center'>About me</h3>

      <div className='flex flex-col'>
        <div className='m-auto my-8'>
          <Image 
            className='rounded-full'
            src='/images/cv.jpeg'
            width={250}
            height={0}
            alt=''
          />
        </div>

        <div className='px-20 text-gray-400'>
          <p className='my-4'>
            Hola &#128075;, soy <span className='text-amber-400 font-bold'>Luciano Leyria</span>, desarrollador full stack. Inicie en el mundo del software en 2019 cuando comenzó estudiar 
            <span className='text-indigo-600 font-bold'> analista en sistemas 💻</span>. Actualmente me encuentro trabajando como desarrollador fullstack en un empresa dentro del campo 
            del marketing.
          </p>

          <p className='my-4'>
            En estos 2 años, he trabajado principalmente como <span className='text-indigo-600 font-bold'>desarrollador backend en Node y PHP</span>, pero también he realizado diferentes tareas de 
            frontend utilizando <span className='text-indigo-600 font-bold'>Angular</span>. Por otra parte, he realizado tareas de <span className='text-amber-400 font-bold'>mantenimientos y 
            actualización de servidores</span> basados en linux. 
          </p>

          <p className='my-4'>
            En el año 2022 tuve un gran desafío, ya que estuve a cargo del desarrollo de la <span className='text-indigo-600 font-bold'>aplicación mobile</span> de <span className='text-amber-400 font-bold'>postcron</span>, la cual fue 
            desarrollada en <span className='text-indigo-600 font-bold'>Flutter &#128241;</span>. 
          </p>

          <p className='my-4'>
            Hace unos meses, estoy trabajando en un proyecto que consiste en migrar todo el backend de la plataforma y 
            para el cual estamos utilizando <span className='text-indigo-600 font-bold'>NestJS</span> y un arquitectura basada en <span className='text-amber-400 font-bold'>microservicios</span>. Ademas el proyecto se esta deployando 
            utilizando <span className='text-indigo-600 font-bold'>Kubernetes</span>.
          </p>

          <p className="my-4">
            En cuanto a lo personal, he <span className='text-amber-400 font-bold'>desarrollado algunos proyectos</span> que tiene como objectivo principal poner en practica los nuevos 
            conocimientos que he ido adquiriendo en estos últimos años. La gran mayoría de estos proyectos están desarrollados en 
            <span className='text-indigo-600 font-bold'> Node y React</span>, ya que son mis tecnologías favoritas.
          </p>

        </div>

        <div className='m-auto mt-8'>
          <a href='/files/CV-Luciano-Leyria-English.pdf' download className='px-4 py-2 rounded-3xl bg-indigo-600'>Download CV</a>
        </div>

      </div>

    </div>
  )
}
