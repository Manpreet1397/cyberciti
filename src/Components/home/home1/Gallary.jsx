import React from 'react'

const Gallary = () => {
  return (
    <div className='flex px-8 md:px-16 lg:px-32 py-8 '> 
      <div className=' w-[50%] relative'>
        <img className=' object-cover h-full w-full' src="./img1.jpg" alt="image" />
        <div className=' p-8 bg-[#7defe0] text-black absolute bottom-0 right-0 w-[40%] flex flex-col gap-4'>
            <p className='font-bold'>01</p>
            <h1 className=' text-xl font-bold'>Schedule a Consultation</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
      <div className=' w-[50%] relative'>
        <img className=' object-cover h-full w-full ' src="./img2.jpeg" alt="image" />
        <div className=' p-8 bg-[#e1fe7e] text-black absolute top-0 right-0 w-[50%] flex flex-col gap-4'>
            <p className='font-bold'>02</p>
            <h1 className=' text-xl font-bold'>Together Implement Holistic Security Program</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className=' p-8 bg-[#e1fe7e] text-black absolute bottom-0 left-0 w-[50%] flex flex-col gap-4'>
            <p className='font-bold'>03</p>
            <h1 className=' text-xl font-bold'>We wil craft your mitigation plan</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
    </div>
  )
}

export default Gallary
