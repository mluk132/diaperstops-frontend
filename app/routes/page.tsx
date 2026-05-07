'use client';

import Link from 'next/link';
import { MapIcon, PlusIcon } from '@heroicons/react/24/outline';

export default function RoutesPage() {
  const routes = [
    { id: 1, name: 'Downtown Shopping Route', stops: 5, distance: '2.3 mi' },
    { id: 2, name: 'Park Day Trip', stops: 3, distance: '4.1 mi' }
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
              <Link href="/routes" className="text-pink-600 font-medium">Routes</Link>
              <Link href="/profile" className="text-gray-600 hover:text-pink-600 transition-colors">Profile</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
            <MapIcon className="w-10 h-10 text-pink-600" />
            My Routes
          </h1>
          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all">
            <PlusIcon className="w-5 h-5" />
            Create Route
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {routes.map(route => (
            <div key={route.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{route.name}</h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600">{route.stops} stops</p>
                  <p className="text-gray-600">{route.distance} total</p>
                </div>
                <Link href={`/directions?route=${route.id}`} className="px-4 py-2 bg-pink-600 text-white rounded-xl hover:bg-pink-700 transition-colors">
                  View Route
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
