'use client';

import Link from 'next/link';
import { HeartIcon, MapPinIcon, StarIcon } from '@heroicons/react/24/outline';

export default function FavoritesPage() {
  const favorites = [
    { id: 1, name: 'Target Store', address: '123 Main St', rating: 4.5, visits: 12 },
    { id: 2, name: 'Starbucks', address: '456 Oak Ave', rating: 4.8, visits: 8 }
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
              <Link href="/favorites" className="text-pink-600 font-medium">Favorites</Link>
              <Link href="/profile" className="text-gray-600 hover:text-pink-600 transition-colors">Profile</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <HeartIcon className="w-10 h-10 text-pink-600" />
          My Favorite Stations
        </h1>

        <div className="grid grid-cols-1 gap-6">
          {favorites.map(fav => (
            <div key={fav.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{fav.name}</h3>
                  <p className="text-gray-600 flex items-center gap-2 mb-3">
                    <MapPinIcon className="w-5 h-5" />
                    {fav.address}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <StarIcon className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold">{fav.rating}</span>
                    </div>
                    <span className="text-gray-600">{fav.visits} visits</span>
                  </div>
                </div>
                <button className="p-3 bg-pink-100 rounded-xl hover:bg-pink-200 transition-colors">
                  <HeartIcon className="w-6 h-6 text-pink-600 fill-pink-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
