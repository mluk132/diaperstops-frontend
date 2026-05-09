'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { PlusIcon, MapPinIcon, PhotoIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { api } from '@/lib/api';

export default function AddLocationPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    amenities: [] as string[],
    hours: '',
    notes: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleAmenityToggle = (amenity: string) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await api.createStation({
        name: formData.name,
        address: formData.address,
        amenities: formData.amenities,
        hours: formData.hours || undefined,
      });

      setSuccess(true);
      setTimeout(() => {
        router.push('/nearby');
      }, 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add station');
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
              <Link href="/add-location" className="text-pink-600 font-medium">Add Location</Link>
              <Link href="/profile" className="text-gray-600 hover:text-pink-600 transition-colors">Profile</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
          <PlusIcon className="w-10 h-10 text-pink-600" />
          Add New Station
        </h1>
        <p className="text-gray-600 mb-8">Help other parents by adding a changing station location</p>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          {success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800">
              ✓ Station added successfully! Redirecting...
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-800">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location Name *</label>
              <input
                type="text"
                placeholder="e.g., Target Store"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
              <div className="relative">
                <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="123 Main St, City, State"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Hours</label>
              <input
                type="text"
                placeholder="e.g., Mon-Fri 9am-9pm"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500"
                value={formData.hours}
                onChange={(e) => setFormData({...formData, hours: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Amenities</label>
              <div className="grid grid-cols-2 gap-3">
                {['Changing Table', 'Wipes Available', 'Disposal Bin', 'Private Room', 'Clean', 'Spacious'].map(amenity => (
                  <label key={amenity} className="flex items-center gap-2 p-3 border border-gray-300 rounded-xl hover:bg-gray-50 cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                      checked={formData.amenities.includes(amenity)}
                      onChange={() => handleAmenityToggle(amenity)}
                    />
                    <span className="text-sm">{amenity}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
              <textarea
                rows={4}
                placeholder="Any additional information..."
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500"
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
              />
            </div>

            <button
              type="submit"
              disabled={loading || success}
              className="w-full py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Adding Station...' : success ? 'Added!' : 'Submit Location'}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
