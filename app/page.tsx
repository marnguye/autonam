'use client'

import React, {useEffect, useState} from 'react'


export default function Home() {
    const [currentWord, setCurrentWord] = useState('výběru')

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord(prev => prev === 'výběru' ? 'prodeji' : 'výběru')
        }, 2000) // Switch every 2 seconds

        return () => clearInterval(interval)
    }, [])

  return (
    <div className="min-h-screen w-screen">
      {/* Hero Section with Fullscreen Video */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/BMW_M4_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
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
      </section>

        {/* Scrollable Content Section */}
        <section className="bg-white py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Services Section */}
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
                        Naše Služby
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Nákup Vozidel</h3>
                <p className="text-gray-600 leading-relaxed">
                  Profesionální nákup vašeho vozidla za férovou cenu. Rychlé vyhodnocení a okamžitá platba.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Prodej Vozidel</h3>
                <p className="text-gray-600 leading-relaxed">
                  Pomůžeme vám prodat vaše vozidlo rychle a za nejlepší možnou cenu s profesionálním marketingem.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Servis a Údržba</h3>
                <p className="text-gray-600 leading-relaxed">
                  Kompletní servisní služby pro vaše vozidlo. Od běžné údržby po komplexní opravy.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
              Proč Vybrat AutoNam?</h2>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gray-900 text-white py-16 px-8 rounded-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Připraveni Prodat Vaše Vozidlo?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Kontaktujte nás ještě dnes a získejte bezplatnou konzultaci a odhad ceny vašeho vozidla.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 text-lg rounded-lg transition-colors duration-300">
                Kontaktovat
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 text-lg rounded-lg transition-colors duration-300">
                Prohlédnout Vozidla
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}