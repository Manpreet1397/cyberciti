import React from 'react'
import Stats from '../../utils/Stats'
import { statData } from '../../DummyData/statData'

const GetStarted = () => {
    return (
        <div style={{backgroundImage: "", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}} className=' flex flex-col items-center px-8 md:px-16 lg:px-32 h-auto py-28 gap-16 md:h-screen xl:h-[800px] justify-between text-center md:text-start'>
            <div className='flex flex-col items-center gap-6'>
                <h1 className='text-6xl font-bold text-center'>IT and Cybersecurity <br />services for organizations</h1>
                <a href="#" className=" py-2 px-8 w-56 flex flex-col lg:flex-row font-medium xl:font-semibold bg-[#001b39] hover:bg-[#05080c] border-[#7defe0] border-4 hover:bg-[#7defe0]focus:outline-none focus:ring-2 transition-all duration-300 ease-in-out text-white items-center uppercase rounded-2xl justify-center">Get Started</a>
            </div>
            <div className=' grid grid-cols-4 gap-6 border-2 w-full p-8 rounded-2xl'>
                {statData.map((data, index) => <Stats key={index}  stat={data.stat} info={data.info} />)}
            </div>
        </div>
    )
}

export default GetStarted
