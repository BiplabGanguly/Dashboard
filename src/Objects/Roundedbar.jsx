import React from 'react'

export default function Roundedbar() {

    return (
        <>
            <div className="w-50 h-50 flex justify-center items-center ">
                <svg className="w-50 h-50" viewBox="0 0 200 200">
                    <circle
                        cx="100"
                        cy="100"
                        r="80"
                        fill="none"
                        stroke="#F0F1F9"
                        strokeWidth="14"
                        strokeDasharray="502"
                        strokeLinecap="round"
                    />
                    <circle
                        cx="100"
                        cy="100"
                        r="80"
                        fill="none"
                        stroke="#6D39FF"
                        strokeWidth="14"
                        strokeDasharray="402.12 100.53"
                        strokeLinecap="round"
                    />
                    
                    <text
                        x="100"
                        y="100"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize="24"
                        fill="#6D39FF"
                        fontWeight="bold"
                    >
                        80%
                    </text>
                </svg>
            </div>

        </>
    )
}
