'use client'

import React from 'react'

export default function AboutPage() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {/* Hero Section */}
      <section className="h-screen snap-start bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center justify-center">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            O Nás
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            AutoNam - váš spolehlivý partner v oblasti automobilů. <br/>
            Důvěra, kvalita a spokojenost zákazníků jsou naší prioritou.
          </p>
          <div className="mt-12">
            <button className="bg-primary hover:bg-primary/80 text-white font-bold py-4 px-8 text-lg rounded-lg transition-colors duration-300">
              Zjistit Více
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="h-screen snap-start bg-white flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Naše Historie
              </h2>
              <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed">
                <p>
                  AutoNam byla založena v roce 2025 s vizí poskytovat nejvyšší kvalitu služeb v oblasti automobilového průmyslu.
                </p>
                <p>
                  Naše společnost se specializuje na kompletní servis automobilů, od běžné údržby až po komplexní opravy.
                </p>
                <p>
                  Kromě servisních služeb nabízíme také profesionální hodnocení vozidel a asistenci při jejich prodeji. 
                  Naším cílem je být vaším jediným kontaktem pro všechno, co se týká vašeho vozidla.
                </p>
              </div>
            </div>

            {/* Image/Illustration */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center shadow-lg">
              <div className="w-32 h-32 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Naše Hodnoty</h3>
              <p className="text-gray-600 text-lg">
                Kvalita, důvěryhodnost a spokojenost zákazníků jsou základem našeho podnikání.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="h-screen snap-start bg-gray-50 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            Naše Hodnoty
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Kvalita</h3>
              <p className="text-gray-600">
                Používáme pouze nejkvalitnější materiály a nejmodernější technologie pro zajištění dokonalých výsledků.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Důvěra</h3>
              <p className="text-gray-600">
                Budujeme dlouhodobé vztahy založené na transparentnosti, poctivosti a spolehlivosti.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Spokojenost</h3>
              <p className="text-gray-600">
                Spokojenost našich zákazníků je naší nejvyšší prioritou a měřítkem našeho úspěchu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="h-screen snap-start bg-white flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            Naše Úspěchy
          </h2>
        </div>
      </section>

      {/* CTA Section */}
      <section className="h-screen snap-start bg-gray-900 text-white flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Chcete Se S Námi Spojit?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Kontaktujte nás a zjistěte, jak vám můžeme pomoci s vaším vozidlem. 
            Jsme tu pro vás a připraveni odpovědět na všechny vaše otázky.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary/80 text-white font-bold py-4 px-8 text-lg rounded-lg transition-colors duration-300">
              Kontaktovat
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 text-lg rounded-lg transition-colors duration-300">
              Zjistit Více
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
