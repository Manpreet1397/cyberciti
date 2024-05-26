import React from 'react'

const SolutionCard = (props) => {
  return (
    <div className=' bg-[#001b39] hover:bg-[#05080c] border-[#7defe0] border-4 hover:bg-[#7defe0]focus:outline-none focus:ring-2 transition-all duration-300 ease-in-out rounded-2xl flex flex-col justify-between py-12 items-center gap-8'>
      <div className='p-2 rounded-full bg-[#7defe0] scale-[200%]'>
        <div>{props.icon}</div>
      </div>
      <div>{props.title}</div>
    </div>
  )
}

export default SolutionCard
