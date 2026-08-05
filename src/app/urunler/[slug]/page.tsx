import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, Ruler, Award } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { PalletGraphic } from '@/components/PalletGraphic';
import { CtaSection } from '@/components/CtaSection';

interface ProductDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: 'Ürün Bulunamadı | ERDOĞAN PALET',
    };
  }

  return {
    title: `${product.name} | ERDOĞAN PALET`,
    description: product.fullDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      locale: 'tr_TR',
      type: 'article',
    },
  };
}

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-[#FAFAF8] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Geri Dönüş Linki */}
        <div className="mb-8">
          <Link
            href="/urunler"
            className="inline-flex items-center gap-2 text-[#0F3D2E] font-bold text-xs hover:text-[#1F6B52] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Tüm Ürün Kataloğuna Dön</span>
          </Link>
        </div>

        {/* Ana Ürün Detay Kartı */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Sol Taraf: Büyük Vektörel Çizim & Rozetler */}
            <div className="lg:col-span-6 bg-gray-50 p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-gray-200 relative">
              <div className="flex justify-between items-start mb-6">
                <span className="bg-[#0F3D2E] text-[#D9A441] text-xs font-black px-3 py-1 rounded-full uppercase">
                  {product.categoryName}
                </span>
                {product.badge && (
                  <span className="bg-[#D9A441] text-[#0F3D2E] text-xs font-extrabold px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Fotoğraf veya Grafik */}
              <div className="w-full h-80 flex items-center justify-center rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-inner">
                {product.imageUrl ? (
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="p-4 w-full h-full">
                    <PalletGraphic type={product.category} />
                  </div>
                )}
              </div>

              {/* Sertifika İkonları */}
              <div className="pt-6 border-t border-gray-200 grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0F3D2E]">
                  <ShieldCheck className="w-4 h-4 text-[#D9A441]" />
                  <span>%100 Garanti Uyumlu</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#0F3D2E]">
                  <Award className="w-4 h-4 text-[#1F6B52]" />
                  <span>Yüksek Dayanıklı Ahşap</span>
                </div>
              </div>
            </div>

            {/* Sağ Taraf: Detaylar ve Teklif Butonu */}
            <div className="lg:col-span-6 p-8 sm:p-10 space-y-8">
              
              <div>
                <h1 className="text-3xl font-black text-[#0F3D2E] tracking-tight mb-2">
                  {product.name}
                </h1>
                <p className="text-sm font-semibold text-[#8B5E3C] flex items-center gap-2">
                  <Ruler className="w-4 h-4" /> Dış Ölçüler: {product.dimensions}
                </p>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed">
                {product.fullDescription}
              </p>

              {/* Taşıma Kapasiteleri Kartı */}
              <div className="bg-[#FAFAF8] p-5 rounded-2xl border border-gray-200 grid grid-cols-3 gap-4 text-center">
                <div>
                  <span className="block text-[11px] text-gray-500 font-bold uppercase">Statik Yük</span>
                  <span className="text-base font-extrabold text-[#0F3D2E] mt-1 block">{product.staticCapacity}</span>
                </div>
                <div className="border-x border-gray-200">
                  <span className="block text-[11px] text-gray-500 font-bold uppercase">Dinamik Yük</span>
                  <span className="text-base font-extrabold text-[#0F3D2E] mt-1 block">{product.dynamicCapacity}</span>
                </div>
                <div>
                  <span className="block text-[11px] text-gray-500 font-bold uppercase">Raf Yükü</span>
                  <span className="text-base font-extrabold text-[#1F6B52] mt-1 block">{product.rackCapacity}</span>
                </div>
              </div>

              {/* Kullanım Alanları */}
              <div>
                <h3 className="text-xs font-black text-[#0F3D2E] uppercase tracking-wider mb-3">
                  Kullanım Sektörleri & Alanları
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.useCases.map((uc, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1F6B52] shrink-0" />
                      <span>{uc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Öne Çıkan Özellikler */}
              <div>
                <h3 className="text-xs font-black text-[#0F3D2E] uppercase tracking-wider mb-3">
                  Teknik Avantajlar
                </h3>
                <ul className="space-y-2 text-xs text-gray-600">
                  {product.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D9A441] mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Buton */}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  href={`/teklif-al?urun=${encodeURIComponent(product.name)}`}
                  className="w-full bg-[#0F3D2E] text-white py-4 rounded-xl font-black text-base hover:bg-[#1F6B52] shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 border border-[#D9A441]/30"
                >
                  <span>Bu Ürün İçin Fiyat Teklifi Al</span>
                  <ArrowRight className="w-5 h-5 text-[#D9A441]" />
                </Link>
              </div>

            </div>

          </div>
        </div>

        {/* Diğer Ürün Önerileri */}
        <div className="mb-16">
          <h2 className="text-2xl font-extrabold text-[#0F3D2E] mb-6">
            İlginizi Çekebilecek Diğer Paletler
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <div key={rel.id} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                <span className="text-[10px] font-bold text-[#8B5E3C] uppercase block mb-1">{rel.categoryName}</span>
                <h3 className="font-bold text-[#0F3D2E] text-base mb-2">{rel.name}</h3>
                <p className="text-xs text-gray-500 mb-4">{rel.shortDescription}</p>
                <Link href={`/urunler/${rel.slug}`} className="text-xs font-bold text-[#0F3D2E] underline hover:text-[#1F6B52]">
                  İncele →
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>

      <CtaSection />
    </main>
  );
}
