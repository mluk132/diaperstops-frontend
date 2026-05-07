'use client';

import Link from 'next/link';
import { MapPinIcon, StarIcon } from '@heroicons/react/24/outline';

export default function NearbyPage() {
  const nearby = [
    { id: 1, name: 'Target Store', distance: '0.3 mi', rating: 4.5, open: true },
    { id: 2, name: 'Starbucks', distance: '0.5 mi', rating: 4.8, open: true },
    { id: 3, name: 'City Mall', distance: '0.8 mi', rating: 4.2, open: false }
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
              <Link href="/nearby" className="text-pink-600 font-medium">Nearby</Link>
              <Link href="/profile" className="text-gray-600 hover:text-pink-600 transition-colors">Profile</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Nearby Stations</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nearby.map(station => (
            <div key={station.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">{station.name}</h3>
                {station.open ? (
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Open</span>
                ) : (
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">Closed</span>
                )}
              </div>
              <div className="flex items-center gap-2 text-gray-600 mb-3">
                <MapPinIcon className="w-5 h-5" />
                <span>{station.distance} away</span>
              </div>
              <div className="flex items-center gap-1 mb-4">
                <StarIcon className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span className="font-semibold">{station.rating}</span>
              </div>
              <Link href={`/directions?id=${station.id}`} className="block w-full text-center px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all">
                Get Directions
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
