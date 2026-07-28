import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Üretim Tesisi ve Saha Galerisi | ERDOĞAN PALET A.Ş.',
  description: '10.000 m² kapalı üretim alanımız, robotiize çakım hatlarımız ve ISPM-15 ısıl işlem fırınlarımızdan detaylı kareler.',
  openGraph: {
    title: 'Üretim ve Depo Galerisi | ERDOĞAN PALET A.Ş.',
    description: 'ERDOĞAN PALET üretim tesisi görselleri.',
    locale: 'tr_TR',
    type: 'website',
  },
};

export default function GaleriLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
