'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/data/company';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-black tracking-widest text-[#0F3D2E] uppercase bg-[#0F3D2E]/10 px-3.5 py-1.5 rounded-full">
            Müşteri Deneyimleri
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F3D2E] tracking-tight">
            Kurumsal Müşteri Yorumları
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Türkiye'nin lider lojistik ve üretim devleri ERDOĞAN PALET güvenini tercih ediyor.
          </p>
        </div>

        {/* Yorum Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div 
              key={item.id}
              className="bg-[#FAFAF8] p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all relative flex flex-col justify-between"
            >
              <Quote className="w-10 h-10 text-[#D9A441]/30 absolute top-6 right-6" />

              <div className="space-y-4 relative z-10">
                {/* Yıldız Değerlendirme */}
                <div className="flex gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D9A441] text-[#D9A441]" />
                  ))}
                </div>

                <p className="text-gray-700 text-sm italic leading-relaxed">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-200/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0F3D2E] text-[#D9A441] font-bold flex items-center justify-center text-sm">
                  {item.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-[#0F3D2E] text-sm">{item.name}</h4>
                  <p className="text-xs text-gray-500">{item.role} — <span className="font-semibold text-[#8B5E3C]">{item.company}</span></p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

