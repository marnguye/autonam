'use client'

import { useState, useEffect } from 'react'

export default function HomePage() {
    const [currentWord, setCurrentWord] = useState('výběru')

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord(prev => prev === 'výběru' ? 'prodeji' : 'výběru')
        }, 2000) // Switch every 2 seconds

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="w-full h-full overflow-hidden">
            {/* Background video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/BMW_M4_landing_page_video.mp4" type="video/mp4"/>
            </video>

            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-40"/>
            
            {/* Main heading positioned in front of video */}
            <div className="relative z-30 flex items-center justify-center h-full">
                <h1 className="text-6xl lg:text-6xl font-bold text-white text-center px-4">
                    Spolehlivý partner při{' '}
                    <span className="inline-block min-w-[120px] text-center transition-all duration-100 ease-in-out">
                        {currentWord}
                    </span>{' '} Vašeho auta.
                </h1>
            </div>
        </div>
    )
}