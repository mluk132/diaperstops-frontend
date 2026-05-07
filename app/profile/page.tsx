'use client';

import Link from 'next/link';
import { MapPinIcon, StarIcon, HeartIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function ProfilePage() {
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
              <Link href="/favorites" className="text-gray-600 hover:text-pink-600 transition-colors">Favorites</Link>
              <Link href="/profile" className="text-pink-600 font-medium">Profile</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
              JP
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Jane Parent</h1>
              <p className="text-gray-600">New Parent • Member since 2026</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <MapPinIcon className="w-8 h-8 text-pink-600 mb-2" />
            <p className="text-3xl font-bold text-gray-900">24</p>
            <p className="text-gray-600">Stations Visited</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <StarIcon className="w-8 h-8 text-pink-600 mb-2" />
            <p className="text-3xl font-bold text-gray-900">12</p>
            <p className="text-gray-600">Reviews Written</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <HeartIcon className="w-8 h-8 text-pink-600 mb-2" />
            <p className="text-3xl font-bold text-gray-900">8</p>
            <p className="text-gray-600">Favorite Locations</p>
          </div>
        </div>
      </main>
    </div>
  );
}
