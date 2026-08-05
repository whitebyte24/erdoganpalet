'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, Filter, Layers } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { CtaSection } from '@/components/CtaSection';

function UrunlerContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('kategori') || 'hepsi';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'hepsi' || product.category === selectedCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.dimensions.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#FAFAF8] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sayfa Başlık Bannerı */}
        <div className="bg-[#0F3D2E] text-white p-8 sm:p-14 rounded-3xl wood-pattern mb-12 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-black tracking-widest text-[#D9A441] uppercase bg-[#D9A441]/10 border border-[#D9A441]/30 px-3.5 py-1 rounded-full">
              Katalog & Çeşitler
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Ahşap Palet Çözümlerimiz
            </h1>
            <p className="text-gray-300 text-base leading-relaxed">
              Euro paletler, CP kimya paletleri, ikinci el palet alım satımı ve projenize özel ahşap imalat çözümleri.
            </p>
          </div>
        </div>

        {/* Filtre ve Arama Alanı */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm mb-10 space-y-6">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
            
            {/* Arama İnputu */}
            <div className="relative w-full lg:w-96">
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" />
              <input
                type="text"
                placeholder="Palet adı veya ölçü ara (Örn: 80x120, Euro...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 focus:border-[#0F3D2E] text-sm outline-none bg-gray-50/50"
              />
            </div>

            {/* Sonuç Sayısı */}
            <div className="text-xs font-bold text-gray-600 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#1F6B52]" />
              <span>Toplam <strong>{filteredProducts.length}</strong> ürün listeleniyor</span>
            </div>

          </div>

          {/* Kategori Filtre Butonları */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all duration-200 ${
                    active
                      ? 'bg-[#0F3D2E] text-[#D9A441] shadow-md border border-[#D9A441]/30'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Ürün Listesi Izgarası */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="bg-white p-12 rounded-3xl border border-gray-200 text-center space-y-4 mb-16">
            <Filter className="w-12 h-12 text-gray-300 mx-auto" />
            <h3 className="text-xl font-bold text-[#0F3D2E]">Aramanıza Uygun Ürün Bulunamadı</h3>
            <p className="text-gray-500 text-sm">
              Lütfen arama terimini veya seçtiğiniz kategori filtresini değiştirip tekrar deneyin.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('hepsi');
                setSearchQuery('');
              }}
              className="bg-[#0F3D2E] text-white px-6 py-2.5 rounded-xl font-bold text-xs"
            >
              Filtreleri Temizle
            </button>
          </div>
        )}

      </div>

      <CtaSection />
    </div>
  );
}

export default function UrunlerPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-[#0F3D2E]">Yükleniyor...</div>}>
      <UrunlerContent />
    </Suspense>
  );
}
