'use client';

import Link from 'next/link';
import { MapIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function DirectionsPage() {
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
              <Link href="/directions" className="text-pink-600 font-medium">Directions</Link>
              <Link href="/profile" className="text-gray-600 hover:text-pink-600 transition-colors">Profile</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <ArrowRightIcon className="w-10 h-10 text-pink-600" />
          Get Directions
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Route Information</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">From</p>
                <p className="text-lg font-semibold text-gray-900">Your Current Location</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">To</p>
                <p className="text-lg font-semibold text-gray-900">Target Store</p>
                <p className="text-gray-600">123 Main St</p>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-1">Distance</p>
                <p className="text-2xl font-bold text-pink-600">0.3 miles</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Estimated Time</p>
                <p className="text-2xl font-bold text-pink-600">5 minutes</p>
              </div>
            </div>
            <button className="w-full mt-6 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all font-semibold">
              Start Navigation
            </button>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-[500px] flex items-center justify-center">
            <div className="text-center">
              <MapIcon className="w-16 h-16 text-pink-600 mx-auto mb-4" />
              <p className="text-gray-600">Map view with turn-by-turn directions</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
