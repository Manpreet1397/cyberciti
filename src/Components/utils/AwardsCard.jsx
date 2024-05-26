import React from 'react'

const AwardsCard = (props) => {
  return (
    <div className=' flex flex-col justify-center items-center p-6 gap-4 border-2 rounded-3xl'>
      <div>
        <img className=' w-32 ' src="./award.png" alt="award" />
      </div>
      <div>
        <p>{props.title}</p>
      </div>
    </div>
  )
}

export default AwardsCard
