import React from 'react'

export default function MessageRight({text}) {
  return (
    <div className='flex justify-end'>
        <div className="mr-7 ml-16 mb-3 rounded-xl bg-[#7A8194] inline-block px-4 py-2 max-w-32 w-auto">{text? text: "Check your permissions:"}</div>
    </div>
  )
}
