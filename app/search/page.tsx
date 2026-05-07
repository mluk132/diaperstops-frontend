'use client';

import Link from 'next/link';
import { MagnifyingGlassIcon, MapPinIcon, StarIcon, ClockIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const results = [
    { id: 1, name: 'Target Store', address: '123 Main St', rating: 4.5, reviews: 45, amenities: ['Changing Table', 'Wipes', 'Disposal'] },
    { id: 2, name: 'Starbucks Coffee', address: '456 Oak Ave', rating: 4.8, reviews: 32, amenities: ['Changing Table', 'Clean'] },
    { id: 3, name: 'City Mall', address: '789 Park Blvd', rating: 4.2, reviews: 67, amenities: ['Changing Table', 'Private Room'] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              DiaperStops
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/map" className="text-gray-600 hover:text-pink-600 transition-colors">Map</Link>
              <Link href="/search" className="text-pink-600 font-medium">Search</Link>
              <Link href="/profile" className="text-gray-600 hover:text-pink-600 transition-colors">Profile</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Search Changing Stations</h1>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by location, store name, or address..."
              className="w-full pl-14 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 text-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {results.map(result => (
            <div key={result.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{result.name}</h3>
                  <p className="text-gray-600 flex items-center gap-2 mb-3">
                    <MapPinIcon className="w-5 h-5" />
                    {result.address}
                  </p>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <StarIcon className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold">{result.rating}</span>
                      <span className="text-gray-500">({result.reviews} reviews)</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {result.amenities.map((amenity, idx) => (
                      <span key={idx} className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
                <Link href={`/directions?id=${result.id}`} className="px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all">
                  Get Directions
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
