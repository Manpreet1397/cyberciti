import React from 'react'

const Help = () => {
  return (
    <div className=' px-8 md:px-16 lg:px-32 py-8 '> 
      <div className='flex flex-col items-center gap-12 border-2 py-28 rounded-3xl'>
      <h1 className=' text-6xl font-bold'>Need help with your <br /> security program?</h1>
      <form action="_" className='bg-white rounded-3xl w-[60%]'>
        <input type="email" name="email" id="email" placeholder='Email Address' className=' p-2 bg-transparent w-[80%]' />
        <input type="submit" value="Submit" className=' px-4 py-2 rounded-3xl bg-[#7defe0] text-black w-[20%]' />
      </form>
      </div>
    </div>
  )
}

export default Help
