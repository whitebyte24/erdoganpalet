import React from 'react';
import { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { ProductCategories } from '@/components/ProductCategories';
import { WhyUs } from '@/components/WhyUs';
import { Process } from '@/components/Process';
import { GalleryPreview } from '@/components/GalleryPreview';
import { Testimonials } from '@/components/Testimonials';
import { FaqAccordion } from '@/components/FaqAccordion';
import { CtaSection } from '@/components/CtaSection';

export const metadata: Metadata = {
  title: "ERDOĞAN PALET | Türkiye'nin Güvenilir Ahşap Palet Üreticisi",
  description: "EPAL euro palet, CP palet, ISPM-15 ısıl işlemli ihracat paletleri ve özel ebatlı ahşap karkas üretimi. Türkiye genelinde 81 ile hızlı teslimat garantisi.",
  keywords: [
    "euro palet",
    "epal palet",
    "ahşap palet üreticisi",
    "ispm15 palet",
    "cp palet",
    "ihracat paleti",
    "özel ölçü palet",
    "palet imalatı istanbul"
  ],
  openGraph: {
    title: "ERDOĞAN PALET | Türkiye'nin Güvenilir Ahşap Palet Üreticisi",
    description: "Lojistik, depolama ve ihracat süreçleriniz için yüksek kaliteli EPAL & ISPM-15 sertifikalı ahşap palet çözümleri.",
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
      <Testimonials />
      <FaqAccordion />
      <CtaSection />
    </main>
  );
}

