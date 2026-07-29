'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Check, Layers, Weight } from 'lucide-react';
import { Product } from '@/data/products';
import { PalletGraphic } from '@/components/PalletGraphic';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1">
      
      <div>
        {/* Fotoğraf / Vektörel İllüstrasyon Header */}
        <div className="w-full h-56 bg-gray-50 border-b border-gray-100 relative group-hover:bg-[#0F3D2E]/5 transition-colors overflow-hidden flex items-center justify-center">
          {product.imageUrl ? (
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={400}
              height={300}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="p-4 w-full h-full">
              <PalletGraphic type={product.category} />
            </div>
          )}
          
          {product.badge && (
            <span className="absolute top-4 left-4 bg-[#0F3D2E] text-[#D9A441] text-[11px] font-extrabold px-3 py-1 rounded-full shadow-md z-10">
              {product.badge}
            </span>
          )}

          <span className="absolute top-4 right-4 bg-white/95 text-[#0F3D2E] text-xs font-bold px-2.5 py-1 rounded-md border border-gray-200 shadow-sm z-10">
            {product.categoryName}
          </span>
        </div>

        {/* Gövde Bilgileri */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-[#0F3D2E] group-hover:text-[#1F6B52] transition-colors leading-snug">
              {product.name}
            </h3>
            <p className="text-xs text-gray-500 font-semibold mt-1">
              Ölçü: <span className="text-[#8B5E3C]">{product.dimensions}</span>
            </p>
          </div>

          <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
            {product.shortDescription}
          </p>

          {/* Kapasite ve Özellikler Izgarası */}
          <div className="bg-[#FAFAF8] p-3 rounded-xl border border-gray-100 grid grid-cols-2 gap-2 text-[11px]">
            <div className="flex items-center gap-1.5 text-gray-700">
              <Weight className="w-3.5 h-3.5 text-[#1F6B52]" />
              <span>Statik: <strong>{product.staticCapacity}</strong></span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-700">
              <Layers className="w-3.5 h-3.5 text-[#1F6B52]" />
              <span>Dinamik: <strong>{product.dynamicCapacity}</strong></span>
            </div>
          </div>

          {/* Öne Çıkan Standartlar */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {product.standards.slice(0, 3).map((std, i) => (
              <span key={i} className="inline-flex items-center gap-1 text-[10px] font-bold text-[#0F3D2E] bg-[#0F3D2E]/5 px-2 py-0.5 rounded">
                <Check className="w-3 h-3 text-[#1F6B52]" />
                {std}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Alt Butonlar */}
      <div className="p-6 pt-0 flex items-center justify-between gap-3">
        <Link
          href={`/urunler/${product.slug}`}
          className="flex-1 text-center py-2.5 px-4 rounded-xl border border-[#0F3D2E] text-[#0F3D2E] font-bold text-xs hover:bg-[#0F3D2E] hover:text-white transition-all flex items-center justify-center gap-1"
        >
          <span>Teknik Özellikler</span>
        </Link>
        <Link
          href={`/teklif-al?urun=${encodeURIComponent(product.name)}`}
          className="py-2.5 px-4 rounded-xl bg-[#D9A441] text-[#0F3D2E] font-bold text-xs hover:bg-[#C28F2C] transition-all flex items-center justify-center gap-1 shadow-sm shrink-0"
        >
          <span>Teklif Al</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </div>
  );
};

