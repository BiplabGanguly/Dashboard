import React from 'react'
import { TbHomeCheck } from "react-icons/tb";


export default function Gradientcard({info}) {
    return (
        <>
            <div className="h-[56px] w-[225px] rounded-2xl bg-gradient-to-r from-[#6C3AFE] to-[#4CB5F0] text-white flex items-center pl-8 gap-4">
               <TbHomeCheck/>
                {info}
            </div>
        </>
    )
}
