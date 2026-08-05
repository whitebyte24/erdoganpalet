import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Üretim Tesisi ve Saha Galerisi | ERDOĞAN PALET A.Ş.',
  description: 'Ahşap palet imalat tesisimiz, depolama alanlarımız ve lojistik filomuzdan detaylı kareler.',
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
