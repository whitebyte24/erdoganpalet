import Link from 'next/link';
import Image from 'next/image';
import { Home, ArrowLeft, PhoneCall } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-16 bg-[#FAFAF8]">
      <div className="max-w-lg w-full text-center space-y-6">
        <div className="flex justify-center mb-2">
          <Image
            src="/images/brand/logo.png"
            alt="Erdoğan Palet Logo"
            width={330}
            height={150}
            className="h-16 w-auto object-contain"
          />
        </div>

        <div className="space-y-2">
          <span className="inline-block px-3 py-1 bg-[#0F3D2E]/10 text-[#0F3D2E] rounded-full text-xs font-extrabold uppercase tracking-widest">
            404 Sayfa Bulunamadı
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F3D2E]">
            Aradığınız Sayfa Mevcut Değil
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto">
            Ulaşmaya çalıştığınız sayfa kaldırılmış, adı değiştirilmiş veya geçici olarak kullanım dışı kalmış olabilir.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0F3D2E] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#1F6B52] transition-colors shadow-md"
          >
            <Home className="w-4 h-4 text-[#D9A441]" />
            <span>Anasayfaya Dön</span>
          </Link>
          
          <Link
            href="/iletisim"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-gray-800 border border-gray-200 px-6 py-3 rounded-xl font-bold text-sm hover:bg-gray-50 transition-colors shadow-sm"
          >
            <PhoneCall className="w-4 h-4 text-[#0F3D2E]" />
            <span>İletişime Geçin</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
