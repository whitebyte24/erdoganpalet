import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ahşap Palet Çeşitleri ve Fiyatları | ERDOĞAN PALET A.Ş.',
  description: 'EPAL 1 & 2 Euro Paletler, CP Kimya Paletleri, ISPM-15 İhracat Paletleri ve Özel Ölçü Ağır Yük Paleti Çözümleri. Fiyat ve teknik katalog.',
  openGraph: {
    title: 'Ahşap Palet Çeşitleri | ERDOĞAN PALET A.Ş.',
    description: 'Tüm ahşap palet modelleri ve teknik özellikleri.',
    locale: 'tr_TR',
    type: 'website',
  },
};

export default function UrunlerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
