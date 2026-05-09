'use client';

import Link from 'next/link';
import { MapPinIcon, StarIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import { api, Station } from '@/lib/api';

export default function NearbyPage() {
  const [stations, setStations] = useState<Station[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadStations();
  }, []);

  const loadStations = async () => {
    try {
      const data = await api.getStations();
      setStations(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load stations');
    } finally {
      setLoading(false);
    }
  };

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
              <Link href="/nearby" className="text-pink-600 font-medium">Nearby</Link>
              <Link href="/profile" className="text-gray-600 hover:text-pink-600 transition-colors">Profile</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Nearby Stations</h1>

        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600"></div>
            <p className="mt-4 text-gray-600">Loading stations...</p>
          </div>
        )}

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 mb-6">
            {error}
          </div>
        )}

        {!loading && !error && stations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">No stations found nearby.</p>
            <Link href="/add-location" className="inline-block px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all">
              Add the First Station
            </Link>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stations.map(station => (
            <div key={station.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">{station.name}</h3>
                {station.hours && (
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Open</span>
                )}
              </div>
              <div className="flex items-center gap-2 text-gray-600 mb-3">
                <MapPinIcon className="w-5 h-5" />
                <span className="text-sm">{station.address}</span>
              </div>
              {station.average_rating && (
                <div className="flex items-center gap-1 mb-4">
                  <StarIcon className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="font-semibold">{station.average_rating.toFixed(1)}</span>
                  {station.review_count && (
                    <span className="text-sm text-gray-500">({station.review_count})</span>
                  )}
                </div>
              )}
              <Link href={`/directions?id=${station.id}`} className="block w-full text-center px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all">
                Get Directions
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
