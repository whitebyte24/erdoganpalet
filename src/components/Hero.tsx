'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Truck, Award, CheckCircle2 } from 'lucide-react';
import { PalletGraphic } from '@/components/PalletGraphic';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAFAF8] via-[#FAFAF8] to-white pt-10 pb-20 lg:pt-16 lg:pb-28">
      {/* Arkaplan Şık Desenler */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1F6B52]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8B5E3C]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Sol Metin ve Dönüşüm Alanı */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Üst Sertifika Etiketi */}
            <div className="inline-flex items-center gap-2 bg-[#0F3D2E]/5 border border-[#0F3D2E]/15 px-4 py-2 rounded-full text-xs font-bold text-[#0F3D2E]">
              <ShieldCheck className="w-4 h-4 text-[#D9A441]" />
              <span>Yüksek Kaliteli Ahşap Palet İmalatçısı</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D9A441] animate-ping" />
            </div>

            {/* Ana Başlık */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F3D2E] tracking-tight leading-[1.15]">
              Türkiye'nin Güvenilir <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F3D2E] via-[#1F6B52] to-[#8B5E3C]">
                Palet Üreticisi
              </span>
            </h1>

            {/* Alt Başlık */}
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-normal max-w-2xl">
              Lojistik, depolama ve sanayi süreçleriniz için yüksek kaliteli ahşap palet çözümleri. Ahşap paletlerden özel ebatlı sanayi karkaslarına ve ikinci el palet çözümlerine kadar güvenilir üretim.
            </p>

            {/* Öne Çıkan Özellik Maddeleri */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                <CheckCircle2 className="w-4 h-4 text-[#1F6B52]" />
                <span>İkinci El Palet Alım Satımı</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                <CheckCircle2 className="w-4 h-4 text-[#1F6B52]" />
                <span>Stoktan Aynı Gün Sevkiyat</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                <CheckCircle2 className="w-4 h-4 text-[#1F6B52]" />
                <span>Terzi Usulü Özel Ebat</span>
              </div>
            </div>

            {/* CTA Butonları */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/teklif-al"
                className="inline-flex items-center justify-center gap-3 bg-[#0F3D2E] text-white px-8 py-4 rounded-xl font-extrabold text-base hover:bg-[#1F6B52] shadow-xl shadow-[#0F3D2E]/20 hover:shadow-2xl transition-all transform hover:-translate-y-1 group border border-[#D9A441]/40"
              >
                <span>Teklif Al</span>
                <ArrowRight className="w-5 h-5 text-[#D9A441] group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/urunler"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0F3D2E] border-2 border-[#0F3D2E]/20 px-8 py-4 rounded-xl font-bold text-base hover:bg-gray-50 hover:border-[#0F3D2E] transition-all shadow-sm"
              >
                <span>Ürünleri İncele</span>
              </Link>
            </div>

            {/* Güven Veren İkon Kartları */}
            <div className="pt-6 border-t border-gray-200/80 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#D9A441]/15 flex items-center justify-center text-[#0F3D2E]">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0F3D2E]">81 İle Sevkiyat</h4>
                  <p className="text-[11px] text-gray-500">Adrese teslim lojistik ağı</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0F3D2E]/10 flex items-center justify-center text-[#0F3D2E]">
                  <Award className="w-5 h-5 text-[#D9A441]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0F3D2E]">Kaliteli Üretim</h4>
                  <p className="text-[11px] text-gray-500">11+ Yıllık Tecrübe</p>
                </div>
              </div>
            </div>

          </div>

          {/* Sağ Görsel & Palet Maketi */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Arka kart süslemesi */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#0F3D2E] to-[#D9A441] opacity-15 rounded-3xl blur-xl" />
              
              <div className="relative glass-card p-6 rounded-2xl border border-gray-200 shadow-2xl space-y-6">
                {/* Ürün Görseli */}
                <div className="w-full h-64 rounded-xl overflow-hidden bg-white shadow-inner flex items-center justify-center relative">
                  <Image
                    src="/images/epal_euro_pallet.jpg"
                    alt="Standart Euro Palet (80x120 cm)"
                    width={600}
                    height={400}
                    priority
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#0F3D2E]/90 text-[#D9A441] text-[10px] font-extrabold uppercase px-3 py-1 rounded-md shadow backdrop-blur-sm border border-[#D9A441]/30">
                    STANDART EURO PALET (80x120 cm)
                  </div>
                </div>

                {/* Hızlı Özellik Çubuğu */}
                <div className="bg-[#FAFAF8] p-4 rounded-xl border border-gray-200 grid grid-cols-3 gap-2 text-center">
                  <div>
                    <span className="block text-[10px] text-gray-500 font-medium">Statik Yük</span>
                    <span className="text-xs font-bold text-[#0F3D2E]">4.000 KG</span>
                  </div>
                  <div className="border-x border-gray-200">
                    <span className="block text-[10px] text-gray-500 font-medium">Dinamik Yük</span>
                    <span className="text-xs font-bold text-[#0F3D2E]">1.500 KG</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-500 font-medium">Nem Oranı</span>
                    <span className="text-xs font-bold text-[#1F6B52]">{"< %22 Kurutulmuş"}</span>
                  </div>
                </div>

                {/* Canlı Teklif Bilgisi Rozeti */}
                <div className="flex items-center justify-between text-xs bg-[#0F3D2E] text-white p-3 rounded-xl">
                  <span className="font-semibold text-gray-200">Kurumsal Toplu Sipariş İndirimi</span>
                  <span className="bg-[#D9A441] text-[#0F3D2E] font-black px-2.5 py-0.5 rounded">Fiyat Alın</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
