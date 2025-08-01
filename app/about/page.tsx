'use client'

import React from 'react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            O Nás
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            AutoNam - váš spolehlivý partner v oblasti automobilů
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Naše Historie
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  AutoNam byla založena v roce 2025 s vizí poskytovat nejvyšší kvalitu služeb v oblasti automobilového průmyslu.
                </p>
                <p>
                  Naše společnost se specializuje na kompletní servis automobilů, od běžné údržby až po komplexní opravy. 
                  S týmem zkušených mechaniků a nejmodernějším vybavením zajišťujeme, že každé vozidlo opustí naše dveře 
                  v perfektním stavu.
                </p>
                <p>
                  Kromě servisních služeb nabízíme také profesionální hodnocení vozidel a asistenci při jejich prodeji.
                </p>
              </div>
            </div>

            {/* Image/Illustration */}
            <div className="bg-gray-100 rounded-2xl p-8 text-center">
              <div className="w-32 h-32 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-16 h-16 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Naše Hodnoty</h3>
              <p className="text-gray-600">
                Kvalita, důvěryhodnost a spokojenost zákazníků jsou základem našeho podnikání.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Team Section */}
      {/*<section className="py-20 px-4">*/}
      {/*  <div className="max-w-7xl mx-auto">*/}
      {/*    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">*/}
      {/*      Náš Tým*/}
      {/*    </h2>*/}
      {/*    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">*/}
      {/*      <div className="text-center">*/}
      {/*        <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>*/}
      {/*        <h3 className="text-xl font-bold text-gray-900 mb-2">Nam Vu Thanh</h3>*/}
      {/*        <p className="text-gray-600">CEO</p>*/}
      {/*      </div>*/}
      {/*      <div className="text-center">*/}
      {/*        <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>*/}
      {/*        <h3 className="text-xl font-bold text-gray-900 mb-2">Martin Nguyen</h3>*/}
      {/*        <p className="text-gray-600">CTO</p>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Chcete Se S Námi Spojit?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Kontaktujte nás a zjistěte, jak vám můžeme pomoci s vaším vozidlem.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 text-lg rounded-lg transition-colors duration-300">
            Kontaktovat
          </button>
        </div>
      </section>
    </div>
  )
}
