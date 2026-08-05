'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, PhoneCall, Calculator, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export const CtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0F3D2E] via-[#165642] to-[#0A291F] text-white relative overflow-hidden">
      {/* Süsleme Çemberleri */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D9A441]/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-dark p-10 sm:p-16 rounded-3xl border border-[#D9A441]/20 shadow-2xl text-center max-w-4xl mx-auto space-y-8">
          
          <div className="inline-flex items-center gap-2 bg-[#D9A441]/20 text-[#D9A441] border border-[#D9A441]/40 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>2 Saatte Fiyat Teklifi Garantisi</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Projenize Özel Ahşap Palet <br className="hidden sm:inline" />
            İhtiyacınızı Hemen Fiyatlandırın
          </h2>

          <p className="text-gray-200 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            İster standart euro palet, ister ikinci el palet alım satımı veya tonajlı makinelerinize özel ölçü imalat. Uzman ekibimiz 2 saat içinde teklifinizi hazırlasın.
          </p>

          {/* Dönüşüm Butonları */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Link
              href="/teklif-al"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#D9A441] text-[#0F3D2E] px-9 py-4 rounded-xl font-black text-base hover:bg-[#C28F2C] shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5"
            >
              <Calculator className="w-5 h-5" />
              <span>Online Teklif Formu</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 text-white border border-white/20 hover:bg-white/20 px-8 py-4 rounded-xl font-bold text-base transition-all"
            >
              <PhoneCall className="w-5 h-5 text-[#D9A441]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>

          {/* Dipnot Bilgisi */}
          <div className="pt-4 text-xs text-gray-300 flex items-center justify-center gap-6">
            <span>✓ Ücretsiz Keşif & Çizim Desteği</span>
            <span className="hidden sm:inline">•</span>
            <span>✓ Toplu Sipariş İndirimleri</span>
          </div>

        </div>
      </div>
    </section>
  );
};
