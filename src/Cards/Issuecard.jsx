import React from 'react'
import Issue from '../Objects/Issue'
import issuedata from '../Objects/Issuedata'

export default function Issuecard() {
    return (
        <>
            <div className="bg-white w-[80%] h-[230px] mt-[2rem] rounded-2xl flex flex-col pl-4 pt-5 gap-5">
                    <h2><span className='font-bold'>264</span> issues total</h2>
                    {
                        issuedata.map((item)=>(
                            <Issue text = {item.text} color = {item.color} per = {item.percen} />
                        ))
                    }
            </div>
        </>
    )
}
