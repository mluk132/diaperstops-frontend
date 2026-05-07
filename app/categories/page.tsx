'use client';

import Link from 'next/link';
import { FunnelIcon, BuildingStorefrontIcon, ShoppingBagIcon, HomeIcon } from '@heroicons/react/24/outline';

export default function CategoriesPage() {
  const categories = [
    { name: 'Retail Stores', count: 1250, icon: ShoppingBagIcon, color: 'blue' },
    { name: 'Restaurants', count: 890, icon: BuildingStorefrontIcon, color: 'green' },
    { name: 'Shopping Malls', count: 456, icon: HomeIcon, color: 'purple' },
    { name: 'Parks & Recreation', count: 234, icon: HomeIcon, color: 'pink' }
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
              <Link href="/categories" className="text-pink-600 font-medium">Categories</Link>
              <Link href="/profile" className="text-gray-600 hover:text-pink-600 transition-colors">Profile</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
          <FunnelIcon className="w-10 h-10 text-pink-600" />
          Browse by Category
        </h1>
        <p className="text-gray-600 mb-8">Find changing stations by location type</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <Link
                key={idx}
                href={`/search?category=${category.name}`}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:scale-105 transition-all text-center"
              >
                <div className="p-4 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl w-fit mx-auto mb-4">
                  <Icon className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.count} locations</p>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
