import React from 'react'
import AwardsCard from '../../utils/AwardsCard'

const Awards = () => {
    return (
        <div className=' px-8 md:px-16 lg:px-32 py-8 flex flex-col gap-6'>
            <div className=' flex justify-center '>
                <span className="py-2 px-8 w-auto flex flex-col lg:flex-row font-medium xl:font-semibold bg-[#001b39] hover:bg-[#05080c] border-[#6e807e] border-2 hover:bg-[#7defe0]focus:outline-none focus:ring-2 focus:ring-red-500 active:bg-red-700 transition-all duration-300 ease-in-out text-[#7defe0] items-center uppercase rounded-2xl justify-center">Awards & Recognition</span>
            </div>
            <div className=' grid grid-cols-5 gap-4'>
                <AwardsCard title="Best Data Security" />
                <AwardsCard title="Best Data Security" />
                <AwardsCard title="Best Data Security" />
                <AwardsCard title="Best Data Security" />
                <AwardsCard title="Best Data Security" />
            </div>
        </div>
    )
}

export default Awards
