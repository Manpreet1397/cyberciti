import React from 'react'

const Stats = (props) => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className=' text-2xl font-bold'>{props.stat}</h1>
        <p>{props.info}</p>
    </div>
  )
}

export default Stats
