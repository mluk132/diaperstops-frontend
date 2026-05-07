'use client';

import Link from 'next/link';
import { LightBulbIcon, StarIcon } from '@heroicons/react/24/outline';

export default function TipsPage() {
  const tips = [
    { id: 1, title: 'Always Carry Essentials', content: 'Keep a portable changing mat, wipes, and disposal bags in your diaper bag', category: 'Preparation', likes: 156 },
    { id: 2, title: 'Check Hours Before Visiting', content: 'Some changing stations are only accessible during business hours', category: 'Planning', likes: 89 },
    { id: 3, title: 'Leave Reviews', content: 'Help other parents by sharing your experience and rating locations', category: 'Community', likes: 234 },
    { id: 4, title: 'Use the App Offline', content: 'Save your favorite locations for offline access when traveling', category: 'App Tips', likes: 67 }
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
              <Link href="/community" className="text-gray-600 hover:text-pink-600 transition-colors">Community</Link>
              <Link href="/tips" className="text-pink-600 font-medium">Tips</Link>
              <Link href="/profile" className="text-gray-600 hover:text-pink-600 transition-colors">Profile</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
          <LightBulbIcon className="w-10 h-10 text-pink-600" />
          Parent Tips & Tricks
        </h1>
        <p className="text-gray-600 mb-8">Helpful advice from experienced parents</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tips.map(tip => (
            <div key={tip.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
              <div className="flex items-start justify-between mb-3">
                <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
                  {tip.category}
                </span>
                <div className="flex items-center gap-1 text-gray-600">
                  <StarIcon className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm">{tip.likes}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{tip.title}</h3>
              <p className="text-gray-600">{tip.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-pink-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Have a Tip to Share?</h2>
          <p className="text-pink-100 mb-6">Help other parents by sharing your knowledge and experience</p>
          <button className="px-8 py-3 bg-white text-pink-600 rounded-xl hover:shadow-lg transition-all font-semibold">
            Submit a Tip
          </button>
        </div>
      </main>
    </div>
  );
}
