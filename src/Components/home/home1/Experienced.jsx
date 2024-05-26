import React from 'react'

const Experienced = () => {
    return (
        <div className=' px-8 md:px-16 lg:px-32 py-8 flex'>
            <div className='border-2 h-[400px] w-full flex gap-16 items-center rounded-3xl'>
            <div className=' w-[50%] flex gap-4'>
                <div className=' w-[50%] h-[90%] '>
                    <img className='h-full object-cover rounded-3xl' src="./img1.jpg" alt="image" />
                </div>
                <div className=' w-[50%] h-[90%] '>
                    <img className='h-full object-cover rounded-3xl' src="./img1.jpg" alt="image" />
                </div>
            </div>
            <div className=' w-[50%] flex flex-col gap-4'>
                <div>
                    <a className="py-2 px-8 w-64 flex flex-col lg:flex-row font-medium xl:font-semibold bg-[#001b39] hover:bg-[#05080c] border-[#6e807e] border-2 hover:bg-[#7defe0]focus:outline-none focus:ring-2 focus:ring-red-500 active:bg-red-700 transition-all duration-300 ease-in-out text-[#7defe0] items-center uppercase rounded-2xl justify-center">Reason to Choose Us</a>
                </div>
                <div>
                    <h1 className=' text-4xl'>Experienced and</h1>
                    <h1 className=' text-4xl text-[#7defe0]'>Trusted</h1>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis at earum corrupti fuga amet facere commodi ut eum cupiditate iusto!
                </p>
                <a href="#" className=' underline'>Read More</a>
            </div>
            </div>
        </div>
    )
}

export default Experienced
