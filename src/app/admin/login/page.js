// app/admin/login/page.jsx
'use client';

import { useState, useEffect, Suspense } from 'react';
import PinModal from '@/components/PinModal';
import LoginFormWithParams from '@/components/LoginFormWithParams';

export default function AdminLoginPage() {
  const [showPinModal, setShowPinModal] = useState(false);

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

          <Suspense fallback={
            <div className="space-y-6">
              <div className="animate-pulse">
                <div className="h-10 bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-10 bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-12 bg-gray-200 rounded-lg"></div>
              </div>
            </div>
          }>
            <LoginFormWithParams />
          </Suspense>
        </div>
      </div>

      {showPinModal && <PinModal onClose={() => setShowPinModal(false)} />}
    </>
  );
}
