'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '@/data/gallery';
import { PalletGraphic } from '@/components/PalletGraphic';

export const GalleryPreview: React.FC = () => {
  const previewItems = GALLERY_ITEMS.slice(0, 6);

  return (
    <section className="py-20 bg-[#FAFAF8] relative border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Başlık */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-black tracking-widest text-[#8B5E3C] uppercase bg-[#8B5E3C]/10 px-3.5 py-1.5 rounded-full">
              Tesisimiz & Görseller
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F3D2E] tracking-tight mt-3">
              Üretim ve Depo Galerimiz
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mt-2 max-w-xl">
              10.000 m² kapalı alana sahip üretim tesisimiz ve lojistik operasyonlarımızdan kareler.
            </p>
          </div>

          <Link
            href="/galeri"
            className="inline-flex items-center gap-2 bg-[#0F3D2E] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#1F6B52] transition-colors shrink-0"
          >
            <span>Tüm Galeriyi Aç</span>
            <ArrowRight className="w-4 h-4 text-[#D9A441]" />
          </Link>
        </div>

        {/* Galeri Izgarası */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-full h-56 bg-gray-50 relative overflow-hidden flex items-center justify-center">
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="p-4 w-full h-full">
                    <PalletGraphic type={item.svgType} />
                  </div>
                )}
                <div className="absolute inset-0 bg-[#0F3D2E]/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-6 text-center z-10">
                  <Eye className="w-8 h-8 text-[#D9A441] mb-2" />
                  <span className="font-bold text-sm">{item.title}</span>
                  <span className="text-xs text-gray-300 mt-1">{item.categoryName}</span>
                </div>
              </div>
              <div className="p-5">
                <span className="text-[11px] font-bold text-[#8B5E3C] uppercase tracking-wider block mb-1">
                  {item.categoryName}
                </span>
                <h3 className="font-bold text-[#0F3D2E] text-base">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

