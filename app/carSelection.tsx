'use client'

import { useState } from 'react'

export default function CarDetailPage(){
    const [activeTab, setActiveTab] = useState('Overview')

    return (
        <div className="min-h-[calc(100vh-4rem)] flex flex-col">
            {/* Main content container */}
            <div className="flex-1 flex flex-col lg:flex-row">
                {/* Left section - Car info and main image */}
                <div className="flex-1 flex flex-col lg:flex-row gap-8 p-6 lg:p-8">
                    {/* Car info and specs */}
                    <div className="w-full space-y-8">
                        <div>
                            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                                BMW M3 CS xDrive
                            </h1>
                            <p className="text-lg text-gray-600 mb-8">
                            </p>
                        </div>

                        {/* Specs in horizontal layout */}
                        <div className="flex flex-col sm:flex-row gap-6">
                            <div className="flex-1">
                                <div className="text-sm text-gray-500 mb-1">Výkon</div>
                                <div className="text-2xl font-bold text-gray-900">405 kW (551 HP)</div>
                            </div>
                            <div className="flex-1">
                                <div className="text-sm text-gray-500 mb-1">Zrychlení</div>
                                <div className="text-2xl font-bold text-gray-900">3.4 s</div>
                            </div>
                            <div className="flex-1">
                                <div className="text-sm text-gray-500 mb-1">Max rychlost</div>
                                <div className="text-2xl font-bold text-gray-900">302 km/h</div>
                            </div>
                        </div>

                        {/* Main car image and gallery side by side */}
                        <div className="flex flex-col lg:flex-row gap-6">
                            {/* Main car image - much bigger */}
                            <div className="lg:w-full">
                                <img
                                    src="BMW_M3_1.jpg"
                                    alt="BMW M3 CS"
                                    className="w-full h-96 lg:h-[500px] object-cover rounded-xl shadow-2xl"
                                />
                            </div>

                            {/* Gallery thumbnails - vertical layout on the right */}
                            <div className="lg:w-1/3">
                                <div className="flex flex-col gap-4">
                                    {['BMW_M3_2.jpg', 'BMW_M3_3.jpg', 'BMW_M3_4.jpg'].map((src, i) => (
                                        <img
                                            key={i}
                                            src={src}
                                            alt={`BMW M3 ${i + 2}`}
                                            className="w-full h-32 lg:h-36 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity border-2 border-transparent hover:border-orange-500"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Bottom navigation and actions */}
                        <div className="h-auto border-t border-gray-200 px-6 lg:px-8 py-4">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                {/* Navigation tabs */}
                                <div className="flex gap-6">
                                    <button
                                        onClick={() => setActiveTab('Overview')}
                                        className={`font-semibold transition-colors pb-2 ${
                                            activeTab === 'Overview'
                                                ? 'text-gray-900 border-b-2 border-gray-900'
                                                : 'text-gray-400 hover:text-gray-600'
                                        }`}
                                    >
                                        Přehled
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Conditional Content Based on Active Tab - Below Images */}
                        <div className="space-y-6">
                            {/* Overview Tab Content */}
                            {activeTab === 'Overview' && (
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <div className="text-sm text-gray-500 mb-1">Nájezd</div>
                                            <div className="font-semibold text-gray-900">15,000 km</div>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <div className="text-sm text-gray-500 mb-1">Typ paliva</div>
                                            <div className="font-semibold text-gray-900">Benzín</div>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <div className="text-sm text-gray-500 mb-1">Převodovka</div>
                                            <div className="font-semibold text-gray-900">Automatická / 8 stupňů</div>
                                        </div>
                                    </div>
                                    <div className="text-gray-700 leading-relaxed">
                                        <p className="mb-4">
                                            BMW M3 CS Sedan je vysokovýkonný sportovní sedan, který je navržen pro jízdy na závodních okruzích. Vyrábí se v limitované edici a kombinuje přeplňovaný zážehový 6válec M TwinPower Turbo s výkonem 405 kW (550 k) s osmistupňovou převodovkou M Steptronic a inteligentním pohonem všech kol M xDrive.
                                        </p>
                                        <p>
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}