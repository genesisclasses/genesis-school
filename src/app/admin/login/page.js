'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import PinModal from '@/components/PinModal';

export default function AdminLoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPinModal, setShowPinModal] = useState(false);

  // Check for confirmation or error messages
  useEffect(() => {
    const confirmed = searchParams.get('confirmed');
    const errorParam = searchParams.get('error');

    if (confirmed) {
      setSuccess('Email confirmed successfully! You can now login.');
    }
    if (errorParam) {
      setError('Email confirmation failed. Please try again.');
    }
  }, [searchParams]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.error.includes('Email not confirmed')) {
          setError('Please confirm your email before logging in. Check your email for the confirmation link.');
        } else {
          setError(data.error || 'Login failed');
        }
        setLoading(false);
        return;
      }

      // Successful login
      router.push('/admin/dashboard');
      router.refresh();
    } catch (err) {
      console.error('Login error:', err);
      setError('An unexpected error occurred');
      setLoading(false);
    }
  };

  // Hidden keyboard shortcut: Press 'Ctrl+Shift+A' to access setup
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        setShowPinModal(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-700">
        <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">Admin Login</h1>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="admin@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                autoComplete="email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                autoComplete="current-password"
              />
            </div>

            {error && (
              <div className="text-red-600 bg-red-50 p-3 rounded-lg text-center text-sm border border-red-200">
                <span className="font-semibold">⚠️ Error:</span> {error}
              </div>
            )}

            {success && (
              <div className="text-green-600 bg-green-50 p-3 rounded-lg text-center text-sm border border-green-200">
                <span className="font-semibold">✓ Success:</span> {success}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition transform active:scale-95"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Logging in...
                </span>
              ) : (
                'Login'
              )}
            </button>
          </form>
        </div>
      </div>

      {showPinModal && <PinModal onClose={() => setShowPinModal(false)} />}
    </>
  );
}
