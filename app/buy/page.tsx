'use client'

import React, { useState } from 'react'
import { Navbar } from '@/components/Navbar'
import { cars } from '../../data/cars'

const formatPrice = (price: number) => price.toLocaleString('cs-CZ') + ' Kč';

export default function Page() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});

  const nextImage = (carIndex: number) => {
    const currentIndex = currentImageIndex[carIndex] || 0;
    const maxIndex = cars[carIndex].images.length - 1;
    setCurrentImageIndex(prev => ({
      ...prev,
      [carIndex]: currentIndex < maxIndex ? currentIndex + 1 : 0
    }));
  };

  const prevImage = (carIndex: number) => {
    const currentIndex = currentImageIndex[carIndex] || 0;
    const maxIndex = cars[carIndex].images.length - 1;
    setCurrentImageIndex(prev => ({
      ...prev,
      [carIndex]: currentIndex > 0 ? currentIndex - 1 : maxIndex
    }));
  };

  const isFirstImage = (carIndex: number) => {
    return (currentImageIndex[carIndex] || 0) === 0;
  };

  return (
    <div className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory overflow-hidden">
      <Navbar />
      {cars.map((car, index) => {
        const isOpen = expanded === index;
        const currentImage = currentImageIndex[index] || 0;
        const showDetails = isFirstImage(index);
        
        return (
          <section
            key={car.name + car.year}
            className="h-screen w-screen flex snap-start relative items-center justify-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(${car.images[currentImage]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Navigation Arrows */}
            <button
              onClick={() => prevImage(index)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={() => nextImage(index)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Bullet Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
              {car.images.map((_, imageIndex) => (
                <button
                  key={imageIndex}
                  onClick={() => setCurrentImageIndex(prev => ({
                    ...prev,
                    [index]: imageIndex
                  }))}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    imageIndex === currentImage 
                      ? 'bg-white scale-125' 
                      : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                  }`}
                />
              ))}
            </div>

            {/* Content - Only show on first image */}
            {showDetails && (
              <div className="absolute top-20 left-0 w-full px-6 z-10">
                <div className="max-w-4xl mx-auto">
                  <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 text-white">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <h1 className="text-4xl lg:text-6xl font-bold mb-4 lg:mb-0">
                        {car.name}
                      </h1>
                      <div className="text-right">
                        <div className="text-3xl lg:text-5xl font-bold text-red-400 mb-2">
                          {formatPrice(car.price)}
                        </div>
                      </div>
                    </div>
                    <p className="text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed">
                      {car.description}
                    </p>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                      <div className="text-center">
                        <div className="text-2xl lg:text-3xl font-bold text-red-400">
                          {car.power}
                        </div>
                        <div className="text-sm text-gray-300">Výkon</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl lg:text-3xl font-bold text-red-400">
                          {car.acceleration}
                        </div>
                        <div className="text-sm text-gray-300">0-100 km/h</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl lg:text-3xl font-bold text-red-400">
                          {car.mileage}
                        </div>
                        <div className="text-sm text-gray-300">Najeto</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl lg:text-3xl font-bold text-red-400">
                          {car.year}
                        </div>
                        <div className="text-sm text-gray-300">Rok Výroby</div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        className="flex-1 bg-red-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors"
                        onClick={() => setExpanded(isOpen ? null : index)}
                      >
                        {isOpen ? 'Skrýt Detaily' : 'Zobrazit Detaily'}
                      </button>
                      <button className="flex-1 border-2 border-white text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-colors">
                        Kontaktovat
                      </button>
                    </div>
                    {/* Expandable details */}
                    <div
                      className={`
                        overflow-hidden transition-all duration-500
                        ${isOpen ? 'max-h-96 opacity-100 mt-8' : 'max-h-0 opacity-0 mt-0'}
                      `}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                        <div>
                          <div className="font-semibold text-gray-200">Max rychlost</div>
                          <div className="text-gray-300">{car.speed}</div>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-200">Barva</div>
                          <div className="text-gray-300">{car.color}</div>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-200">Převodovka</div>
                          <div className="text-gray-300">{car.transmission}</div>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-200">Palivo</div>
                          <div className="text-gray-300">{car.fuel}</div>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-200">Objem</div>
                          <div className="text-gray-300">{car.displacement}</div>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-200">Karoserie</div>
                          <div className="text-gray-300">{car.body}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}