'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { RefreshCw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled runtime error:', error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-[#FAFAF8]">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
          !
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-900">
            Bir Şeyler Yanlış Gitti
          </h2>
          <p className="text-gray-600 text-sm">
            Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin veya anasayfaya dönün.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={() => reset()}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0F3D2E] text-white px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-[#1F6B52] transition-colors"
          >
            <RefreshCw className="w-4 h-4 text-[#D9A441]" />
            <span>Tekrar Dene</span>
          </button>
          
          <Link
            href="/"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-gray-200 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Anasayfa</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
