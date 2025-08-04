'use client'

import React, {useEffect, useState, useRef} from 'react'

export default function Home() {
    const [currentWord, setCurrentWord] = useState('výběru')
    const [videoLoaded, setVideoLoaded] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord(prev => prev === 'výběru' ? 'prodeji' : 'výběru')
        }, 2000) // Switch every 2 seconds

        return () => clearInterval(interval)
    }, [])

    const scrollToNextSection = () => {
        const nextSection = document.getElementById('services-section')
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const handleVideoLoad = () => {
        setVideoLoaded(true)
    }

    const handleVideoError = () => {
        console.error('Video failed to load')
        setVideoLoaded(true) // Show content even if video fails
    }

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {/* Hero Section with Fullscreen Video */}
      <section className="relative h-screen w-full overflow-hidden snap-start video-container">
        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/BMW_M3_1.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
          onCanPlayThrough={handleVideoLoad}
          style={{
            willChange: 'transform',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            WebkitTransform: 'translateZ(0)',
            WebkitBackfaceVisibility: 'hidden'
          }}
        >
          <source src="/BMW_M4_video.mp4" type="video/mp4" />
          <img src="/BMW_M3_1.jpg" alt="BMW Background" className="absolute inset-0 w-full h-full object-cover" />
        </video>
        
        {/* Loading Overlay */}
        {!videoLoaded && (
          <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center z-20">
            <div className="text-white text-xl">Loading...</div>
          </div>
        )}
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Centered Content */}
        <div className="relative z-30 flex flex-col gap-5 items-center justify-center h-full">
            <h1 className="text-8xl lg:text-8xl font-bold text-white text-center px-4">AutoNam</h1>
            <h1 className="text-6xl lg:text-6xl font-bold text-white text-center px-4">
                Spolehlivý partner při{' '}
                <span className="inline-block min-w-[120px] text-center transition-all duration-100 ease-in-out">
                    {currentWord}
                </span>{' '} Vašeho auta.
            </h1>
        </div>

        {/* Scroll Button */}
        <button 
            onClick={scrollToNextSection}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm"
        >
            <svg 
                className="w-6 h-6 animate-bounce" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
            >
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
            </svg>
        </button>
      </section>

      {/* Services Section */}
      <section id="services-section" className="h-screen snap-start flex items-center justify-center bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
                Naše Služby
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Nákup Vozidel</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Profesionální nákup vašeho vozidla za férovou cenu. Rychlé vyhodnocení a okamžitá platba.
                    </p>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Prodej Vozidel</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Pomůžeme vám prodat vaše vozidlo rychle a za nejlepší možnou cenu s profesionálním marketingem.
                    </p>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Servis a Údržba</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Kompletní servisní služby pro vaše vozidlo. Od běžné údržby po komplexní opravy.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="h-screen snap-start flex items-center justify-center bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900">
                Proč Vybrat AutoNam?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                    <div className="text-4xl mb-4">🏆</div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">
                        {/*Doplnit*/}
                    </h3>
                    <p className="text-gray-600">
                        {/*Doplnit*/}
                    </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                    <div className="text-4xl mb-4">⚡</div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">
                        {/*Doplnit*/}
                    </h3>
                    <p className="text-gray-600">
                        {/*Doplnit*/}
                    </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                    <div className="text-4xl mb-4">💰</div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">
                        {/*Doplnit*/}
                    </h3>
                    <p className="text-gray-600">
                        {/*Doplnit*/}
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="h-screen snap-start flex items-center justify-center bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
                Jak To Funguje?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                    <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Kontakt</h3>
                    <p className="text-gray-600">Zavolejte nám nebo vyplňte formulář</p>
                </div>
                <div className="text-center">
                    <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Hodnocení</h3>
                    <p className="text-gray-600">Profesionální posouzení vašeho vozidla</p>
                </div>
                <div className="text-center">
                    <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Nabídka</h3>
                    <p className="text-gray-600">Získáte férovou nabídku ceny</p>
                </div>
                <div className="text-center">
                    <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Prodej</h3>
                    <p className="text-gray-600">Rychlý prodej s okamžitou platbou</p>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="h-screen snap-start flex items-center justify-center bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Připraveni Prodat Vaše Vozidlo?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
                Kontaktujte nás ještě dnes a získejte bezplatnou konzultaci a odhad ceny vašeho vozidla.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary hover:bg-primary/80 text-white font-bold py-4 px-8 text-lg rounded-lg transition-colors duration-300">
                    Kontaktovat
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 text-lg rounded-lg transition-colors duration-300">
                    Prohlédnout Vozidla
                </button>
            </div>
        </div>
      </section>
    </div>
  )
}