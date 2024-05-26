import React from 'react'
import { CgWebsite } from "react-icons/cg";
import SolutionCard from '../../utils/SolutionCard'

const Solutions = () => {
  return (
    <div className=' px-8 md:px-16 lg:px-32 flex gap-32'>
      <div className='w-[50%] grid grid-cols-2 gap-4'>
        <SolutionCard icon={<CgWebsite />} title="Penetration Testing" />
        <SolutionCard icon={<CgWebsite />} title="Adversary Simulation" />
        <SolutionCard icon={<CgWebsite />} title="Security Assessment" />
        <SolutionCard icon={<CgWebsite />} title="Application Security" />
      </div>
      <div className=' w-[50%] flex flex-col justify-center gap-4' >
        <a href="#" className="py-2 px-8 w-56 flex flex-col lg:flex-row font-medium xl:font-semibold bg-[#001b39] hover:bg-[#05080c] border-[#6e807e] border-2 hover:bg-[#7defe0]focus:outline-none focus:ring-2 focus:ring-red-500 active:bg-red-700 transition-all duration-300 ease-in-out text-[#7defe0] items-center uppercase rounded-2xl justify-center">Get Started</a>
        <h1 className='text-4xl font-bold'>Cybersecurity</h1>
        <h1 className='text-4xl font-bold text-[#7defe0]'>solutions</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut doloribus vero autem quibusdam fugiat itaque qui quos animi inventore soluta.
        </p>
        <p className=' text-[#ffffff]'>hello</p>
      </div>
    </div>
  )
}

export default Solutions
