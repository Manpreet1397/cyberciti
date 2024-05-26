import React from 'react'
import DisplayCard from './Display'

const Team = () => {
    return (
        <div>
            
            <div className="mx-autobg-[#001b39] text-white flex flex-col justify-center gap-6 lg:gap-40 pt-40 pb-24 px-12 md:px-32 text-center md:text-left">

            <div className="flex gap-4 justify-center">
                        <a href="#projects" className="px-4 py-2 rounded bg-bg-[#05080c] border shadow-sm  hover:shadow-white  text-[#7defe0] font-bold">
                            OUR TEAM
                        </a>
                        
                    </div>
                <div className="flex flex-col gap-8 py-8">
                    <div className="text-left">

                        <div className="flex justify-center">
                            <div className="flex justify-end">
                                <h1 className="text-6xl font-bold text-center"><span>Meet The</span> <span className='text-[#7defe0]'> Team</span></h1>
                            </div>
                           
                        </div>
                    </div>
                    
                    
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <DisplayCard image="mark.jpeg" title="Mark Tisharo" details="FOUNDER AND CEO" />
                    <DisplayCard image="tony.jpeg" title="Tony Markus" details="IT SPECIALIST" />
                    <DisplayCard image="jennifer.jpeg" title="Jennifer ada" details="DIRECTOR CYBERSECUIRTY" />
                    <DisplayCard image="Alexis.jpeg" title="Alexis" details="OPERATION MANGAER" />
                    <DisplayCard image="Taylor.jpeg" title="Taylor" details="CYBER ANALYST" />
                    <DisplayCard image="joatha.jpeg" title="Jonatha" details="INFORMATION TECHNICIAN" />
                </div>
            
            </div>
            

        </div>
    )
}

export default Team
