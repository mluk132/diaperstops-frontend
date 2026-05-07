'use client';

import Link from 'next/link';
import { MapPinIcon, MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';

export default function MapPage() {
  const locations = [
    { id: 1, name: 'Target Store', address: '123 Main St', rating: 4.5, distance: '0.3 mi' },
    { id: 2, name: 'Starbucks Coffee', address: '456 Oak Ave', rating: 4.8, distance: '0.5 mi' },
    { id: 3, name: 'City Mall', address: '789 Park Blvd', rating: 4.2, distance: '0.8 mi' }
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
              <Link href="/map" className="text-pink-600 font-medium">Map</Link>
              <Link href="/search" className="text-gray-600 hover:text-pink-600 transition-colors">Search</Link>
              <Link href="/profile" className="text-gray-600 hover:text-pink-600 transition-colors">Profile</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Find Changing Stations</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-[600px] flex items-center justify-center">
              <div className="text-center">
                <MapPinIcon className="w-16 h-16 text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Interactive Map</h3>
                <p className="text-gray-600">Map view showing nearby changing stations</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search location..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FunnelIcon className="w-5 h-5 text-pink-600" />
                Nearby Stations
              </h3>
              <div className="space-y-3">
                {locations.map(loc => (
                  <div key={loc.id} className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <h4 className="font-semibold text-gray-900">{loc.name}</h4>
                    <p className="text-sm text-gray-600">{loc.address}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm text-pink-600">⭐ {loc.rating}</span>
                      <span className="text-sm text-gray-500">{loc.distance}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
