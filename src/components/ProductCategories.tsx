'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { PalletGraphic } from '@/components/PalletGraphic';

const CATEGORIES_DATA = [
  {
    id: 'euro',
    title: 'Euro Palet',
    subtitle: 'Avrupa Standartlarında Dayanıklı Yapı',
    description: 'Avrupa ölçü standartlarında üretilen 80x120 cm ve 100x120 cm paletler.',
    specs: ['Avrupa Ölçü Standartı', '4.000 kg Statik Yük', 'Kurutulmuş Ahşap Malzeme'],
    slug: 'euro-palet-80-120',
    type: 'euro' as const
  },
  {
    id: 'standart',
    title: 'Standart Palet',
    subtitle: 'Yurt İçi Dağıtım & Depolama',
    description: 'Yurt içi sanayi ve depolama süreçlerinde en yüksek maliyet avantajı sağlayan standart paletler.',
    specs: ['80x120 cm Standart', 'Ekonomik Fiyat', 'Hızlı Stok Teslimat'],
    slug: 'standart-ahsap-palet-80-120',
    type: 'standart' as const
  },
  {
    id: 'cp',
    title: 'CP Palet',
    subtitle: 'Kimya & Plastik Sanayii',
    description: 'Avrupa Kimya Endüstrisi APME normlarına uygun CP1, CP3 ve CP8 özel seri paletler.',
    specs: ['APME Standartlı', 'Torbalı Yük Korumalı', 'Varil Sevkiyatına Uygun'],
    slug: 'cp-1-kimya-paleti',
    type: 'cp' as const
  },
  {
    id: 'ikinci-el',
    title: 'İkinci El Palet',
    subtitle: 'İkinci El Palet Alım Satımı',
    description: 'Kullanılmış ahşap palet alım ve satımı yapıyoruz. İhtiyaca uygun ikinci el palet çözümleri sunuyoruz.',
    specs: ['Kontrol Edilmiş Sağlam Yapı', 'Ekonomik Fiyat Avantajı', 'Hızlı Stok Teslimat'],
    slug: 'ikinci-el-ahsap-palet',
    type: 'ihracat' as const
  },
  {
    id: 'ozel',
    title: 'Özel Ölçü Palet',
    subtitle: 'Terzi Usulü Özel İmalat',
    description: 'Standart dışı tonajlı makineler, borular ve hassas yükler için projeye özel mühendislik imalatı.',
    specs: ['İstenilen Ebatta İmalat', 'Yük Analiz Destekli', 'Yüksek Tonaj Karkas'],
    slug: 'ozel-olcu-ahsap-palet-uretimi',
    type: 'ozel' as const
  },
  {
    id: 'agir-yuk',
    title: 'Ağır Yük Paleti',
    subtitle: 'Endüstriyel & Ultra Dayanıklı',
    description: 'Ağır sanayi, mermer, döküm ve tonajlı sac paletlemelerinde 5 tona kadar taşıma kapasitesi.',
    specs: ['Masif Ağaç Takoz', 'Sarkma Yapmaz Yapı', '5.000 kg+ Taşıma Gücü'],
    slug: 'agir-yuk-endustriyel-ahsap-palet',
    type: 'agir-yuk' as const
  }
];

export const ProductCategories: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAFAF8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bölüm Başlığı */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-black tracking-widest text-[#8B5E3C] uppercase bg-[#8B5E3C]/10 px-3.5 py-1.5 rounded-full">
            Ürün Kategorileri
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F3D2E] tracking-tight">
            Endüstriyel Palet Çözümlerimiz
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            İhtiyacınıza tam uygun ahşap palet çeşitlerini inceleyin, teknik detaylar ve toplu sipariş avantajlarından hemen yararlanın.
          </p>
        </div>

        {/* Kategoriler Izgarası */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES_DATA.map((cat) => (
            <div 
              key={cat.id}
              className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Vektörel Çizim Görseli */}
                <div className="w-full h-48 bg-gray-50 p-4 border-b border-gray-100 relative group-hover:bg-[#0F3D2E]/5 transition-colors">
                  <PalletGraphic type={cat.type} />
                  <span className="absolute top-3 right-3 bg-[#0F3D2E] text-[#D9A441] text-[11px] font-bold px-2.5 py-1 rounded-md">
                    {cat.title}
                  </span>
                </div>

                {/* İçerik */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-xs font-bold text-[#8B5E3C] block mb-1">
                      {cat.subtitle}
                    </span>
                    <h3 className="text-xl font-bold text-[#0F3D2E] group-hover:text-[#1F6B52] transition-colors">
                      {cat.title}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Teknik Maddeler */}
                  <ul className="space-y-2 pt-2 border-t border-gray-100">
                    {cat.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                        <Check className="w-3.5 h-3.5 text-[#1F6B52]" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Alt Butonlar */}
              <div className="p-6 pt-0 flex items-center justify-between gap-3">
                <Link
                  href={`/urunler/${cat.slug}`}
                  className="flex-1 text-center py-2.5 px-4 rounded-xl border border-[#0F3D2E] text-[#0F3D2E] font-bold text-xs hover:bg-[#0F3D2E] hover:text-white transition-all flex items-center justify-center gap-1"
                >
                  <span>Detayları İncele</span>
                </Link>
                <Link
                  href={`/teklif-al?urun=${encodeURIComponent(cat.title)}`}
                  className="py-2.5 px-4 rounded-xl bg-[#D9A441] text-[#0F3D2E] font-bold text-xs hover:bg-[#C28F2C] transition-all flex items-center justify-center gap-1 shadow-sm"
                >
                  <span>Teklif Al</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Tüm Ürünler Butonu */}
        <div className="mt-14 text-center">
          <Link
            href="/urunler"
            className="inline-flex items-center gap-2 bg-[#0F3D2E] text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-[#1F6B52] shadow-md transition-all"
          >
            <span>Tüm Palet Çeşitlerini Filtrele & İncele</span>
            <ArrowRight className="w-4 h-4 text-[#D9A441]" />
          </Link>
        </div>

      </div>
    </section>
  );
};
