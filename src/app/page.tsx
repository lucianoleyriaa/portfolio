import { AboutMe, Experience, Header, Presentation, Projects } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen relative flex-col items-center justify-between bg-slate-950">

      <Header />

      <Presentation />

      <Experience />

      <Projects />

      <AboutMe />

      <section className='bg-indigo-600 p-36'>

        <div className='flex items-center justify-between'>
          <div className='basis-1/2 pr-24'>
            <h2 className='text-5xl font-bold text-lime-300'>Over the</h2>
            <h2 className='text-5xl font-bold text-lime-300'>Years,</h2>
            <p className='text-gray-200 my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, odit. Repellat, voluptate. Dignissimos corporis laudantium quasi minus placeat eos, officia, veritatis iure, quibusdam deleniti amet architecto eligendi! Et, blanditiis! Quae.</p>
          </div>

          <div className='basis-1/2'>
            <Image 
              className="rounded-md"
              src='/1.jpg'
              width={800}
              height={0}
              alt="Technologies"
            />
            <div>
              <button className='rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>See my work</button>
            </div>
          </div>

        </div>

        


      </section>
    </main>
  );
}
