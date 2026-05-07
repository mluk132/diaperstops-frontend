'use client';

import Link from 'next/link';
import { PhotoIcon } from '@heroicons/react/24/outline';

export default function PhotosPage() {
  const photos = [
    { id: 1, location: 'Target Store', user: 'Sarah M.', likes: 24 },
    { id: 2, location: 'Starbucks', user: 'John D.', likes: 18 },
    { id: 3, location: 'City Mall', user: 'Emily R.', likes: 32 }
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
              <Link href="/photos" className="text-pink-600 font-medium">Photos</Link>
              <Link href="/profile" className="text-gray-600 hover:text-pink-600 transition-colors">Profile</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <PhotoIcon className="w-10 h-10 text-pink-600" />
          Location Photos
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {photos.map(photo => (
            <div key={photo.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all">
              <div className="h-64 bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center">
                <PhotoIcon className="w-16 h-16 text-white" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-1">{photo.location}</h3>
                <p className="text-sm text-gray-600">by {photo.user}</p>
                <p className="text-sm text-pink-600 mt-2">❤️ {photo.likes} likes</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
