'use client';

import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function AccessibilityPage() {
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
              <Link href="/accessibility" className="text-pink-600 font-medium">Accessibility</Link>
              <Link href="/profile" className="text-gray-600 hover:text-pink-600 transition-colors">Profile</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Accessibility Features</h1>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-6">
          {[
            'Wheelchair accessible entrances',
            'Wide doorways and spacious changing areas',
            'Adjustable changing tables',
            'Accessible parking nearby',
            'Clear signage and wayfinding'
          ].map((feature, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <CheckCircleIcon className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700">{feature}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
