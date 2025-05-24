import React from 'react'
import Bar from '../Objects/Bar'
import data from '../Objects/Bardata'

export default function Graphcard() {
    
    return (
        <>
            <div className='ml-7 bg-white h-[100%] w-[94%] rounded-2xl flex flex-col'>
                <div className='flex m-8 items-center justify-between w-190 '>
                    <div className='flex gap-12'>
                        <div className="flex flex-col border-l-4 border-[#E2E2FC] pl-3" >
                            <span className="text-[1.5rem]">9.5k </span>
                            <span>Total files</span>
                        </div>

                        <div className="flex flex-col border-l-4 border-[#703FFF] pl-3" >
                            <span className="text-[1.5rem]">8k </span>
                            <span>Scanned files</span>
                        </div>
                    </div>
                    <div>
                        <input type='month' value="2025-05" className='bg-[#703FFF] text-white text-[12px] w-24 p-2 rounded-2xl' />
                    </div>

                </div>
                <div className="flex ml-8 mt-2  gap-7">
                    <Bar tipval = {data[0]} color="#6D39FF" /> 
                    <Bar tipval = {data[1]} color="#55BA9C" />
                    <Bar tipval = {data[2]} color="#6D39FF" />
                    <Bar tipval = {data[3]} color="#D874E8" />
                    <Bar tipval = {data[4]} color="#6D39FF" />
                    <Bar tipval = {data[5]} color="#FF7575" />
                    <Bar tipval = {data[6]} color="#6D39FF" />
                    <Bar tipval = {data[7]} color="#96D854" />
                    <Bar tipval = {data[8]} color="#6D39FF" />
                    <Bar tipval = {data[9]} color="#FF74BF" />
                    <Bar tipval = {data[10]} color="#6D39FF" />
                    <Bar tipval = {data[11]} color="#4cb5f0" />
                </div>

            </div>
        </>
    )
}
