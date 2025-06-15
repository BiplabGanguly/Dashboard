import React from 'react'

export default function Bar({ tipval, color, month }) {

    return (
        <>
            <div className="w-9 h-72 rounded-t-2xl rounded-b-md flex flex-col-reverse">
                <div className='text-[12px]' >{month}</div>
                <div className="w-9 h-72 bg-[#F5F5FF] rounded-t-2xl rounded-b-md flex flex-col-reverse">
                    <div className="w-[100%] rounded-t-2xl rounded-b-md" style={{ height: `${tipval}%`, background: `${color}` }}>
                    </div>
                </div>
            </div>
        </>
    )
}
