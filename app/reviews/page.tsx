'use client';

import Link from 'next/link';
import { StarIcon, UserCircleIcon } from '@heroicons/react/24/outline';

export default function ReviewsPage() {
  const reviews = [
    { id: 1, user: 'Sarah M.', rating: 5, location: 'Target Store', comment: 'Very clean and spacious!', date: '2 days ago' },
    { id: 2, user: 'John D.', rating: 4, location: 'Starbucks', comment: 'Good location, could use more supplies', date: '1 week ago' },
    { id: 3, user: 'Emily R.', rating: 5, location: 'City Mall', comment: 'Perfect! Private room available', date: '2 weeks ago' }
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
              <Link href="/reviews" className="text-pink-600 font-medium">Reviews</Link>
              <Link href="/profile" className="text-gray-600 hover:text-pink-600 transition-colors">Profile</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Community Reviews</h1>
          <Link href="/add-location" className="px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all">
            Write Review
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {reviews.map(review => (
            <div key={review.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <UserCircleIcon className="w-12 h-12 text-gray-400" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-gray-900">{review.user}</h3>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <StarIcon key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-pink-600 font-medium mb-2">{review.location}</p>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
