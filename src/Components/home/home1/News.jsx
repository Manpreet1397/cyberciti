import React from 'react'
import NewsCard from '../../utils/NewsCard'

const News = () => {
    return (
        <div className=' px-8 md:px-16 lg:px-32 py-8 flex flex-col items-center gap-6'>
            <div className=' flex flex-col gap-4'>
                <a className="py-2 px-8 w-64 flex flex-col lg:flex-row font-medium xl:font-semibold bg-[#001b39] hover:bg-[#05080c] border-[#6e807e] border-2 hover:bg-[#7defe0]focus:outline-none focus:ring-2 focus:ring-red-500 active:bg-red-700 transition-all duration-300 ease-in-out text-[#7defe0] items-center uppercase rounded-2xl justify-center">Blog</a>
                <h1 className=' text-3xl font-bold text-center'>Latest news</h1>
            </div>
            <div className=' grid grid-cols-2 gap-4 w-full'>
                <NewsCard image="./img2.jpeg" title="GitOps vs DevOps - What's the difference?"/>
                <NewsCard image="./img2.jpeg" title="3 Skills You need to Get Hired in Cybersecurity"/>
            </div>
        </div>
    )
}

export default News
