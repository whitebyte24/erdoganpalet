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
    title: 'Ahşap Palet Çakım Hattı',
    category: 'uretim',
    categoryName: 'Üretim Tesisi',
    description: 'Yüksek kapasiteli ve düzenli palet çakım tesisimiz.',
    svgType: 'production-line',
    imageUrl: '/images/pallet_production.jpg'
  },
  {
    id: 'g2',
    title: 'Hammadde Hazırlık Sahası',
    category: 'uretim',
    categoryName: 'Üretim Tesisi',
    description: 'Seçilmiş kaliteli ahşap kerestelerin işlendiği tesis alanımız.',
    svgType: 'production-line',
    imageUrl: '/images/ispm15_heat_treatment.jpg'
  },
  {
    id: 'g3',
    title: 'Standart Euro Paletler',
    category: 'urunler',
    categoryName: 'Palet Çeşitleri',
    description: 'Kalite kontrol onayından geçmiş sevkiyata hazır Euro palet grupları.',
    svgType: 'epal-pallet',
    imageUrl: '/images/epal_euro_pallet.jpg'
  },
  {
    id: 'g4',
    title: 'Kapalı Depolama Sahası',
    category: 'depolama',
    categoryName: 'Depolama & Stok',
    description: 'Depolama alanımızda hazır palet stok düzenimiz.',
    svgType: 'storage-warehouse',
    imageUrl: '/images/pallet_warehouse.jpg'
  },
  {
    id: 'g5',
    title: 'Özmal Lojistik Filosu Sevkiyatı',
    category: 'sevkiyat',
    categoryName: 'Lojistik & Sevkiyat',
    description: 'Türkiye genelinde 81 ile günlük teslimat gerçekleştiren sevkiyat filomuz.',
    svgType: 'shipping-truck'
  },
  {
    id: 'g6',
    title: 'Özel Ölçü Ağır Yük Palet Üretimi',
    category: 'urunler',
    categoryName: 'Palet Çeşitleri',
    description: 'Müşterilerimizin özel ebatlı makineleri için tasarlanan ahşap paletler.',
    svgType: 'custom-wood',
    imageUrl: '/images/heavy_duty_pallet.jpg'
  },
  {
    id: 'g7',
    title: 'Kereste Kesim İstasyonu',
    category: 'uretim',
    categoryName: 'Üretim Tesisi',
    description: 'Ölçülü kereste ebatlayan çoklu dilme makinelerimiz.',
    svgType: 'production-line',
    imageUrl: '/images/pallet_production.jpg'
  },
  {
    id: 'g8',
    title: 'Açık Stok Depolama Sahası',
    category: 'depolama',
    categoryName: 'Depolama & Stok',
    description: 'Ahşap kereste ve palet takoz depolama alanı.',
    svgType: 'storage-warehouse',
    imageUrl: '/images/pallet_warehouse.jpg'
  },
  {
    id: 'g9',
    title: 'Lojistik Yükleme Sahası',
    category: 'sevkiyat',
    categoryName: 'Lojistik & Sevkiyat',
    description: 'Sevk edilecek ahşap ve ikinci el paletlerin yükleme anı.',
    svgType: 'shipping-truck'
  }
];
