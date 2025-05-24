import React from 'react'
import { BiSolidUserPin } from "react-icons/bi";

export default function Largecard() {
    return (
        <>
            <div className="h-[160px] w-[225px] border-2 border-[#32323D] rounded-2xl bg-[#23232B] text-white flex flex-col pl-8 gap-4">
                <div className='flex gap-4 items-center mt-5 '>
                    <BiSolidUserPin />
                    ID Monitoring
                </div>

                <div className='text-[12px] text-[#9393AF]  border-l border-[#4FAFF2] ml-6 pl-4 flex flex-col gap-2'>
                    <p>Distributed tracking</p>
                    <p>Errors</p>
                    <p>Alert conditions</p>
                </div>
            </div>
        </>
    )
}
