'use client';

import React, { useState, useMemo } from 'react';
import { GALLERY_ITEMS, GALLERY_CATEGORIES, GalleryItem } from '@/data/gallery';
import { PalletGraphic } from '@/components/PalletGraphic';
import { Eye, X, ShieldCheck } from 'lucide-react';
import { CtaSection } from '@/components/CtaSection';

export default function GaleriPage() {
  const [selectedCat, setSelectedCat] = useState('hepsi');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(() => {
    if (selectedCat === 'hepsi') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === selectedCat);
  }, [selectedCat]);

  return (
    <main className="min-h-screen bg-[#FAFAF8] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Üst Banner */}
        <div className="bg-[#0F3D2E] text-white p-8 sm:p-14 rounded-3xl wood-pattern mb-12 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-black tracking-widest text-[#D9A441] uppercase bg-[#D9A441]/10 border border-[#D9A441]/30 px-3.5 py-1 rounded-full">
              Medya & Galeri
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Üretim Tesisi ve Saha Galerisi
            </h1>
            <p className="text-gray-300 text-base leading-relaxed">
              Tam otomatik robotik çakım hatlarımız, ISPM-15 ısıl işlem fırınlarımız, kapalı depolama sahamız ve lojistik filomuzdan detaylı görseller.
            </p>
          </div>
        </div>

        {/* Kategori Filtre Tabları */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {GALLERY_CATEGORIES.map((cat) => {
            const active = selectedCat === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all duration-200 ${
                  active
                    ? 'bg-[#0F3D2E] text-[#D9A441] shadow-lg border border-[#D9A441]/30'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Masonry / Izgara Görünümü */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group"
            >
              <div className="w-full h-64 bg-gray-50 relative flex items-center justify-center overflow-hidden">
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
                
                {/* Overlay hover */}
                <div className="absolute inset-0 bg-[#0F3D2E]/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-6 text-center space-y-2 z-10">
                  <div className="w-12 h-12 rounded-full bg-[#D9A441] text-[#0F3D2E] flex items-center justify-center font-bold">
                    <Eye className="w-6 h-6" />
                  </div>
                  <span className="font-extrabold text-base">{item.title}</span>
                  <span className="text-xs text-gray-300">{item.categoryName}</span>
                </div>
              </div>

              <div className="p-6">
                <span className="text-[11px] font-extrabold text-[#8B5E3C] uppercase tracking-wider block mb-1">
                  {item.categoryName}
                </span>
                <h3 className="font-bold text-[#0F3D2E] text-lg">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {activeModalItem && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-white max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl relative animate-fadeIn">
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="w-full h-80 bg-gray-100 flex items-center justify-center overflow-hidden">
                {activeModalItem.imageUrl ? (
                  <img
                    src={activeModalItem.imageUrl}
                    alt={activeModalItem.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="p-6 w-full h-full">
                    <PalletGraphic type={activeModalItem.svgType} />
                  </div>
                )}
              </div>

              <div className="p-8 space-y-4">
                <span className="bg-[#0F3D2E] text-[#D9A441] text-xs font-black px-3 py-1 rounded-full uppercase">
                  {activeModalItem.categoryName}
                </span>
                <h3 className="text-2xl font-black text-[#0F3D2E]">
                  {activeModalItem.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {activeModalItem.description}
                </p>
                <div className="pt-4 border-t border-gray-100 flex justify-end">
                  <button
                    onClick={() => setActiveModalItem(null)}
                    className="bg-[#0F3D2E] text-white px-6 py-2 rounded-xl font-bold text-xs"
                  >
                    Kapat
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      <CtaSection />
    </main>
  );
}

