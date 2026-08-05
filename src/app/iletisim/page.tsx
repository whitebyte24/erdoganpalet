import React from 'react';
import { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { CtaSection } from '@/components/CtaSection';

export const metadata: Metadata = {
  title: "İletişim | ERDOĞAN PALET A.Ş.",
  description: "ERDOĞAN PALET Darıca Kocaeli tesis iletişim bilgileri, telefon, e-posta, WhatsApp destek hattı ve adres bilgileri.",
  openGraph: {
    title: "İletişim | ERDOĞAN PALET A.Ş.",
    description: "ERDOĞAN PALET iletişim detayları ve direkt ulaşım bilgileri.",
    locale: "tr_TR",
    type: "article",
  }
};

export default function IletisimPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Üst Banner */}
        <div className="bg-[#0F3D2E] text-white p-8 sm:p-14 rounded-3xl wood-pattern mb-12 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-black tracking-widest text-[#D9A441] uppercase bg-[#D9A441]/10 border border-[#D9A441]/30 px-3.5 py-1 rounded-full">
              7/24 Kurumsal İletişim
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Bize Ulaşın
            </h1>
            <p className="text-gray-300 text-base leading-relaxed">
              Palet ihtiyaçlarınız, özel ebat talepleriniz veya ikinci el palet alım satımı için satış ekibimizle iletişime geçin.
            </p>
          </div>
        </div>

        <ContactForm />

      </div>

      <div className="mt-16">
        <CtaSection />
      </div>
    </main>
  );
}
