'use client';

import Link from 'next/link';
import { 
  MapPinIcon,
  MagnifyingGlassIcon,
  StarIcon,
  UserGroupIcon,
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function Home() {
  const features = [
    {
      icon: MapPinIcon,
      title: 'Find Nearby Stations',
      description: 'Locate baby changing stations near you with real-time availability'
    },
    {
      icon: StarIcon,
      title: 'Community Reviews',
      description: 'Read reviews from other parents about cleanliness and amenities'
    },
    {
      icon: ClockIcon,
      title: 'Operating Hours',
      description: 'Check opening hours and plan your visits accordingly'
    },
    {
      icon: UserGroupIcon,
      title: 'Parent Community',
      description: 'Connect with other parents and share tips and experiences'
    }
  ];

  const stats = [
    { value: '10,000+', label: 'Locations' },
    { value: '50,000+', label: 'Parents' },
    { value: '25,000+', label: 'Reviews' },
    { value: '150+', label: 'Cities' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              DiaperStops
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/map" className="text-gray-600 hover:text-pink-600 transition-colors">
                Map
              </Link>
              <Link href="/search" className="text-gray-600 hover:text-pink-600 transition-colors">
                Search
              </Link>
              <Link href="/community" className="text-gray-600 hover:text-pink-600 transition-colors">
                Community
              </Link>
              <Link href="/login" className="text-gray-600 hover:text-pink-600 transition-colors">
                Login
              </Link>
              <Link href="/register" className="px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all">
                Sign Up
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Find Baby Changing Stations
                <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Anywhere, Anytime
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Never worry about finding a clean, safe place to change your baby. Join thousands of parents using DiaperStops.
              </p>
              <div className="flex gap-4">
                <Link href="/map" className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all font-semibold text-lg">
                  Find Stations Near Me
                </Link>
                <Link href="/register" className="px-8 py-4 bg-white text-pink-600 border-2 border-pink-600 rounded-xl hover:bg-pink-50 transition-all font-semibold text-lg">
                  Join Community
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-pink-400 to-purple-500 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform">
                <div className="bg-white rounded-2xl p-6">
                  <MapPinIcon className="w-16 h-16 text-pink-600 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Interactive Map</h3>
                  <p className="text-gray-600">View all nearby changing stations on an interactive map with real-time updates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything Parents Need
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive features to make parenting on-the-go easier
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:scale-105 transition-all cursor-pointer"
                >
                  <div className="p-4 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl w-fit mb-4">
                    <Icon className="w-8 h-8 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gradient-to-br from-pink-600 to-purple-600 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-pink-100">Get started in three simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Search Location', description: 'Enter your location or use GPS to find nearby stations' },
              { step: '2', title: 'View Details', description: 'Check reviews, amenities, and operating hours' },
              { step: '3', title: 'Navigate', description: 'Get directions and visit the station' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white text-pink-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-pink-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Make Parenting Easier?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of parents who trust DiaperStops for their changing station needs
          </p>
          <Link href="/register" className="inline-block px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all font-semibold text-lg">
            Get Started Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">DiaperStops</h3>
              <p className="text-gray-400">Making parenting on-the-go easier, one station at a time.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2">
                <Link href="/map" className="block text-gray-400 hover:text-white transition-colors">Map</Link>
                <Link href="/search" className="block text-gray-400 hover:text-white transition-colors">Search</Link>
                <Link href="/nearby" className="block text-gray-400 hover:text-white transition-colors">Nearby</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <div className="space-y-2">
                <Link href="/community" className="block text-gray-400 hover:text-white transition-colors">Forum</Link>
                <Link href="/tips" className="block text-gray-400 hover:text-white transition-colors">Tips</Link>
                <Link href="/reviews" className="block text-gray-400 hover:text-white transition-colors">Reviews</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">About</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Privacy</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 DiaperStops. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
