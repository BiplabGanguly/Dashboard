import React from 'react'

export default function Monitorcard({gradient,info}) {
    return (
        <>
            <div className='h-[170px] w-[190px] rounded-2xl flex flex-col' style={{background : gradient}}>
                <p className='text-3xl text-white mt-5 ml-4'>{info.icon}</p>
                <p className='text-[12px] text-white mt-10 ml-4'>{info.name}</p>
                <p className='text-[16px] text-white mt-2 ml-4'>{info.info}</p>
            </div>
        </>
    )
}
