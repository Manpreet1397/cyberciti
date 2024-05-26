import React from 'react'

const NewsCard = (props) => {
  return (
    <div className=' p-6 border-2 bg-gray-800 flex flex-col gap-6 rounded-3xl'>
        <div className=' h-[200px]'>
          <img className=' object-cover w-full h-full rounded-3xl' src={props.image} alt="image" />
        </div>
        <div className=' flex flex-col gap-6'>
            <div>
            <span className='px-4 py-2 bg-[#e1fe7e] text-black rounded-3xl'>Article</span>
            </div>
            <p className=' text-xl font-bold'>{props.title}</p>
        </div>
    </div>
  )
}

export default NewsCard
