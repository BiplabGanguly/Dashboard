import React from 'react'

export default function Issue(props) {
  return (
    <>
     <div className='flex flex-col w-[90%]'>
        <div className='flex justify-between text-[12px] '> 
            <span>{props.text}</span>
            <span>{props.per}%</span>
        </div>
        <div className='w-[100%] h-[6px] bg-[#F0F1F9] rounded'>
            <div className='h-[6px] bg-[#FF7677] rounded' style={{width : `${props.per}%`, background: props.color}} ></div>
        </div>
     </div>
    </>
  )
}
