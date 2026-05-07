'use client';

import Link from 'next/link';
import { PlusIcon, MapPinIcon, PhotoIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function AddLocationPage() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    amenities: [] as string[],
    notes: ''
  });

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
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location Name</label>
              <input
                type="text"
                placeholder="e.g., Target Store"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
              <div className="relative">
                <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="123 Main St, City, State"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Amenities</label>
              <div className="grid grid-cols-2 gap-3">
                {['Changing Table', 'Wipes Available', 'Disposal Bin', 'Private Room', 'Clean', 'Spacious'].map(amenity => (
                  <label key={amenity} className="flex items-center gap-2 p-3 border border-gray-300 rounded-xl hover:bg-gray-50 cursor-pointer">
                    <input type="checkbox" className="rounded border-gray-300 text-pink-600 focus:ring-pink-500" />
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

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Photos</label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-pink-400 transition-colors cursor-pointer">
                <PhotoIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">Click to upload photos</p>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all font-semibold text-lg"
            >
              Submit Location
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
