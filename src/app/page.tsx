import React from 'react';
import { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { ProductCategories } from '@/components/ProductCategories';
import { WhyUs } from '@/components/WhyUs';
import { Process } from '@/components/Process';
import { GalleryPreview } from '@/components/GalleryPreview';
import { CtaSection } from '@/components/CtaSection';

export const metadata: Metadata = {
  title: "ERDOĞAN PALET | Türkiye'nin Güvenilir Ahşap Palet Üreticisi",
  description: "Euro palet, CP palet, ikinci el palet alım satımı ve özel ebatlı ahşap karkas üretimi. Türkiye genelinde 81 ile hızlı teslimat garantisi.",
  keywords: [
    "euro palet",
    "ahşap palet üreticisi",
    "ikinci el palet",
    "ikinci el palet alım satım",
    "cp palet",
    "özel ölçü palet",
    "palet imalatı kocaeli",
    "palet imalatı darıca"
  ],
  openGraph: {
    title: "ERDOĞAN PALET | Türkiye'nin Güvenilir Ahşap Palet Üreticisi",
    description: "Lojistik, depolama ve sanayi süreçleriniz için yüksek kaliteli ahşap palet ve ikinci el palet çözümleri.",
    locale: "tr_TR",
    type: "website",
  }
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <ProductCategories />
      <WhyUs />
      <Process />
      <GalleryPreview />
      <CtaSection />
    </main>
  );
}
