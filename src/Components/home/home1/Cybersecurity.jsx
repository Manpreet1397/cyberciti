import React from 'react'
import BubbleCard from '../../utils/BubbleCard'

const Cybersecurity = () => {
    return (
        <div className='px-8 md:px-16 lg:px-32 py-8 flex gap-32 '>
            <div className=' flex p-12 bg-[#e1fe7e] w-full rounded-2xl'>
                <div className=' w-[50%] flex flex-col gap-6 justify-center'>
                    <div className=' flex flex-col gap-2'>
                        <h1 className=' text-4xl text-black font-bold'>Cybersecurity</h1>
                        <h1 className=' text-4xl text-black font-bold'>Solutions by Industry</h1>
                    </div>
                    <a href="#" className=" py-2 px-8 w-52 flex flex-col lg:flex-row font-medium xl:font-semibold bg-black hover:bg-[#05080c] border-white border-4 hover:bg-[#7defe0]focus:outline-none focus:ring-2 transition-all duration-300 ease-in-out text-white items-center rounded-2xl justify-center">Read More</a>
                </div>
                <div className=' w-[50%] grid grid-cols-3 gap-4 '>
                    <BubbleCard text="Something" />
                    <BubbleCard text="Finance" />
                    <BubbleCard text="Commerce" />
                    <BubbleCard text="Education" />
                    <BubbleCard text="Technology" />
                    <BubbleCard text="Technology" />
                    <BubbleCard text="Technology" />
                    <BubbleCard text="Technology" />
                    <BubbleCard text="Technology" />
                </div>
            </div>
        </div>
    )
}

export default Cybersecurity
