import React from 'react'
import Roundedbar from '../Objects/Roundedbar'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


export default function Statuscard() {
    return (
        <>
            <div className="bg-white w-[80%] h-[400px] mt-[1.6rem] rounded-2xl flex flex-col items-center justify-center gap-3">
                <h2 className='text-[12px]'>Protection Status</h2>
                <Roundedbar/>
                <h2 className='text-[14px]'>Average Protection</h2>
                <p className='text-[9px] w-[130px] text-center'>Check what you can do to be fully protected</p>
                <button className='bg-[#F0F1F9] w-50 h-9 rounded-xl text-[12px] text-left pl-3 flex justify-between items-center ' >Overview<span className='text-[14px] mr-3'><MdOutlineKeyboardArrowRight/></span></button>
            </div>
        </>
    )
}
