import React from 'react'

export default function Bar({tipval,color}) {
  return (
    <>
    <div className="w-9 h-72 bg-[#F5F5FF] rounded-t-2xl rounded-b-md flex flex-col-reverse">
        <div className="w-[100%] rounded-t-2xl rounded-b-md" style={{height : tipval+"%", background : color}}>
        </div>
    </div>
    </>
  )
}
