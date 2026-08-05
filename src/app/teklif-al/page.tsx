import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { QuoteForm } from '@/components/QuoteForm';
import { ShieldCheck, Truck, Clock, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "Teklif Al | ERDOĞAN PALET A.Ş.",
  description: "Anında ahşap palet fiyat teklifi alın. Euro palet, CP palet, ikinci el palet alım satımı ve özel ebatlı ahşap ambalaj çözümleri.",
  openGraph: {
    title: "Teklif Al | ERDOĞAN PALET A.Ş.",
    description: "Online palet fiyat teklif formu.",
    locale: "tr_TR",
    type: "article",
  }
};

export default function TeklifAlPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Güven Veren Rozetler Bannerı */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-white p-4 rounded-2xl border border-gray-200 text-center space-y-1">
            <Clock className="w-6 h-6 text-[#D9A441] mx-auto" />
            <h4 className="text-xs font-bold text-[#0F3D2E]">2 Saatte Teklif</h4>
            <p className="text-[11px] text-gray-500">Hızlı satış dönüşü</p>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-gray-200 text-center space-y-1">
            <ShieldCheck className="w-6 h-6 text-[#1F6B52] mx-auto" />
            <h4 className="text-xs font-bold text-[#0F3D2E]">Kaliteli Ahşap</h4>
            <p className="text-[11px] text-gray-500">Sağlam ve güvenli</p>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-gray-200 text-center space-y-1">
            <Truck className="w-6 h-6 text-[#0F3D2E] mx-auto" />
            <h4 className="text-xs font-bold text-[#0F3D2E]">Adrese Teslim</h4>
            <p className="text-[11px] text-gray-500">81 il lojistik ağı</p>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-gray-200 text-center space-y-1">
            <Award className="w-6 h-6 text-[#8B5E3C] mx-auto" />
            <h4 className="text-xs font-bold text-[#0F3D2E]">Toplu İndirim</h4>
            <p className="text-[11px] text-gray-500">Fabrikadan doğrudan satış</p>
          </div>
        </div>

        <Suspense fallback={<div className="p-12 text-center text-[#0F3D2E]">Form Yükleniyor...</div>}>
          <QuoteForm />
        </Suspense>

      </div>
    </main>
  );
}
