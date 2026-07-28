export interface GalleryItem {
  id: string;
  title: string;
  category: 'uretim' | 'depolama' | 'urunler' | 'sevkiyat';
  categoryName: string;
  description: string;
  svgType: 'production-line' | 'storage-warehouse' | 'epal-pallet' | 'shipping-truck' | 'ispm15-oven' | 'custom-wood';
  imageUrl?: string;
}

export const GALLERY_CATEGORIES = [
  { id: 'hepsi', name: 'Tümü' },
  { id: 'uretim', name: 'Üretim Tesisi' },
  { id: 'depolama', name: 'Depolama & Stok' },
  { id: 'urunler', name: 'Palet Çeşitleri' },
  { id: 'sevkiyat', name: 'Lojistik & Sevkiyat' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Tam Otomatik Çakım Hattı',
    category: 'uretim',
    categoryName: 'Üretim Tesisi',
    description: 'Dakikada 12 adet standart euro palet çakım kapasiteli robotiize üretim tesisimiz.',
    svgType: 'production-line',
    imageUrl: '/images/pallet_production.jpg'
  },
  {
    id: 'g2',
    title: 'ISPM-15 Fırınlama Tesisi',
    category: 'uretim',
    categoryName: 'Üretim Tesisi',
    description: 'Aynı anda 2.500 adet palet ısıl işlem kapasiteli Tarım Bakanlığı onaylı fırınımız.',
    svgType: 'ispm15-oven',
    imageUrl: '/images/ispm15_heat_treatment.jpg'
  },
  {
    id: 'g3',
    title: 'EPAL Sertifikalı Euro Paletler',
    category: 'urunler',
    categoryName: 'Palet Çeşitleri',
    description: 'Kalite kontrol onayından geçmiş sevkiyata hazır EPAL 1 Euro palet grupları.',
    svgType: 'epal-pallet',
    imageUrl: '/images/epal_euro_pallet.jpg'
  },
  {
    id: 'g4',
    title: 'Kapalı Depolama Sahası',
    category: 'depolama',
    categoryName: 'Depolama & Stok',
    description: '10.000 m² kapalı alanda nemden korumalı hazır palet stok depolama alanımız.',
    svgType: 'storage-warehouse',
    imageUrl: '/images/pallet_warehouse.jpg'
  },
  {
    id: 'g5',
    title: 'Özmal Lojistik Filosu Sevkiyatı',
    category: 'sevkiyat',
    categoryName: 'Lojistik & Sevkiyat',
    description: 'Türkiye genelinde 81 ile günlük teslimat gerçekleştiren tır ve kamyon filomuz.',
    svgType: 'shipping-truck'
  },
  {
    id: 'g6',
    title: 'Özel Ölçü Ağır Yük Palet Üretimi',
    category: 'urunler',
    categoryName: 'Palet Çeşitleri',
    description: 'Müşterilerimizin özel ebatlı tonajlı makineleri için tasarlanan ahşap karkaslar.',
    svgType: 'custom-wood',
    imageUrl: '/images/heavy_duty_pallet.jpg'
  },
  {
    id: 'g7',
    title: 'Otomatik Kereste Kesim İstasyonu',
    category: 'uretim',
    categoryName: 'Üretim Tesisi',
    description: 'Milimetrik toleransla kereste ebatlayan çoklu dilme makinelerimiz.',
    svgType: 'production-line',
    imageUrl: '/images/pallet_production.jpg'
  },
  {
    id: 'g8',
    title: 'Açık Stok Depolama Sahası',
    category: 'depolama',
    categoryName: 'Depolama & Stok',
    description: 'Kurutulmuş hammadde kereste ve palet takoz depolama alanı.',
    svgType: 'storage-warehouse',
    imageUrl: '/images/pallet_warehouse.jpg'
  },
  {
    id: 'g9',
    title: 'Konteyner İhracat Yüklemesi',
    category: 'sevkiyat',
    categoryName: 'Lojistik & Sevkiyat',
    description: 'Deniz aşırı ülkelere sevk edilecek ISPM-15 damgalı paletlerin yükleme anı.',
    svgType: 'shipping-truck'
  }
];
