import React from 'react'
import Bar from '../Objects/Bar'
import { newdata } from '../Objects/Bardata'
import Databar from '../Objects/Databar'

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
                <div className='flex ml-8 mt-2'>
                    <Databar />
                    <div className="flex gap-7">

                        {
                            newdata.map((item, idex) => (
                                <Bar tipval={item.val} key={idex} color={item.color} month={item.month} />
                            )
                            )
                        }

                    </div>
                </div>


            </div>
        </>
    )
}
