'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const CORRECT_PIN = '79899897';

export default function PinModal({ onClose }) {
  const router = useRouter();
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (pin !== CORRECT_PIN) {
      setError('Invalid PIN');
      setPin('');
      return;
    }

    setLoading(true);
    try {
      // Verify PIN with backend for extra security
      const response = await fetch('/api/verify-pin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pin }),
      });

      if (!response.ok) {
        setError('PIN verification failed');
        setPin('');
        setLoading(false);
        return;
      }

      // Navigate to setup page
      router.push('/admin/setup-admin');
      onClose();
    } catch (err) {
      console.error('PIN error:', err);
      setError('An error occurred');
      setPin('');
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">Enter PIN</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="••••••••"
              maxLength="8"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-center tracking-widest text-lg"
              autoFocus
            />
          </div>

          {error && (
            <div className="text-red-600 bg-red-50 p-3 rounded-lg text-center text-sm border border-red-200">
              {error}
            </div>
          )}

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2 bg-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-400 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition"
            >
              {loading ? 'Verifying...' : 'Verify'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
