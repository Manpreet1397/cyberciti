import React from 'react'

const BubbleCard = (props) => {
  return (
    <div className=' px-8 py-4 border-2 border-[#4ddcad] bg-[#bcf288] text-black text-center rounded-2xl'>
      <h1>{props.text}</h1>
    </div>
  )
}

export default BubbleCard
