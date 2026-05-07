'use client';

import Link from 'next/link';
import { ClockIcon } from '@heroicons/react/24/outline';

export default function HoursPage() {
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
              <Link href="/hours" className="text-pink-600 font-medium">Hours</Link>
              <Link href="/profile" className="text-gray-600 hover:text-pink-600 transition-colors">Profile</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <ClockIcon className="w-10 h-10 text-pink-600" />
          Operating Hours
        </h1>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <p className="text-gray-700 mb-6">Check location-specific hours before visiting. Most changing stations follow the operating hours of their host location.</p>
          <div className="space-y-4">
            {['Monday - Friday: 9:00 AM - 9:00 PM', 'Saturday: 10:00 AM - 8:00 PM', 'Sunday: 11:00 AM - 6:00 PM'].map((hours, idx) => (
              <div key={idx} className="p-4 bg-gray-50 rounded-xl">
                <p className="text-lg font-semibold text-gray-900">{hours}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
